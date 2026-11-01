import { COPY } from "@/lib/ir/labels";
import { useIRStore } from "@/lib/ir/store";
import { useAttackDrill } from "@/lib/ir/use-scan";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

export function ProtectPanel() {
  const cover = useIRStore((s) => s.cover);
  const setCover = useIRStore((s) => s.setCover);
  const copy = cover ? COPY.cover : COPY.ops;
  const pulse = useIRStore((s) => s.watchdogPulse);
  const attackLog = useIRStore((s) => s.attackLog);
  const attacking = useIRStore((s) => s.attacking);
  const runDrill = useAttackDrill();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.protect}</h2>
        <p className="mt-1 text-xs leading-normal text-subtle">
          {cover
            ? "服务以普通采样进程驻留。字符串表不含安全产品特征。"
            : "防止自身被结束、禁止执行或按“杀毒软件”特征被枚举。"}
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        <li className="flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-3 shadow-[var(--shadow-border)]">
          <div>
            <div className="text-sm">{copy.camouflage}</div>
            <div className="text-2xs text-subtle">
              {cover ? "进程名 SysGraph.exe · 窗口 资源监视" : "进程名 umbra.exe · 窗口含查杀字样"}
            </div>
          </div>
          <Switch checked={cover} onCheckedChange={setCover} aria-label={copy.camouflage} />
        </li>
        <li className="flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-3 shadow-[var(--shadow-border)]">
          <div>
            <div className="flex items-center gap-2 text-sm">
              {copy.watchdog}
              <span
                className={cn("size-1.5 rounded-full bg-ok watchdog-dot")}
                aria-hidden
              />
              <span className="font-mono text-2xs text-subtle tabular-nums">
                hb {pulse}
              </span>
            </div>
            <div className="text-2xs text-subtle">三路心跳，终止请求被拒绝并拉起。</div>
          </div>
          <span className="text-xs text-ok">启用</span>
        </li>
        <li className="flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-3 shadow-[var(--shadow-border)]">
          <div>
            <div className="text-sm">{copy.lock}</div>
            <div className="text-2xs text-subtle">禁止结束自身、禁止卸载映像、禁止禁止执行。</div>
          </div>
          <span className="text-xs text-ok">锁定</span>
        </li>
        <li className="flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-3 shadow-[var(--shadow-border)]">
          <div>
            <div className="text-sm">{copy.integrity}</div>
            <div className="font-mono text-2xs text-subtle break-all">
              SHA256 a8c3…e21 与基线一致
            </div>
          </div>
          <ShieldCheck className="size-4 text-ok" />
        </li>
      </ul>

      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm font-medium">{copy.drill}</h3>
          <Button size="sm" variant="outline" disabled={attacking} onClick={runDrill}>
            {attacking ? "演练中" : "模拟对抗"}
          </Button>
        </div>
        <p className="mt-1 text-2xs leading-normal text-subtle">
          模拟恶意软件枚举安全产品并尝试结束防护进程。伪装开启时会被当成普通采样工具跳过。
        </p>
        {attackLog.length ? (
          <ol className="mt-3 flex flex-col gap-1.5 rounded-md bg-surface-2 px-3 py-3">
            {attackLog.map((b) => (
              <li
                key={b.id}
                className={cn(
                  "text-xs leading-snug font-mono",
                  b.tone === "ok" && "text-ok",
                  b.tone === "hit" && "text-crit",
                  b.tone === "warn" && "text-high",
                  b.tone === "info" && "text-muted",
                )}
              >
                {b.text}
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </div>
  );
}
