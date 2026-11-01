import { COPY } from "@/lib/ir/labels";
import { procsFor } from "@/lib/ir/processes";
import { lookupFinding, useIRStore } from "@/lib/ir/store";
import { VOLUMES } from "@/lib/ir/physical";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProcessTable() {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const hostMode = useIRStore((s) => s.hostMode);
  const scenarioId = useIRStore((s) => s.scenarioId);
  const procs = useIRStore((s) => s.procs);
  const volumes = useIRStore((s) => s.volumes);
  const planned = useIRStore((s) => s.planned);
  const planKill = useIRStore((s) => s.planKill);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const revealedIds = useIRStore((s) => s.revealedIds);

  const rows = procsFor(scenarioId, hostMode);
  const locked = scanStatus === "scanning" || scanStatus === "executing";
  const isolated = new Set(volumes.filter((v) => v.status === "isolated").map((v) => v.id));
  const dead = new Set(procs.filter((p) => p.status === "terminated").map((p) => p.pid));
  const queuedPids = new Set(
    planned
      .filter((p) => p.status === "queued" || p.status === "running")
      .map((p) => lookupFinding(p.findingId)?.pid)
      .filter((n): n is number => n != null),
  );

  return (
    <div className="rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.procs}</h2>
        <span className="font-mono text-2xs text-subtle tabular-nums">
          {rows.filter((r) => !dead.has(r.pid)).length}/{rows.length}
        </span>
      </div>
      <p className="mt-1 text-2xs text-subtle">
        {cover
          ? "本机会话。结束任务只改采样表。"
          : hostMode === "physical"
            ? "物理主机会话进程表。结束写入处置队列，批准后从本表移除。不能向内核结束浏览器外的系统进程。"
            : "快照内的驻留进程。结束只作用于本控制台会话表。"}
      </p>
      <ul className="mt-3 flex flex-col gap-1">
        {rows.map((p) => {
          const terminated = dead.has(p.pid);
          const volOff = isolated.has(p.volumeId);
          const letter = VOLUMES.find((v) => v.id === p.volumeId)?.letter ?? "";
          const hot = Boolean(p.findingId) && !p.benign;
          const hit = p.findingId ? revealedIds.includes(p.findingId) : false;
          const queued = queuedPids.has(p.pid);
          return (
            <li
              key={p.id}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5",
                terminated && "opacity-40",
                hot && !terminated ? "bg-surface-2" : "",
              )}
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-sm font-medium">{p.name}</span>
                  <span className="font-mono text-2xs text-subtle tabular-nums">PID {p.pid}</span>
                  {hot ? <Badge tone="crit">{cover ? "异常" : "可疑"}</Badge> : null}
                  {hit ? <Badge tone="high">检出</Badge> : null}
                  {terminated ? <Badge>已结束</Badge> : null}
                  {volOff ? <Badge tone="ok">{letter} 已隔离</Badge> : null}
                </div>
                <div className="mt-0.5 truncate font-mono text-2xs text-subtle">
                  {p.cpu.toFixed(1)}% · {p.mem}
                  {letter ? ` · ${letter}` : ""} · {p.path}
                </div>
              </div>
              <Button
                size="sm"
                variant={hot ? "danger" : "outline"}
                disabled={locked || terminated || p.protectedProc || queued}
                onClick={() => planKill(p)}
              >
                {queued ? "已入队" : copy.kill}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
