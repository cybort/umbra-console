import { COPY } from "@/lib/ir/labels";
import { VOLUMES } from "@/lib/ir/physical";
import { dropMounted, fsApiAvailable, pickLocalDirectory } from "@/lib/ir/local-fs";
import { catalogFindings, useIRStore } from "@/lib/ir/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DiskPanel() {
  const cover = useIRStore((s) => s.cover);
  const copy = cover ? COPY.cover : COPY.ops;
  const hostMode = useIRStore((s) => s.hostMode);
  const volumes = useIRStore((s) => s.volumes);
  const localMount = useIRStore((s) => s.localMount);
  const setLocalMount = useIRStore((s) => s.setLocalMount);
  const setExtraFindings = useIRStore((s) => s.setExtraFindings);
  const extraFindings = useIRStore((s) => s.extraFindings);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const planIsolate = useIRStore((s) => s.planIsolate);
  const unisolateVolume = useIRStore((s) => s.unisolateVolume);
  const planned = useIRStore((s) => s.planned);
  const scenarioId = useIRStore((s) => s.scenarioId);
  const locked = scanStatus === "scanning" || scanStatus === "executing";

  if (hostMode !== "physical") return null;

  const catalog = catalogFindings({ scenarioId, hostMode, extraFindings });

  async function mount() {
    if (!fsApiAvailable()) {
      setLocalMount({
        name: "",
        scanned: 0,
        flagged: 0,
        supported: false,
      });
      return;
    }
    const picked = await pickLocalDirectory();
    if (!picked) return;
    setLocalMount({
      name: picked.name,
      scanned: 0,
      flagged: 0,
      supported: true,
    });
  }

  function unmount() {
    dropMounted();
    setExtraFindings(extraFindings.filter((f) => !f.local));
    setLocalMount(null);
  }

  return (
    <section>
      <h2 className="text-xs font-medium tracking-wide text-muted uppercase">{copy.disk}</h2>
      <p className="mt-1 text-2xs text-subtle">
        {cover ? "卸载卷只停用执行，不会擦除。" : "隔离阻断该卷执行，不会格式化或擦除。系统卷不可隔离。"}
      </p>
      <ul className="mt-2 flex flex-col gap-2">
        {VOLUMES.map((v) => {
          const st = volumes.find((x) => x.id === v.id)?.status ?? "online";
          const isolated = st === "isolated";
          const queued = planned.some((p) => {
            const f = catalog.find((x) => x.id === p.findingId);
            return (
              f?.volumeId === v.id &&
              p.action === "isolate-volume" &&
              (p.status === "queued" || p.status === "running")
            );
          });
          const canIsolate = v.role !== "system";
          return (
            <li
              key={v.id}
              className={cn(
                "rounded-md bg-surface px-3 py-2.5 shadow-[var(--shadow-border)]",
                isolated && "opacity-70",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-sm font-medium">
                    {v.letter}{" "}
                    <span className="font-mono text-2xs font-normal text-subtle">{v.disk}</span>
                  </div>
                  <div className="font-mono text-2xs text-subtle">
                    {v.fs} · {v.size} · {v.role === "system" ? "系统" : v.role === "data" ? "数据" : "可移动"}
                  </div>
                </div>
                <Badge tone={isolated ? "ok" : v.role === "removable" ? "high" : "default"}>
                  {isolated ? "已隔离" : "在线"}
                </Badge>
              </div>
              {canIsolate ? (
                <div className="mt-2">
                  {isolated ? (
                    <Button size="sm" variant="outline" disabled={locked} onClick={() => unisolateVolume(v.id)}>
                      {copy.unisolate}
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={locked || queued}
                      onClick={() => planIsolate(v.id)}
                    >
                      {queued ? "已入队" : copy.isolate}
                    </Button>
                  )}
                </div>
              ) : (
                <p className="mt-1 text-micro text-subtle">系统卷不可隔离</p>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-3 rounded-md bg-surface-2 px-3 py-3">
        <p className="text-xs leading-normal text-muted">
          授权后扫描本机目录，命中文件可隔离到同目录 .umbra-quarantine。不会格式化磁盘。
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {localMount?.name ? (
            <Button size="sm" variant="outline" disabled={locked} onClick={unmount}>
              {copy.unmount}
            </Button>
          ) : (
            <Button size="sm" variant="outline" disabled={locked} onClick={() => void mount()}>
              {copy.mount}
            </Button>
          )}
        </div>
        {localMount?.name ? (
          <p className="mt-2 font-mono text-2xs text-subtle">
            {localMount.name}
            {localMount.scanned ? ` · 扫描 ${localMount.scanned} · 命中 ${localMount.flagged}` : " · 待扫描"}
          </p>
        ) : localMount && !localMount.supported ? (
          <p className="mt-2 text-2xs text-high">当前浏览器不支持目录授权，请换 Chromium 内核。</p>
        ) : null}
      </div>
    </section>
  );
}
