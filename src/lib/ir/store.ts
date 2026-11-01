import { create } from "zustand";
import { DEFAULT_SOURCES, ENGINES, FINDINGS } from "./catalog";
import { volumeActionFinding, volumeFindings } from "./physical";
import { procActionFinding, seedProcState } from "./processes";
import type {
  ActionStatus,
  ActionType,
  AttackBeat,
  EngineId,
  Finding,
  HostMode,
  HostProc,
  LocalMount,
  PlannedAction,
  PolicyBackup,
  ProcState,
  QuarantineItem,
  ScanLogLine,
  ScanPhase,
  ScanStatus,
  ScenarioId,
  SourceId,
  VolumeState,
  HookState,
} from "./types";

export function findingVisible(
  finding: Finding,
  engines: EngineId[],
  sources: SourceId[],
  customRule: string,
): boolean {
  const engineHit = finding.engines.some((e) => engines.includes(e));
  const sourceHit = finding.sources.some((s) => sources.includes(s));
  const customHit =
    sources.includes("custom") &&
    customRule.trim().length > 0 &&
    finding.path.toLowerCase().includes(customRule.trim().toLowerCase());
  return engineHit && (sourceHit || customHit);
}

function newId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

export interface IRState {
  cover: boolean;
  hostMode: HostMode;
  scenarioId: ScenarioId;
  enabledEngines: EngineId[];
  enabledSources: SourceId[];
  customRule: string;
  scanStatus: ScanStatus;
  phase: ScanPhase;
  progress: number;
  revealedIds: string[];
  revealedEdgeIds: string[];
  selectedIds: string[];
  expandedId: string | null;
  selectedNodeId: string | null;
  selectedEdgeId: string | null;
  extraFindings: Finding[];
  logs: ScanLogLine[];
  planned: PlannedAction[];
  backups: PolicyBackup[];
  quarantine: QuarantineItem[];
  volumes: VolumeState[];
  procs: ProcState[];
  hooks: HookState[];
  localMount: LocalMount | null;
  attackLog: AttackBeat[];
  attacking: boolean;
  watchdogPulse: number;
  tab: "findings" | "graph" | "engines" | "queue" | "protect";
  setCover: (cover: boolean) => void;
  toggleCover: () => void;
  setHostMode: (mode: HostMode) => void;
  setScenario: (id: ScenarioId) => void;
  toggleEngine: (id: EngineId) => void;
  toggleSource: (id: SourceId) => void;
  setCustomRule: (rule: string) => void;
  setTab: (tab: IRState["tab"]) => void;
  setProgress: (n: number) => void;
  setPhase: (p: ScanPhase) => void;
  setScanStatus: (s: ScanStatus) => void;
  appendLog: (line: Omit<ScanLogLine, "id" | "at"> & { id?: string }) => void;
  revealFinding: (id: string) => void;
  revealEdge: (id: string) => void;
  toggleSelected: (id: string) => void;
  selectAllVisible: () => void;
  clearSelected: () => void;
  setExpanded: (id: string | null) => void;
  setSelectedNode: (id: string | null) => void;
  setSelectedEdge: (id: string | null) => void;
  setExtraFindings: (rows: Finding[]) => void;
  setLocalMount: (m: LocalMount | null) => void;
  beginScan: () => void;
  stopScan: () => void;
  resetLab: () => void;
  queueFromSelection: () => void;
  planFinding: (finding: Finding) => void;
  planKill: (proc: HostProc) => void;
  planIsolate: (volumeId: string) => void;
  unisolateVolume: (volumeId: string) => void;
  planUnhook: (hookId: string) => void;
  setActionStatus: (findingId: string, status: ActionStatus) => void;
  applyExecuted: (findingId: string, action: ActionType) => void;
  restoreBackup: (backupId: string) => void;
  beginAttack: () => void;
  pushAttack: (beat: Omit<AttackBeat, "id">) => void;
  endAttack: () => void;
  tickWatchdog: () => void;
}

const defaultEngines = ENGINES.map((e) => e.id);

export function catalogFindings(state: Pick<IRState, "scenarioId" | "hostMode" | "extraFindings">) {
  const vol = state.hostMode === "physical" ? volumeFindings(state.scenarioId) : [];
  return [...FINDINGS, ...vol, ...state.extraFindings];
}

function upsertFinding(
  state: Pick<IRState, "scenarioId" | "hostMode" | "extraFindings">,
  finding: Finding,
) {
  if (catalogFindings(state).some((f) => f.id === finding.id)) return state.extraFindings;
  return [...state.extraFindings, finding];
}

