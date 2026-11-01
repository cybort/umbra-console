import { useEffect, useMemo, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";
import { useIRStore } from "@/lib/ir/store";

function nextLoad(prev: number, hot: boolean) {
  const target = hot ? 78 : 22;
  const drift = (Math.random() - 0.45) * (hot ? 10 : 6);
  return Math.max(6, Math.min(98, prev * 0.7 + target * 0.3 + drift));
}

export function CoverChart() {
  const scenarioId = useIRStore((s) => s.scenarioId);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const hot = scenarioId === "miner" && scanStatus !== "executed";
  const [series, setSeries] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({ i, cpu: hot ? 70 + (i % 5) : 18 + (i % 4) })),
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setSeries((prev) => {
        const last = prev[prev.length - 1]?.cpu ?? 20;
        return [...prev.slice(1), { i: (prev[prev.length - 1]?.i ?? 0) + 1, cpu: nextLoad(last, hot) }];
      });
    }, 1100);
    return () => window.clearInterval(id);
  }, [hot]);

  const now = series[series.length - 1]?.cpu ?? 0;
  const stroke = "var(--color-primary)";
  const fillId = useMemo(() => "coverLoad", []);

  return (
    <div className="rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]">
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-muted">处理器</span>
        <span className="font-mono text-sm tabular-nums text-fg">{now.toFixed(0)}%</span>
      </div>
      <div className="mt-1 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={series} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={stroke} stopOpacity={0.25} />
                <stop offset="100%" stopColor={stroke} stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis hide domain={[0, 100]} />
            <Area
              type="monotone"
              dataKey="cpu"
              stroke={stroke}
              fill={`url(#${fillId})`}
              strokeWidth={1.4}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
