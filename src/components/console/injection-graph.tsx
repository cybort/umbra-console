import {
  edgesFor,
  INJECT_LABEL,
  nodeCaption,
  nodesFor,
  PROTECT_LABEL,
  VAD_TYPE_LABEL,
} from "@/lib/ir/graph";
import { COPY } from "@/lib/ir/labels";
import { useIRStore } from "@/lib/ir/store";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { GraphEdge, GraphNode } from "@/lib/ir/types";

const LANE_X = [24, 248, 472];
const NODE_W = 168;
const PROC_H = 50;
const MEM_H = 68;
const TOP = 40;
const ROW = 88;
const WIDTH = 680;

const LANE_OPS = ["注入源", "内存页", "目标进程"];
const LANE_COVER = ["源会话", "页", "目标"];

function nodeH(n: GraphNode) {
  return n.kind === "memory" ? MEM_H : PROC_H;
}

function pos(lane: 0 | 1 | 2, order: number) {
  return { x: LANE_X[lane], y: TOP + order * ROW };
}

function cy(n: GraphNode) {
  const p = pos(n.lane, n.order);
  return p.y + nodeH(n) / 2;
}

function port(n: GraphNode, toward: GraphNode) {
  const p = pos(n.lane, n.order);
  const y = cy(n);
  if (n.lane === toward.lane) {
    const right = p.x + NODE_W;
    return { x: toward.order >= n.order ? right : p.x, y };
  }
  if (n.lane < toward.lane) return { x: p.x + NODE_W, y };
  return { x: p.x, y };
}

function pairKey(e: GraphEdge) {
  return `${e.from}|${e.to}`;
}

