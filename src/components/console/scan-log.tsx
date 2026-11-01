import { useEffect, useRef, useState } from "react";
import { COPY, PHASE_LABEL } from "@/lib/ir/labels";
import { useIRStore } from "@/lib/ir/store";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function ScanLog() {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const logs = useIRStore((s) => s.logs);
  const phase = useIRStore((s) => s.phase);
  const progress = useIRStore((s) => s.progress);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const revealedIds = useIRStore((s) => s.revealedIds);
  const bottom = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (scanStatus === "scanning") setOpen(true);
    if (scanStatus === "complete" || scanStatus === "executed") setOpen(false);
  }, [scanStatus]);

  useEffect(() => {
    if (open) bottom.current?.scrollIntoView({ block: "end" });
  }, [logs.length, open]);

  if (scanStatus === "idle" && logs.length === 0) return null;

  return (
    <div className="rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 min-h-11 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="min-w-0">
          <div className="text-xs text-muted">
            {PHASE_LABEL[phase][cover ? "cover" : "ops"]}
            {scanStatus !== "scanning" ? ` · ${copy.findings} ${revealedIds.length}` : ""}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-2xs text-subtle tabular-nums">{Math.round(progress)}%</span>
          <ChevronDown className={cn("size-4 text-muted transition-transform duration-150", open && "rotate-180")} />
        </div>
      </button>
      <Progress value={progress} className="mt-1" />
      {open ? (
        <div className="mt-3 max-h-28 overflow-y-auto font-mono text-2xs leading-relaxed">
          {logs.map((line) => (
            <div
              key={line.id}
              className={cn(
                "truncate",
                line.tone === "hit" && "text-crit",
                line.tone === "ok" && "text-ok",
                line.tone === "warn" && "text-high",
                line.tone === "info" && "text-muted",
              )}
            >
              {line.text}
            </div>
          ))}
          <div ref={bottom} />
        </div>
      ) : null}
      {scanStatus === "scanning" ? (
        <p className="mt-2 text-2xs text-subtle">{copy.scanning}…</p>
      ) : null}
    </div>
  );
}
