export type EngineId =
  | "hash"
  | "rule"
  | "behavior"
  | "resident"
  | "hook"
  | "policy"
  | "cloud";

export type SourceId = "core" | "yara" | "openioc" | "cloud" | "custom";

export type ScenarioId = "rat" | "miner" | "hijack" | "clean";

export type HostMode = "lab" | "physical";

export type FindingKind = "process" | "file" | "policy" | "volume" | "hook";

export type Severity = "critical" | "high" | "medium" | "low";

export type ActionType = "terminate" | "block" | "backup-clear" | "isolate-volume" | "unhook";

export type ScanPhase =
  | "idle"
  | "init"
  | "processes"
  | "inject"
  | "hooks"
  | "disk"
  | "policy"
  | "done";

export type ScanStatus = "idle" | "scanning" | "complete" | "executing" | "executed";

export type ActionStatus =
  | "queued"
  | "running"
  | "done"
  | "failed"
  | "rolled-back";

export type InjectKind =
  | "parent"
  | "apc"
  | "remote-thread"
  | "writevm"
  | "mapview"
  | "setctx"
  | "hollow";

export type HookKind = "iat" | "eat" | "inline" | "trampoline" | "winhook";

export interface EngineDef {
  id: EngineId;
  name: string;
  coverName: string;
  summary: string;
  coverSummary: string;
  signatures: string;
}

export interface SourceDef {
  id: SourceId;
  name: string;
  coverName: string;
  count: number;
  summary: string;
}

export interface ScenarioDef {
  id: ScenarioId;
  name: string;
  host: string;
  os: string;
  user: string;
  blurb: string;
}

export interface Finding {
  id: string;
  scenarioId: ScenarioId;
  kind: FindingKind;
  severity: Severity;
  title: string;
  subject: string;
  path: string;
  pid?: number;
  owner?: string;
  parent?: string;
  sha256?: string;
  reason: string;
  evidence: string[];
  engines: EngineId[];
  sources: SourceId[];
  tactics: string[];
  action: ActionType;
  actionHint: string;
  policyKey?: string;
  policyValue?: string;
  local?: boolean;
  volumeId?: string;
}

export interface ScanLogLine {
  id: string;
  at: number;
  text: string;
  tone: "info" | "hit" | "ok" | "warn";
}

export interface PolicyBackup {
  id: string;
  findingId: string;
  title: string;
  key: string;
  value: string;
  createdAt: number;
  restored: boolean;
}

export interface QuarantineItem {
  id: string;
  findingId: string;
  kind: FindingKind;
  title: string;
  path: string;
  action: ActionType;
  at: number;
  local?: boolean;
}

export interface PlannedAction {
  findingId: string;
  action: ActionType;
  status: ActionStatus;
}

export interface AttackBeat {
  id: string;
  text: string;
  tone: "info" | "hit" | "ok" | "warn";
}

export interface GraphNode {
  id: string;
  kind: "process" | "memory";
  label: string;
  sub?: string;
  pid?: number;
  lane: 0 | 1 | 2;
  order: number;
  findingId?: string;
  benign?: boolean;
  unbacked?: boolean;
  protect?: "RW" | "RX" | "RWX";
  vadSize?: string;
  vadType?: "private" | "mapped" | "image";
  image?: string;
}

export interface GraphEdge {
  id: string;
  scenarioId: ScenarioId;
  from: string;
  to: string;
  kind: InjectKind;
  label: string;
  etw: string;
  sysmon?: string;
  detail?: string;
  findingId?: string;
  seq: number;
}

export interface DiskVolume {
  id: string;
  disk: string;
  letter: string;
  fs: string;
  size: string;
  role: "system" | "data" | "removable";
  findingId?: string;
}

export interface VolumeState {
  id: string;
  status: "online" | "isolated";
}

export interface ProcState {
  pid: number;
  status: "running" | "terminated";
}

export interface HostProc {
  id: string;
  pid: number;
  name: string;
  path: string;
  parentPid: number;
  user: string;
  cpu: number;
  mem: string;
  volumeId: string;
  findingId?: string;
  graphNodeId?: string;
  benign?: boolean;
  physicalOnly?: boolean;
  protectedProc?: boolean;
}

export interface LocalMount {
  name: string;
  scanned: number;
  flagged: number;
  supported: boolean;
}

export interface ApiHook {
  id: string;
  scenarioId: ScenarioId;
  kind: HookKind;
  module: string;
  fn: string;
  process: string;
  pid: number;
  original: string;
  patched: string;
  disasmOrig: string;
  disasmHook: string;
  dest: string;
  destHint: string;
  destNodeId?: string;
  method: string;
  seq: number;
}

export interface HookState {
  id: string;
  status: "hooked" | "restored";
}
