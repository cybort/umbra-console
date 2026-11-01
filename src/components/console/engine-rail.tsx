import { ENGINES, SCENARIOS, SOURCES } from "@/lib/ir/catalog";
import { COPY } from "@/lib/ir/labels";
import { useIRStore } from "@/lib/ir/store";
import { Switch } from "@/components/ui/switch";
import { DiskPanel } from "./disk-panel";
import { cn } from "@/lib/utils";

export function EngineRail() {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const hostMode = useIRStore((s) => s.hostMode);
  const setHostMode = useIRStore((s) => s.setHostMode);
  const scenarioId = useIRStore((s) => s.scenarioId);
  const setScenario = useIRStore((s) => s.setScenario);
  const enabledEngines = useIRStore((s) => s.enabledEngines);
  const enabledSources = useIRStore((s) => s.enabledSources);
  const toggleEngine = useIRStore((s) => s.toggleEngine);
  const toggleSource = useIRStore((s) => s.toggleSource);
  const customRule = useIRStore((s) => s.customRule);
  const setCustomRule = useIRStore((s) => s.setCustomRule);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const locked = scanStatus === "scanning" || scanStatus === "executing";

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">范围</h2>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {(
            [
              ["lab", copy.lab],
              ["physical", copy.physical],
            ] as const
          ).map(([id, label]) => {
            const on = hostMode === id;
            return (
              <button
                key={id}
                type="button"
                disabled={locked}
                onClick={() => setHostMode(id)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-left min-h-11 text-sm font-medium transition-colors duration-150",
                  on ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]" : "text-muted hover:text-fg hover:bg-surface",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">
          {hostMode === "physical" ? "感染画像" : "快照"}
        </h2>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {SCENARIOS.map((s) => {
            const on = s.id === scenarioId;
            return (
              <button
                key={s.id}
                type="button"
                disabled={locked}
                onClick={() => setScenario(s.id)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-left min-h-11 transition-colors duration-150",
                  on ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]" : "text-muted hover:text-fg hover:bg-surface",
                )}
              >
                <div className="text-sm font-medium">{s.name}</div>
                <div className="mt-0.5 font-mono text-2xs text-subtle">{s.host}</div>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs leading-snug text-subtle">
          {SCENARIOS.find((s) => s.id === scenarioId)?.blurb}
        </p>
      </section>

      <DiskPanel />

      <section>
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.engines}</h2>
        <ul className="mt-2 flex flex-col gap-1">
          {ENGINES.map((e) => {
            const on = enabledEngines.includes(e.id);
            return (
              <li
                key={e.id}
                className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 hover:bg-surface"
              >
                <div className="min-w-0">
                  <div className="text-sm text-fg">{cover ? e.coverName : e.name}</div>
                  <div className="text-2xs text-subtle truncate">
                    {cover ? e.coverSummary : e.summary}
                  </div>
                </div>
                <Switch
                  checked={on}
                  disabled={locked}
                  onCheckedChange={() => toggleEngine(e.id)}
                  aria-label={cover ? e.coverName : e.name}
                />
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.sources}</h2>
        <ul className="mt-2 flex flex-col gap-1">
          {SOURCES.map((s) => {
            const on = enabledSources.includes(s.id);
            return (
              <li
                key={s.id}
                className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 hover:bg-surface"
              >
                <div className="min-w-0">
                  <div className="text-sm text-fg">{cover ? s.coverName : s.name}</div>
                  <div className="text-2xs text-subtle">
                    {s.count.toLocaleString("zh-CN")} · {s.summary}
                  </div>
                </div>
                <Switch
                  checked={on}
                  disabled={locked}
                  onCheckedChange={() => toggleSource(s.id)}
                  aria-label={cover ? s.coverName : s.name}
                />
              </li>
            );
          })}
        </ul>
        {enabledSources.includes("custom") ? (
          <label className="mt-2 block px-2">
            <span className="text-2xs text-muted">路径包含</span>
            <input
              value={customRule}
              disabled={locked}
              onChange={(e) => setCustomRule(e.target.value)}
              placeholder="例如 Temp\\msdsk"
              className="mt-1 h-11 w-full rounded-sm bg-surface-2 px-3 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)] focus:outline-none focus:ring-2 focus:ring-ring/60"
            />
          </label>
        ) : null}
      </section>
    </div>
  );
}
