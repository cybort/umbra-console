import { ACTION_LABEL, COPY } from "@/lib/ir/labels";
import { lookupFinding, useIRStore } from "@/lib/ir/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function QueuePanel({ onPreview }: { onPreview: () => void }) {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const planned = useIRStore((s) => s.planned);
  const backups = useIRStore((s) => s.backups);
  const quarantine = useIRStore((s) => s.quarantine);
  const restoreBackup = useIRStore((s) => s.restoreBackup);
  const selectedIds = useIRStore((s) => s.selectedIds);
  const queueFromSelection = useIRStore((s) => s.queueFromSelection);
  const scanStatus = useIRStore((s) => s.scanStatus);
  useIRStore((s) => s.extraFindings);
  useIRStore((s) => s.hostMode);

  const busy = scanStatus === "scanning" || scanStatus === "executing";

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.queue}</h2>
        <p className="mt-1 text-xs text-subtle">
          {copy.selected} {selectedIds.length} · {cover ? "确认后才会改会话" : "批准前不会改快照或本机文件"}
        </p>
        <div className="mt-3 flex gap-2">
          <Button
            className="flex-1"
            disabled={selectedIds.length === 0 || busy}
            onClick={() => {
              queueFromSelection();
              onPreview();
            }}
          >
            {copy.preview}
          </Button>
        </div>
      </div>

      {planned.length ? (
        <ul className="flex flex-col gap-2">
          {planned.map((p) => {
            const f = lookupFinding(p.findingId);
            if (!f) return null;
            return (
              <li key={p.findingId} className="rounded-md bg-surface px-3 py-2.5 shadow-[var(--shadow-border)]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm truncate">{f.subject}</span>
                  <Badge>{ACTION_LABEL[p.action][cover ? "cover" : "ops"]}</Badge>
                </div>
                <div className="mt-0.5 font-mono text-2xs text-subtle truncate">{f.path}</div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-sm text-muted">从检出、注入图、钩子或进程表加入后预览。</p>
      )}

      <section>
        <h3 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.quarantine}</h3>
        {quarantine.length === 0 ? (
          <p className="mt-2 text-xs text-subtle">尚无已执行项。</p>
        ) : (
          <ul className="mt-2 flex flex-col gap-2">
            {quarantine.map((q) => (
              <li key={q.id} className="rounded-md bg-surface-2 px-3 py-2">
                <div className="text-sm">{q.title}</div>
                <div className="font-mono text-2xs text-subtle truncate">
                  {q.local ? "本机隔离 · " : ""}
                  {q.path}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.backups}</h3>
        {backups.length === 0 ? (
          <p className="mt-2 text-xs text-subtle">策略清除前会在此留下还原点。</p>
        ) : (
          <ul className="mt-2 flex flex-col gap-2">
            {backups.map((b) => (
              <li key={b.id} className="rounded-md bg-surface-2 px-3 py-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-sm">{b.title}</div>
                    <div className="font-mono text-2xs text-subtle truncate">{b.key}</div>
                    {b.value ? (
                      <pre className="mt-1 max-h-16 overflow-auto font-mono text-micro text-muted">
                        {b.value}
                      </pre>
                    ) : null}
                  </div>
                  {b.restored ? (
                    <span className="text-2xs text-ok shrink-0">已回滚</span>
                  ) : (
                    <Button size="sm" variant="ghost" onClick={() => restoreBackup(b.id)}>
                      {copy.restore}
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