export function InjectionGraph() {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const scenarioId = useIRStore((s) => s.scenarioId);
  const revealedEdgeIds = useIRStore((s) => s.revealedEdgeIds);
  const selectedNodeId = useIRStore((s) => s.selectedNodeId);
  const selectedEdgeId = useIRStore((s) => s.selectedEdgeId);
  const setSelectedNode = useIRStore((s) => s.setSelectedNode);
  const setSelectedEdge = useIRStore((s) => s.setSelectedEdge);
  const toggleSelected = useIRStore((s) => s.toggleSelected);
  const setExpanded = useIRStore((s) => s.setExpanded);
  const revealedIds = useIRStore((s) => s.revealedIds);
  const procs = useIRStore((s) => s.procs);
  const scanStatus = useIRStore((s) => s.scanStatus);

  const nodes = nodesFor(scenarioId);
  const edges = edgesFor(scenarioId);
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const maxOrder = Math.max(...nodes.map((n) => n.order), 0);
  const height = TOP + (maxOrder + 1) * ROW + 8;

  const deadPids = new Set(procs.filter((p) => p.status === "terminated").map((p) => p.pid));
  const deadFindings = new Set(
    nodes.filter((n) => n.pid != null && deadPids.has(n.pid) && n.findingId).map((n) => n.findingId!),
  );

  const injectEdges = edges.filter((e) => e.kind !== "parent");
  const shownEdges =
    scanStatus === "idle"
      ? edges.filter((e) => e.kind === "parent")
      : edges.filter((e) => e.kind === "parent" || revealedEdgeIds.includes(e.id));

  const lanes = cover ? LANE_COVER : LANE_OPS;

  return (
    <div className="rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.graph}</h2>
        <span className="font-mono text-2xs text-subtle tabular-nums">
          {cover ? "边" : "注入边"} {shownEdges.filter((e) => e.kind !== "parent").length}/{injectEdges.length}
        </span>
      </div>
      <p className="mt-1 text-2xs text-subtle">
        {cover
          ? "跨会话边按采样顺序展开。点击节点查看详情。"
          : "虚线为进程树，实线为注入。扫描时按 OpenProcess → ALLOC/WRITE/PROTECT → APC/CRT 逐段打出。"}
      </p>

      <div className="mt-3 overflow-x-auto">
        <svg
          viewBox={`0 0 ${WIDTH} ${height}`}
          className="h-auto w-full min-w-80 text-fg"
          role="img"
          aria-label={copy.graph}
        >
          <defs>
            <marker id="umbra-arrow-idle" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" className="fill-subtle" />
            </marker>
            <marker id="umbra-arrow-hot" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" className="fill-crit" />
            </marker>
          </defs>
          {lanes.map((label, i) => (
            <text
              key={label}
              x={LANE_X[i] + NODE_W / 2}
              y={18}
              textAnchor="middle"
              className="fill-subtle"
              fontSize="10"
              fontFamily="var(--font-sans)"
            >
              {label}
            </text>
          ))}
          {shownEdges.map((e) => {
            const a = byId.get(e.from);
            const b = byId.get(e.to);
            if (!a || !b) return null;
            const p1 = port(a, b);
            const p2 = port(b, a);
            const hot = e.kind !== "parent";
            const on = selectedEdgeId === e.id;
            const group = shownEdges.filter((x) => pairKey(x) === pairKey(e));
            const gi = group.findIndex((x) => x.id === e.id);
            const spread = (gi - (group.length - 1) / 2) * 28;
            const same = a.lane === b.lane;
            const bowX = same ? p1.x + 48 + spread : (p1.x + p2.x) / 2 + spread;
            const d = `M ${p1.x} ${p1.y} C ${bowX} ${p1.y}, ${bowX} ${p2.y}, ${p2.x} ${p2.y}`;
            return (
              <g
                key={e.id}
                className="cursor-pointer"
                onClick={(ev) => {
                  ev.stopPropagation();
                  setSelectedEdge(e.id);
                }}
              >
                <path
                  d={d}
                  fill="none"
                  className={hot ? "stroke-crit" : "stroke-border-strong"}
                  strokeWidth={on ? 2.4 : hot ? 1.6 : 1}
                  strokeDasharray={hot ? undefined : "5 4"}
                  markerEnd={hot ? "url(#umbra-arrow-hot)" : "url(#umbra-arrow-idle)"}
                  opacity={on || !selectedEdgeId ? 1 : hot ? 0.45 : 0.7}
                />
                <text
                  x={bowX}
                  y={(p1.y + p2.y) / 2 - 6}
                  textAnchor="middle"
                  className={hot ? "fill-crit" : "fill-subtle"}
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                >
                  {cover && hot ? "边" : e.label}
                </text>
              </g>
            );
          })}
          {nodes.map((n) => {
            const p = pos(n.lane, n.order);
            const on = selectedNodeId === n.id;
            const hit = n.findingId && revealedIds.includes(n.findingId);
            const terminated =
              (n.pid != null && deadPids.has(n.pid)) ||
              (n.findingId ? deadFindings.has(n.findingId) : false);
            const h = nodeH(n);
            return (
              <g
                key={n.id}
                className="cursor-pointer"
                onClick={() => {
                  setSelectedNode(n.id);
                  if (n.findingId && revealedIds.includes(n.findingId)) {
                    toggleSelected(n.findingId);
                    setExpanded(n.findingId);
                  }
                }}
              >
                <rect
                  x={p.x}
                  y={p.y}
                  width={NODE_W}
                  height={h}
                  rx={8}
                  className={cn(
                    terminated ? "opacity-40" : "",
                    on
                      ? "fill-surface-2 stroke-primary"
                      : hit
                        ? "fill-surface-2 stroke-crit"
                        : "fill-bg stroke-border-strong",
                  )}
                  strokeWidth={on ? 1.6 : 1}
                />
                <text
                  x={p.x + 10}
                  y={p.y + 18}
                  className={n.benign ? "fill-muted" : "fill-fg"}
                  fontSize="12"
                  fontFamily="var(--font-sans)"
                >
                  {n.label}
                </text>
                <text
                  x={p.x + 10}
                  y={p.y + 34}
                  className="fill-subtle"
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                >
                  {terminated ? "已结束 · " : ""}
                  {n.kind === "memory"
                    ? `${n.protect ?? ""} ${n.vadSize ?? ""}`
                    : (n.sub ?? "")}
                </text>
                {n.kind === "memory" ? (
                  <text
                    x={p.x + 10}
                    y={p.y + 50}
                    className="fill-subtle"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                  >
                    {n.unbacked ? "unbacked · " : ""}
                    {n.protect ? PROTECT_LABEL[n.protect] : ""}
                  </text>
                ) : n.unbacked ? (
                  <text
                    x={p.x + 10}
                    y={p.y + 44}
                    className="fill-high"
                    fontSize="10"
                    fontFamily="var(--font-mono)"
                  >
                    unbacked
                  </text>
                ) : null}
              </g>
            );
          })}
        </svg>
      </div>

      {nodes.some((n) => n.kind === "memory") ? (
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-micro text-subtle">
          {nodes
            .filter((n) => n.kind === "memory")
            .map((n) => (
              <li key={n.id}>
                {n.label}
                {n.protect ? ` · ${PROTECT_LABEL[n.protect]}` : ""}
                {n.vadType ? ` · ${VAD_TYPE_LABEL[n.vadType]}` : ""}
                {n.vadSize ? ` · ${n.vadSize}` : ""}
                {n.image ? ` · ${n.image}` : ""}
              </li>
            ))}
        </ul>
      ) : null}

      <div className="mt-3 border-t border-line pt-3">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.events}</h3>
          <span className="font-mono text-2xs text-subtle tabular-nums">
            {shownEdges.filter((e) => e.kind !== "parent").length} evt
          </span>
        </div>
        {shownEdges.filter((e) => e.kind !== "parent").length === 0 ? (
          <p className="mt-2 text-2xs text-subtle">
            {scanStatus === "idle"
              ? cover
                ? "开始采样后写入跨会话边。"
                : "扫描进入注入阶段后，按生命周期写入 ETW-TI / Sysmon 事件。"
              : cover
                ? "尚未观察到跨会话边。"
                : "尚未检出注入边。"}
          </p>
        ) : (
          <ol className="mt-2 flex flex-col gap-1">
            {shownEdges
              .filter((e) => e.kind !== "parent")
              .map((e) => {
                const on = selectedEdgeId === e.id;
                return (
                  <li key={e.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedEdge(e.id)}
                      className={cn(
                        "flex min-h-11 w-full items-start gap-2 rounded-sm px-2 py-2 text-left",
                        on ? "bg-surface-2" : "hover:bg-surface-2",
                      )}
                    >
                      <span className="w-6 shrink-0 font-mono text-2xs text-subtle tabular-nums">
                        {e.seq}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-1.5">
                          <Badge tone="crit">{cover ? e.label : INJECT_LABEL[e.kind]}</Badge>
                          {e.sysmon && !cover ? (
                            <span className="font-mono text-micro text-subtle">EID {e.sysmon}</span>
                          ) : null}
                          <span className="font-mono text-micro text-muted">
                            {cover ? "边" : e.etw.replace("THREATINT_", "")}
                          </span>
                        </span>
                        <span className="mt-0.5 block font-mono text-2xs text-subtle">
                          {nodeCaption(e.from)} → {nodeCaption(e.to)}
                          {e.detail && !cover ? ` · ${e.detail}` : ""}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
          </ol>
        )}
      </div>
    </div>
  );
}
