import { ACTION_LABEL, COPY, KIND_LABEL, SEVERITY_LABEL } from "@/lib/ir/labels";
import { catalogFindings, useIRStore } from "@/lib/ir/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { FindingKind, Severity } from "@/lib/ir/types";
import { ChevronDown, FileCode2, HardDrive, Scale, Cpu, Unplug } from "lucide-react";

const TONE: Record<Severity, "crit" | "high" | "med" | "low"> = {
  critical: "crit",
  high: "high",
  medium: "med",
  low: "low",
};

function KindIcon({ kind }: { kind: FindingKind }) {
  const cls = "size-3.5 text-muted";
  if (kind === "process") return <Cpu className={cls} />;
  if (kind === "file") return <FileCode2 className={cls} />;
  if (kind === "volume") return <HardDrive className={cls} />;
  if (kind === "hook") return <Unplug className={cls} />;
  return <Scale className={cls} />;
}

export function FindingsList({ onPreview }: { onPreview?: () => void }) {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const revealedIds = useIRStore((s) => s.revealedIds);
  const selectedIds = useIRStore((s) => s.selectedIds);
  const expandedId = useIRStore((s) => s.expandedId);
  const toggleSelected = useIRStore((s) => s.toggleSelected);
  const setExpanded = useIRStore((s) => s.setExpanded);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const selectAllVisible = useIRStore((s) => s.selectAllVisible);
  const clearSelected = useIRStore((s) => s.clearSelected);
  const queueFromSelection = useIRStore((s) => s.queueFromSelection);
  const extraFindings = useIRStore((s) => s.extraFindings);
  const hostMode = useIRStore((s) => s.hostMode);
  const scenarioId = useIRStore((s) => s.scenarioId);

  const catalog = catalogFindings({ scenarioId, hostMode, extraFindings });
  const rows = revealedIds
    .map((id) => catalog.find((f) => f.id === id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  if (!rows.length) {
    return (
      <div className="flex flex-1 flex-col items-start justify-center rounded-lg bg-surface px-5 py-10 shadow-[var(--shadow-border)]">
        <p className="text-sm text-fg">{copy.empty}</p>
        <p className="mt-2 max-w-md text-sm leading-normal text-muted">
          {cover
            ? "采样模块与对照目录决定能看到哪些异常项。开始采样后结果会逐条写入。"
            : hostMode === "physical"
              ? "物理主机扫描驻留进程、注入图、API 钩子、磁盘卷。进程表可直接结束会话 PID，磁盘可隔离执行（不格式化）。授权目录内的命中文件可真正隔离。"
              : "关闭部分引擎或特征库会改变检出面。扫描时会写入进程、注入边、钩子、磁盘与策略。"}
        </p>
        <p className="mt-4 text-2xs text-subtle">
          {cover ? "结果需确认后才会改会话。" : "检出后可预览处置，批准才会结束进程、还原 API 入口、阻断执行、隔离卷或备份清除策略。"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-muted tabular-nums">
          {copy.findings} {rows.length}
          {scanStatus === "scanning" ? " · 写入中" : ""}
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <button
            type="button"
            className="h-11 px-3 text-xs text-muted hover:text-fg"
            onClick={selectAllVisible}
          >
            全选
          </button>
          <button
            type="button"
            className="h-11 px-3 text-xs text-muted hover:text-fg"
            onClick={clearSelected}
          >
            清空
          </button>
          {onPreview ? (
            <Button
              size="sm"
              disabled={selectedIds.length === 0 || scanStatus === "scanning" || scanStatus === "executing"}
              onClick={() => {
                queueFromSelection();
                onPreview();
              }}
            >
              {copy.preview}
            </Button>
          ) : null}
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {rows.map((f, i) => {
          const open = expandedId === f.id;
          const checked = selectedIds.includes(f.id);
          const kind = KIND_LABEL[f.kind][cover ? "cover" : "ops"];
          const action = ACTION_LABEL[f.action][cover ? "cover" : "ops"];
          return (
            <li
              key={f.id}
              className="umbra-in rounded-lg bg-surface p-2 shadow-[var(--shadow-border)]"
              style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
            >
              <div className="flex items-start gap-2">
                <label className="relative mt-1 flex size-11 shrink-0 items-center justify-center">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleSelected(f.id)}
                    className="size-4 accent-primary"
                    aria-label={`选择 ${f.subject}`}
                  />
                </label>
                <button
                  type="button"
                  className="min-w-0 flex-1 py-1.5 text-left"
                  onClick={() => setExpanded(open ? null : f.id)}
                >
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge tone={TONE[f.severity]}>{SEVERITY_LABEL[f.severity]}</Badge>
                    <span className="inline-flex items-center gap-1 text-2xs text-muted">
                      <KindIcon kind={f.kind} />
                      {kind}
                    </span>
                    {f.local ? <Badge>本机</Badge> : null}
                    {!cover && f.tactics.length > 0 ? (
                      <span className="font-mono text-micro text-subtle">
                        {f.tactics.join(" ")}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 text-sm font-medium text-fg">{f.title}</div>
                  <div className="mt-0.5 font-mono text-2xs text-muted break-all">
                    {f.pid ? `PID ${f.pid} · ` : ""}
                    {f.path}
                  </div>
                </button>
                <button
                  type="button"
                  className="mt-1 size-11 inline-flex items-center justify-center text-muted"
                  aria-expanded={open}
                  onClick={() => setExpanded(open ? null : f.id)}
                >
                  <ChevronDown className={cn("size-4 transition-transform duration-150", open && "rotate-180")} />
                </button>
              </div>
              {open ? (
                <div className="mt-1 mb-1 ml-12 mr-2 rounded-md bg-surface-2 px-3 py-3">
                  <p className="text-sm leading-normal text-fg">{f.reason}</p>
                  <ul className="mt-2 flex flex-col gap-1">
                    {f.evidence.map((e) => (
                      <li key={e} className="flex gap-2 text-xs text-muted">
                        <span className="mt-1 size-1 shrink-0 rounded-full bg-primary/70" />
                        <span className="font-mono leading-snug">{e}</span>
                      </li>
                    ))}
                  </ul>
                  {f.sha256 ? (
                    <p className="mt-2 font-mono text-2xs text-subtle break-all">
                      SHA256 {f.sha256}
                    </p>
                  ) : null}
                  <p className="mt-2 text-xs text-muted">
                    建议：{action} · {f.actionHint}
                  </p>
                  {!cover ? (
                    <p className="mt-1 text-2xs text-subtle">
                      引擎 {f.engines.join(" / ")} · 来源 {f.sources.join(" / ")}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