export const useIRStore = create<IRState>((set, get) => ({
  cover: false,
  hostMode: "lab",
  scenarioId: "rat",
  enabledEngines: defaultEngines,
  enabledSources: DEFAULT_SOURCES,
  customRule: "",
  scanStatus: "idle",
  phase: "idle",
  progress: 0,
  revealedIds: [],
  revealedEdgeIds: [],
  selectedIds: [],
  expandedId: null,
  selectedNodeId: null,
  selectedEdgeId: null,
  extraFindings: [],
  logs: [],
  planned: [],
  backups: [],
  quarantine: [],
  volumes: [],
  procs: seedProcState("rat", "lab"),
  hooks: [],
  localMount: null,
  attackLog: [],
  attacking: false,
  watchdogPulse: 0,
  tab: "findings",
  setCover: (cover) => set({ cover }),
  toggleCover: () => set({ cover: !get().cover }),
  setHostMode: (mode) => {
    get().resetLab();
    set({ hostMode: mode, procs: seedProcState(get().scenarioId, mode) });
  },
  setScenario: (id) => {
    get().resetLab();
    set({ scenarioId: id, procs: seedProcState(id, get().hostMode) });
  },
  toggleEngine: (id) => {
    if (get().scanStatus === "scanning" || get().scanStatus === "executing") return;
    const cur = get().enabledEngines;
    set({
      enabledEngines: cur.includes(id) ? cur.filter((e) => e !== id) : [...cur, id],
    });
  },
  toggleSource: (id) => {
    if (get().scanStatus === "scanning" || get().scanStatus === "executing") return;
    const cur = get().enabledSources;
    set({
      enabledSources: cur.includes(id) ? cur.filter((s) => s !== id) : [...cur, id],
    });
  },
  setCustomRule: (rule) => set({ customRule: rule }),
  setTab: (tab) => set({ tab }),
  setProgress: (n) => set({ progress: n }),
  setPhase: (p) => set({ phase: p }),
  setScanStatus: (s) => set({ scanStatus: s }),
  appendLog: (line) =>
    set({
      logs: [
        ...get().logs,
        { id: line.id ?? newId("log"), at: Date.now(), text: line.text, tone: line.tone },
      ].slice(-80),
    }),
  revealFinding: (id) => {
    const revealed = get().revealedIds;
    if (revealed.includes(id)) return;
    const finding = catalogFindings(get()).find((f) => f.id === id);
    const autoSelect =
      finding && (finding.severity === "critical" || finding.severity === "high");
    set({
      revealedIds: [...revealed, id],
      selectedIds: autoSelect ? [...new Set([...get().selectedIds, id])] : get().selectedIds,
    });
  },
  revealEdge: (id) => {
    const revealed = get().revealedEdgeIds;
    if (revealed.includes(id)) {
      set({ selectedEdgeId: id });
      return;
    }
    set({ revealedEdgeIds: [...revealed, id], selectedEdgeId: id });
  },
  toggleSelected: (id) => {
    const cur = get().selectedIds;
    set({
      selectedIds: cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id],
    });
  },
  selectAllVisible: () => set({ selectedIds: [...get().revealedIds] }),
  clearSelected: () => set({ selectedIds: [] }),
  setExpanded: (id) => set({ expandedId: id }),
  setSelectedNode: (id) => set({ selectedNodeId: id }),
  setSelectedEdge: (id) => set({ selectedEdgeId: id }),
  setExtraFindings: (rows) => set({ extraFindings: rows }),
  setLocalMount: (m) => set({ localMount: m }),
  beginScan: () =>
    set({
      scanStatus: "scanning",
      phase: "init",
      progress: 2,
      revealedIds: [],
      revealedEdgeIds: [],
      selectedIds: [],
      expandedId: null,
      selectedNodeId: null,
      selectedEdgeId: null,
      logs: [],
      planned: [],
    }),
  stopScan: () =>
    set({
      scanStatus: get().revealedIds.length ? "complete" : "idle",
      phase: get().revealedIds.length ? "done" : "idle",
    }),
  resetLab: () =>
    set({
      scanStatus: "idle",
      phase: "idle",
      progress: 0,
      revealedIds: [],
      revealedEdgeIds: [],
      selectedIds: [],
      expandedId: null,
      selectedNodeId: null,
      selectedEdgeId: null,
      extraFindings: get().localMount ? get().extraFindings.filter((f) => f.local) : [],
      logs: [],
      planned: [],
      backups: [],
      quarantine: [],
      volumes: [],
      procs: seedProcState(get().scenarioId, get().hostMode),
      hooks: [],
      attackLog: [],
      attacking: false,
    }),
  queueFromSelection: () => {
    const { selectedIds, revealedIds } = get();
    const catalog = catalogFindings(get());
    const ids = selectedIds.filter(
      (id) => revealedIds.includes(id) || catalog.some((f) => f.id === id),
    );
    const planned: PlannedAction[] = ids.map((findingId) => {
      const f = catalog.find((x) => x.id === findingId);
      return {
        findingId,
        action: f?.action ?? "block",
        status: "queued",
      };
    });
    set({ planned, tab: "queue" });
  },
  planFinding: (finding) => {
    const extraFindings = upsertFinding(get(), finding);
    const revealedIds = get().revealedIds.includes(finding.id)
      ? get().revealedIds
      : [...get().revealedIds, finding.id];
    const selectedIds = get().selectedIds.includes(finding.id)
      ? get().selectedIds
      : [...get().selectedIds, finding.id];
    set({ extraFindings, revealedIds, selectedIds });
    get().queueFromSelection();
  },
  planKill: (proc) => {
    const catalog = catalogFindings(get());
    const existing = catalog.find((f) => f.kind === "process" && f.pid === proc.pid);
    const finding = existing ?? procActionFinding(proc, get().scenarioId);
    get().planFinding(finding);
  },
  planIsolate: (volumeId) => {
    const finding = volumeActionFinding(get().scenarioId, volumeId);
    get().planFinding(finding);
  },
  planUnhook: (hookId) => {
    const finding = catalogFindings(get()).find((f) => f.id === hookId);
    if (!finding) return;
    get().planFinding(finding);
  },
  unisolateVolume: (volumeId) => {
    const catalog = catalogFindings(get());
    set({
      volumes: get().volumes.map((v) =>
        v.id === volumeId ? { ...v, status: "online" } : v,
      ),
      quarantine: get().quarantine.filter((q) => {
        const f = catalog.find((x) => x.id === q.findingId);
        return !(q.action === "isolate-volume" && f?.volumeId === volumeId);
      }),
      planned: get().planned.map((p) => {
        const f = catalog.find((x) => x.id === p.findingId);
        return f?.volumeId === volumeId && p.action === "isolate-volume"
          ? { ...p, status: "rolled-back" as const }
          : p;
      }),
    });
  },
  setActionStatus: (findingId, status) =>
    set({
      planned: get().planned.map((p) => (p.findingId === findingId ? { ...p, status } : p)),
    }),
  applyExecuted: (findingId, action) => {
    const finding = catalogFindings(get()).find((f) => f.id === findingId);
    if (!finding) return;
    const next: Partial<IRState> = {};
    if (action === "backup-clear" || action === "unhook") {
      next.backups = [
        {
          id: newId("bak"),
          findingId,
          title: finding.title,
          key: finding.policyKey ?? finding.path,
          value: finding.policyValue ?? "",
          createdAt: Date.now(),
          restored: false,
        },
        ...get().backups,
      ];
    }
    if (action === "unhook") {
      const rest = get().hooks.filter((h) => h.id !== findingId);
      next.hooks = [...rest, { id: findingId, status: "restored" }];
    }
    if (action === "isolate-volume" && finding.volumeId) {
      const rest = get().volumes.filter((v) => v.id !== finding.volumeId);
      next.volumes = [...rest, { id: finding.volumeId, status: "isolated" }];
    }
    if (action === "terminate" && finding.pid != null) {
      const rest = get().procs.filter((p) => p.pid !== finding.pid);
      next.procs = [...rest, { pid: finding.pid, status: "terminated" }];
    }
    next.quarantine = [
      {
        id: newId("q"),
        findingId,
        kind: finding.kind,
        title: finding.title,
        path: finding.path,
        action,
        at: Date.now(),
        local: finding.local,
      },
      ...get().quarantine,
    ];
    set(next);
  },
  restoreBackup: (backupId) => {
    const backups = get().backups.map((b) =>
      b.id === backupId ? { ...b, restored: true } : b,
    );
    const target = get().backups.find((b) => b.id === backupId);
    const finding = target ? catalogFindings(get()).find((f) => f.id === target.findingId) : undefined;
    const hooks =
      finding?.kind === "hook"
        ? [
            ...get().hooks.filter((h) => h.id !== finding.id),
            { id: finding.id, status: "hooked" as const },
          ]
        : get().hooks;
    set({
      backups,
      hooks,
      planned: get().planned.map((p) =>
        target && p.findingId === target.findingId ? { ...p, status: "rolled-back" } : p,
      ),
      quarantine: get().quarantine.filter((q) => q.findingId !== target?.findingId),
    });
  },
  beginAttack: () => set({ attacking: true, attackLog: [] }),
  pushAttack: (beat) =>
    set({
      attackLog: [...get().attackLog, { ...beat, id: newId("atk") }],
    }),
  endAttack: () => set({ attacking: false }),
  tickWatchdog: () => set({ watchdogPulse: (get().watchdogPulse + 1) % 100000 }),
}));

export function visibleFindingsOf(
  state: Pick<
    IRState,
    "scenarioId" | "enabledEngines" | "enabledSources" | "customRule" | "hostMode" | "extraFindings"
  >,
) {
  return catalogFindings(state).filter(
    (f) =>
      f.scenarioId === state.scenarioId &&
      findingVisible(f, state.enabledEngines, state.enabledSources, state.customRule),
  );
}

export function lookupFinding(id: string) {
  return catalogFindings(useIRStore.getState()).find((f) => f.id === id);
}

export function volumeStatusOf(volumeId: string) {
  return useIRStore.getState().volumes.find((v) => v.id === volumeId)?.status ?? "online";
}

export function hookStatusOf(id: string) {
  return useIRStore.getState().hooks.find((h) => h.id === id)?.status ?? "hooked";
}
