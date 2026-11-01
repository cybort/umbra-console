import { COPY } from "@/lib/ir/labels";
import { HOOK_KIND_LABEL, hookCaption, hooksFor } from "@/lib/ir/hooks";
import { useIRStore } from "@/lib/ir/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HookPanel() {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const scenarioId = useIRStore((s) => s.scenarioId);
  const revealedIds = useIRStore((s) => s.revealedIds);
  const selectedIds = useIRStore((s) => s.selectedIds);
  const expandedId = useIRStore((s) => s.expandedId);
  const hooks = useIRStore((s) => s.hooks);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const planned = useIRStore((s) => s.planned);
  const planUnhook = useIRStore((s) => s.planUnhook);
  const setExpanded = useIRStore((s) => s.setExpanded);
  const setSelectedNode = useIRStore((s) => s.setSelectedNode);
  const phase = useIRStore((s) => s.phase);

  const rows = hooksFor(scenarioId);
  const shown = rows.filter((h) => revealedIds.includes(h.id));
  const locked = scanStatus === "scanning" || scanStatus === "executing";
  const restored = new Set(hooks.filter((h) => h.status === "restored").map((h) => h.id));
  const queued = new Set(
    planned
      .filter((p) => p.action === "unhook" && (p.status === "queued" || p.status === "running"))
      .map((p) => p.findingId),
  );

  return (
    <div className="rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.hooks}</h2>
        <span className="font-mono text-2xs text-subtle tabular-nums">
          {shown.length}/{rows.length}
        </span>
      </div>
      <p className="mt-1 text-2xs text-subtle">
        {cover
          ? "对照导出入口与导入表。点击查看详情。"
          : "对照 KnownDlls 与磁盘映像：IAT 走表、EAT RVA、入口 16 字节、WH_* 链。内核 SSDT 不在用户态范围。"}
      </p>

      {shown.length === 0 ? (
        <ul className="mt-3 flex flex-col gap-1.5 font-mono text-2xs text-subtle">
          <li>ntdll / kernel32 / user32 / ws2_32</li>
          <li>IAT · EAT · inline E9/FF25 · SetWindowsHookEx</li>
          <li>
            {scanStatus === "scanning" && phase === "hooks"
              ? cover
                ? "正在核对入口…"
                : "正在对照入口字节…"
              : cover
                ? "采样后写入异常入口。"
                : "扫描注入图之后核对这些入口。"}
          </li>
        </ul>
      ) : (
        <ul className="mt-3 flex flex-col gap-2">
          {shown.map((h) => {
            const done = restored.has(h.id);
            const inQueue = queued.has(h.id);
            const on = expandedId === h.id || selectedIds.includes(h.id);
            const current = done ? h.original : h.patched;
            const disasm = done ? h.disasmOrig : h.disasmHook;
            return (
              <li key={h.id}>
                <button
                  type="button"
                  className={cn(
                    "w-full rounded-md px-3 py-2.5 text-left shadow-[var(--shadow-border)] min-h-11",
                    on ? "bg-surface-2" : "bg-bg",
                    done && "opacity-70",
                  )}
                  onClick={() => {
                    setExpanded(expandedId === h.id ? null : h.id);
                    if (h.destNodeId) setSelectedNode(h.destNodeId);
                  }}
                >
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge tone={done ? "ok" : h.kind === "inline" ? "crit" : "high"}>
                      {cover ? "入口" : HOOK_KIND_LABEL[h.kind]}
                    </Badge>
                    <span className="text-sm font-medium">{cover ? h.fn : hookCaption(h)}</span>
                    {done ? <Badge tone="ok">已还原</Badge> : null}
                    {inQueue && !done ? <Badge>已入队</Badge> : null}
                  </div>
                  <div className="mt-1 font-mono text-2xs text-muted">
                    {h.process}({h.pid}) · {h.method}
                  </div>
                  <div className="mt-2 grid gap-1 font-mono text-micro leading-relaxed">
                    <div className="text-subtle">
                      原  {h.original}
                      <span className="ml-2 text-subtle">{h.disasmOrig}</span>
                    </div>
                    <div className={done ? "text-ok" : "text-crit"}>
                      现  {current}
                      <span className="ml-2">{disasm}</span>
                    </div>
                    <div className="text-muted">
                      → {h.dest} · {h.destHint}
                    </div>
                  </div>
                </button>
                {!done ? (
                  <div className="mt-1 flex justify-end">
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={locked || inQueue}
                      onClick={() => planUnhook(h.id)}
                    >
                      {inQueue ? "已入队" : copy.unhook}
                    </Button>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
