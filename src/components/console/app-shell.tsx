import { useEffect, useState } from "react";
import { COPY } from "@/lib/ir/labels";
import { SCENARIOS } from "@/lib/ir/catalog";
import { useIRStore } from "@/lib/ir/store";
import { useScanRunner, useWatchdog } from "@/lib/ir/use-scan";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { EclipseMark, GraphMark } from "./mark";
import { EngineRail } from "./engine-rail";
import { FindingsList } from "./findings-list";
import { ProtectPanel } from "./protect-panel";
import { QueuePanel } from "./queue-panel";
import { ScanLog } from "./scan-log";
import { CoverChart } from "./cover-chart";
import { ApproveDialog } from "./approve-dialog";
import { InjectionGraph } from "./injection-graph";
import { HookPanel } from "./hook-panel";
import { ProcessTable } from "./process-table";
import { cn } from "@/lib/utils";
import { GitBranch, ListTree, Radar, Shield, SlidersHorizontal } from "lucide-react";

const TABS = [
  { id: "findings" as const, ops: "检出", cover: "异常", icon: ListTree },
  { id: "graph" as const, ops: "注入", cover: "会话图", icon: GitBranch },
  { id: "engines" as const, ops: "引擎", cover: "模块", icon: SlidersHorizontal },
  { id: "queue" as const, ops: "处置", cover: "待办", icon: Radar },
  { id: "protect" as const, ops: "防护", cover: "稳定", icon: Shield },
];

export function ConsoleApp() {
  const cover = useIRStore((s) => s.cover);
  const setCover = useIRStore((s) => s.setCover);
  const copy = cover ? COPY.cover : COPY.ops;
  const tab = useIRStore((s) => s.tab);
  const setTab = useIRStore((s) => s.setTab);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const beginScan = useIRStore((s) => s.beginScan);
  const stopScan = useIRStore((s) => s.stopScan);
  const resetLab = useIRStore((s) => s.resetLab);
  const planned = useIRStore((s) => s.planned);
  const quarantine = useIRStore((s) => s.quarantine);
  const backups = useIRStore((s) => s.backups);
  const scenarioId = useIRStore((s) => s.scenarioId);
  const hostMode = useIRStore((s) => s.hostMode);
  const scenario = SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0];
  const [previewOpen, setPreviewOpen] = useState(false);
  const [versionClicks, setVersionClicks] = useState(0);

  useScanRunner();
  useWatchdog();

  useEffect(() => {
    document.documentElement.dataset.cover = cover ? "true" : "false";
    document.title = cover ? "资源监视" : "灰域 UMBRA";
  }, [cover]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        useIRStore.getState().toggleCover();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (versionClicks >= 5) {
      setCover(false);
      setVersionClicks(0);
    }
  }, [versionClicks, setCover]);

  const scanning = scanStatus === "scanning";
  const canScan = scanStatus !== "executing";

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-30 border-b border-line bg-bg/95">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <div className="flex min-w-0 flex-1 items-center gap-2.5">
            {cover ? <GraphMark className="size-7 shrink-0" /> : <EclipseMark className="size-7 shrink-0" />}
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <h1 className="truncate text-base font-medium tracking-tight">{copy.productFull}</h1>
                <span className="hidden text-2xs text-subtle sm:inline">{copy.tagline}</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-2xs text-subtle">
                <span className="tabular-nums">{scenario.host}</span>
                <span className="text-line">/</span>
                <span className="truncate">{scenario.os}</span>
                <span
                  className={cn(
                    "rounded-xs px-1 py-px text-micro tracking-wide",
                    hostMode === "physical"
                      ? "bg-high/15 text-high"
                      : cover
                        ? "bg-surface-2 text-muted"
                        : "bg-primary/15 text-primary",
                  )}
                >
                  {hostMode === "physical" ? copy.physical : copy.lab}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label className="hidden sm:flex items-center gap-2 text-xs text-muted">
              <span>{copy.camouflage}</span>
              <Switch checked={cover} onCheckedChange={setCover} aria-label={copy.camouflage} />
            </label>
            {scanning ? (
              <Button variant="outline" size="sm" onClick={stopScan}>
                {copy.stop}
              </Button>
            ) : (
              <Button
                size="sm"
                disabled={!canScan}
                onClick={() => {
                  beginScan();
                  setTab("graph");
                }}
              >
                {scanStatus === "idle" ? copy.scan : copy.rescan}
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-5 pb-28 lg:grid-cols-[280px_minmax(0,1fr)] lg:pb-8">
        <aside className="hidden lg:block">
          <div className="flex flex-col gap-8">
            <EngineRail />
            <ProtectPanel />
          </div>
        </aside>

        <section className="min-w-0 flex flex-col gap-4">
          {cover ? <CoverChart /> : null}
          <ScanLog />

          <div className="hidden lg:block">
            <InjectionGraph />
          </div>

          <div className="hidden lg:block">
            <HookPanel />
          </div>

          <div className="hidden lg:block">
            <ProcessTable />
          </div>

          <div className="lg:hidden">
            {tab === "graph" ? (
              <div className="flex flex-col gap-4">
                <InjectionGraph />
                <HookPanel />
                <ProcessTable />
              </div>
            ) : null}
            {tab === "engines" ? <EngineRail /> : null}
            {tab === "protect" ? <ProtectPanel /> : null}
            {tab === "queue" ? <QueuePanel onPreview={() => setPreviewOpen(true)} /> : null}
          </div>

          <div className={cn(tab !== "findings" ? "hidden lg:block" : "block")}>
            <FindingsList onPreview={() => setPreviewOpen(true)} />
          </div>

          <div className="hidden lg:block">
            {planned.length > 0 || quarantine.length > 0 || backups.length > 0 ? (
              <QueuePanel onPreview={() => setPreviewOpen(true)} />
            ) : null}
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/95 lg:hidden">
        <div className="flex items-center gap-1 px-1 py-1">
          {TABS.map((t) => {
            const Icon = t.icon;
            const on = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 rounded-sm text-micro",
                  on ? "text-fg" : "text-subtle",
                )}
              >
                <Icon className="size-4" />
                {cover ? t.cover : t.ops}
              </button>
            );
          })}
        </div>
      </div>

      <footer className="mx-auto max-w-7xl px-4 pb-28 lg:pb-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4">
          <p className="max-w-xl text-2xs leading-normal text-subtle">{copy.disclaimer}</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="h-11 px-2 text-2xs text-muted hover:text-fg"
              onClick={resetLab}
            >
              {copy.reset}
            </button>
            <button
              type="button"
              className="font-mono text-2xs text-subtle"
              onClick={() => setVersionClicks((n) => n + 1)}
              title={cover ? "连续点击五次返回控制台" : "Ctrl+Shift+U 切换伪装"}
            >
              {cover ? "SysGraph 14.2" : "UMBRA 1.0 · Ctrl+Shift+U"}
            </button>
          </div>
        </div>
      </footer>

      <ApproveDialog open={previewOpen} onOpenChange={setPreviewOpen} />
    </div>
  );
}
