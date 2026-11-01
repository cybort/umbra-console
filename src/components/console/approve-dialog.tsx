import { useState } from "react";
import { ACTION_LABEL, COPY, KIND_LABEL } from "@/lib/ir/labels";
import { catalogFindings, useIRStore } from "@/lib/ir/store";
import { quarantineLocal } from "@/lib/ir/local-fs";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ActionStatus } from "@/lib/ir/types";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

const STATUS_TEXT: Record<ActionStatus, string> = {
  queued: "待执行",
  running: "执行中",
  done: "完成",
  failed: "失败",
  "rolled-back": "已回滚",
};

export function ApproveDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const planned = useIRStore((s) => s.planned);
  const setActionStatus = useIRStore((s) => s.setActionStatus);
  const applyExecuted = useIRStore((s) => s.applyExecuted);
  const setScanStatus = useIRStore((s) => s.setScanStatus);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const extraFindings = useIRStore((s) => s.extraFindings);
  const hostMode = useIRStore((s) => s.hostMode);
  const scenarioId = useIRStore((s) => s.scenarioId);
  const [busy, setBusy] = useState(false);

  const catalog = catalogFindings({ scenarioId, hostMode, extraFindings });
  const items = planned
    .map((p) => ({ ...p, finding: catalog.find((f) => f.id === p.findingId) }))
    .filter((p) => p.finding);

  const running = scanStatus === "executing";
  const finished = scanStatus === "executed";

  async function approve() {
    if (!items.length || busy) return;
    setBusy(true);
    setScanStatus("executing");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    for (const item of items) {
      setActionStatus(item.findingId, "running");
      const f = item.finding!;
      if (item.action === "block" && f.local) {
        const ok = await quarantineLocal(f.path);
        if (!ok) {
          setActionStatus(item.findingId, "failed");
          await sleep(reduced ? 40 : 320);
          continue;
        }
      }
      await sleep(reduced ? 40 : 640);
      applyExecuted(item.findingId, item.action);
      setActionStatus(item.findingId, "done");
    }
    setScanStatus("executed");
    setBusy(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col">
        <DialogHeader>
          <DialogTitle>{finished ? copy.done : copy.preview}</DialogTitle>
          <DialogDescription>
            {finished
              ? cover
                ? "操作已写入本会话。计划项已留下还原点。"
                : "进程已从会话表结束，磁盘卷已隔离，用户态 API 入口已按备份还原，本机命中文件已移入隔离目录。策略均先备份。"
              : cover
                ? "确认前可核对将结束的任务、停用的映像与卷。"
                : hostMode === "physical"
                  ? "批准后：结束会话进程、还原用户态 API 入口、隔离磁盘卷；授权目录内的文件会移到 .umbra-quarantine。不会低格磁盘，也不能改你机器上的 ntdll。"
                  : "不会立即改动快照。核对后批准：结束进程、还原 API 入口、阻断执行、策略备份清除。"}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1">
          <ol className="flex flex-col gap-2">
            {items.map((item) => {
              const f = item.finding!;
              const action = ACTION_LABEL[item.action][cover ? "cover" : "ops"];
              const kind = KIND_LABEL[f.kind][cover ? "cover" : "ops"];
              return (
                <li key={item.findingId} className="rounded-md bg-surface-2 px-3 py-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{f.title}</div>
                      <div className="mt-0.5 font-mono text-2xs text-muted break-all">
                        {kind} · {f.path}
                      </div>
                      <p className="mt-1 text-xs text-subtle">{f.actionHint}</p>
                      {item.action === "backup-clear" && f.policyValue ? (
                        <pre className="mt-2 overflow-x-auto rounded-xs bg-bg px-2 py-1.5 font-mono text-micro text-muted">
                          {f.policyValue}
                        </pre>
                      ) : null}
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      <Badge>{action}</Badge>
                      <span
                        className={cn(
                          "text-2xs tabular-nums",
                          item.status === "done" && "text-ok",
                          item.status === "failed" && "text-crit",
                          item.status === "running" && "text-primary",
                          item.status === "queued" && "text-subtle",
                        )}
                      >
                        {STATUS_TEXT[item.status]}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            {finished ? "关闭" : "取消"}
          </Button>
          {!finished ? (
            <Button onClick={approve} disabled={busy || running || !items.length}>
              {running ? copy.executing : `${copy.approve} ${items.length} 项`}
            </Button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
