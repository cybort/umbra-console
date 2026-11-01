import { useEffect, useRef } from "react";
import { ENGINES, SOURCES } from "./catalog";
import { edgesFor, nodeCaption } from "./graph";
import { hookCaption, HOOK_KIND_LABEL, hooksFor } from "./hooks";
import { getMountedDir, scanMounted } from "./local-fs";
import { VOLUMES } from "./physical";
import { procsFor } from "./processes";
import { findingVisible, useIRStore, visibleFindingsOf } from "./store";
import type { Finding, ScanPhase } from "./types";

interface Beat {
  delay: number;
  run: () => void;
}

function benignPaths(phase: ScanPhase, physical: boolean): string[] {
  if (phase === "processes") {
    return [
      "C:\\Windows\\System32\\csrss.exe",
      "C:\\Windows\\System32\\services.exe",
      "C:\\Windows\\explorer.exe",
    ];
  }
  if (phase === "inject") {
    return ["OpenProcess explorer.exe 标准权限", "ntdll!NtQueueApcThread 本进程"];
  }
  if (phase === "hooks") {
    return [
      "ntdll!NtClose 入口 = KnownDlls",
      "kernel32!GetLastError IAT 未改",
      "user32!DispatchMessageW 无 WH 过滤",
    ];
  }
  if (phase === "disk") {
    if (physical) {
      return VOLUMES.map((v) => `${v.letter} ${v.fs} ${v.disk} ${v.size}`);
    }
    return [
      "C:\\Windows\\System32\\drivers\\tcpip.sys",
      "C:\\Windows\\System32\\ntdll.dll",
    ];
  }
  return [
    "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run",
    "C:\\Windows\\System32\\Tasks",
  ];
}

export function useScanRunner() {
  const timers = useRef<number[]>([]);
  const scanStatus = useIRStore((s) => s.scanStatus);
  const scenarioId = useIRStore((s) => s.scenarioId);
  const enabledEngines = useIRStore((s) => s.enabledEngines);
  const enabledSources = useIRStore((s) => s.enabledSources);
  const customRule = useIRStore((s) => s.customRule);
  const hostMode = useIRStore((s) => s.hostMode);

  useEffect(() => {
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, []);

  useEffect(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    if (scanStatus !== "scanning") return;

    let cancelled = false;

    const run = async () => {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const store0 = useIRStore.getState();
      if (store0.hostMode === "physical" && getMountedDir()) {
        const res = await scanMounted({
          scenarioId: store0.scenarioId,
          customRule: store0.customRule,
        });
        if (cancelled) return;
        useIRStore.getState().setExtraFindings(res.findings);
        const mount = useIRStore.getState().localMount;
        if (mount) {
          useIRStore.getState().setLocalMount({
            ...mount,
            scanned: res.scanned,
            flagged: res.findings.length,
          });
        }
        useIRStore.getState().appendLog({
          tone: res.findings.length ? "hit" : "ok",
          text: `本机目录 ${res.scanned} 个文件，命中 ${res.findings.length}`,
        });
      }

      if (cancelled || useIRStore.getState().scanStatus !== "scanning") return;

      const store = useIRStore.getState();
      const hits = visibleFindingsOf(store);
      const cover = store.cover;
      const beats: Beat[] = [];
      let t = 0;
      const gap = reduced ? 40 : 140;
      const hitGap = reduced ? 80 : 360;

      const push = (delayAdd: number, runBeat: () => void) => {
        t += delayAdd;
        beats.push({ delay: t, run: runBeat });
      };

      push(80, () => {
        useIRStore.getState().setPhase("init");
        const nproc = procsFor(store.scenarioId, store.hostMode).length;
        useIRStore.getState().appendLog({
          tone: "info",
          text: cover
            ? "加载采样模块…"
            : store.hostMode === "physical"
              ? `连接物理主机 · 会话进程 ${nproc} · 磁盘 ${VOLUMES.length} 卷`
              : "初始化查杀引擎…",
        });
      });

      enabledEngines.forEach((id) => {
        const eng = ENGINES.find((e) => e.id === id);
        if (!eng) return;
        push(gap, () => {
          useIRStore.getState().appendLog({
            tone: "info",
            text: cover
              ? `模块 ${eng.coverName} 就绪`
              : `引擎 ${eng.name} 就绪 · ${eng.signatures}`,
          });
          useIRStore.getState().setProgress(Math.min(12, useIRStore.getState().progress + 2));
        });
      });

      enabledSources.forEach((id) => {
        const src = SOURCES.find((s) => s.id === id);
        if (!src) return;
        push(gap, () => {
          useIRStore.getState().appendLog({
            tone: "ok",
            text: cover
              ? `对照 ${src.coverName}`
              : `加载特征库 ${src.name}（${src.count.toLocaleString("zh-CN")}）`,
          });
        });
      });

      if (enabledEngines.length === 0 || enabledSources.length === 0) {
        push(gap, () => {
          useIRStore.getState().appendLog({
            tone: "warn",
            text: cover ? "未启用任何模块或目录。" : "未启用任何引擎或特征源，跳过检出。",
          });
        });
      }

      const kindsOf = (k: Finding["kind"]) => hits.filter((f) => f.kind === k);

      const phases: {
        phase: ScanPhase;
        kinds: Finding["kind"][];
        start: number;
        end: number;
      }[] = [
        { phase: "processes", kinds: ["process"], start: 16, end: 30 },
        { phase: "inject", kinds: [], start: 32, end: 44 },
        { phase: "hooks", kinds: [], start: 46, end: 60 },
        { phase: "disk", kinds: ["file", "volume"], start: 64, end: 82 },
        { phase: "policy", kinds: ["policy"], start: 86, end: 96 },
      ];

      const injectEdges = edgesFor(store.scenarioId).filter((e) => e.kind !== "parent");
      const hookRows = hooksFor(store.scenarioId).filter((h) => hits.some((f) => f.id === h.id));

      phases.forEach((p) => {
        push(hitGap, () => {
          useIRStore.getState().setPhase(p.phase);
          useIRStore.getState().setProgress(p.start);
          const label =
            p.phase === "processes"
              ? cover
                ? "会话"
                : "驻留进程"
              : p.phase === "inject"
                ? cover
                  ? "跨进程边"
                  : "注入图（WRITEVM / APC / CRT）"
                : p.phase === "hooks"
                  ? cover
                    ? "入口核对"
                    : "API 钩子（IAT / EAT / inline / WH_*）"
                  : p.phase === "disk"
                    ? cover
                      ? "磁盘"
                      : store.hostMode === "physical"
                        ? "物理磁盘与映像"
                        : "磁盘映像"
                    : cover
                      ? "计划项"
                      : "系统策略";
          useIRStore.getState().appendLog({
            tone: "info",
            text: cover ? `开始${label}采样` : `扫描${label}`,
          });
        });
        benignPaths(p.phase, store.hostMode === "physical").forEach((path) => {
          push(gap, () => {
            useIRStore.getState().appendLog({
              tone: "ok",
              text: `通过  ${path}`,
            });
            const cur = useIRStore.getState().progress;
            if (cur < p.end - 4) useIRStore.getState().setProgress(cur + 2);
          });
        });
        if (p.phase === "inject") {
          injectEdges.forEach((e) => {
            push(hitGap, () => {
              useIRStore.getState().revealEdge(e.id);
              if (e.findingId) useIRStore.getState().revealFinding(e.findingId);
              const sys = e.sysmon && !cover ? `EID ${e.sysmon} ` : "";
              useIRStore.getState().appendLog({
                tone: "hit",
                text: `${sys}${e.etw}  ${nodeCaption(e.from)} → ${nodeCaption(e.to)}`,
              });
              const cur = useIRStore.getState().progress;
              useIRStore.getState().setProgress(Math.min(p.end, cur + 3));
            });
          });
        }
        if (p.phase === "hooks") {
          hookRows.forEach((h) => {
            push(hitGap, () => {
              useIRStore.getState().revealFinding(h.id);
              if (h.destNodeId) useIRStore.getState().setSelectedNode(h.destNodeId);
              useIRStore.getState().appendLog({
                tone: "hit",
                text: cover
                  ? `入口异常  ${h.fn}`
                  : `${HOOK_KIND_LABEL[h.kind]}  ${hookCaption(h)}  ${h.process}(${h.pid}) → ${h.dest}`,
              });
              const cur = useIRStore.getState().progress;
              useIRStore.getState().setProgress(Math.min(p.end, cur + 3));
            });
          });
        }
        p.kinds.forEach((kind) => {
          kindsOf(kind).forEach((f) => {
            push(hitGap, () => {
              useIRStore.getState().revealFinding(f.id);
              useIRStore.getState().appendLog({
                tone: "hit",
                text: `${cover ? "异常" : f.severity === "critical" ? "严重" : "检出"}  ${f.subject}  ${f.path}`,
              });
              const cur = useIRStore.getState().progress;
              useIRStore.getState().setProgress(Math.min(p.end, cur + 4));
            });
          });
        });
      });

      push(hitGap, () => {
        const st = useIRStore.getState();
        st.setPhase("done");
        st.setProgress(100);
        st.setScanStatus("complete");
        st.appendLog({
          tone: st.revealedIds.length ? "hit" : "ok",
          text: cover
            ? `采样结束，异常 ${st.revealedIds.length} 项`
            : `扫描完成，检出 ${st.revealedIds.length} 项，注入边 ${st.revealedEdgeIds.length}`,
        });
      });

      beats.forEach((b) => {
        const id = window.setTimeout(() => {
          if (cancelled || useIRStore.getState().scanStatus !== "scanning") return;
          b.run();
        }, b.delay);
        timers.current.push(id);
      });
    };

    void run();

    return () => {
      cancelled = true;
      timers.current.forEach((x) => window.clearTimeout(x));
      timers.current = [];
    };
  }, [scanStatus, scenarioId, enabledEngines, enabledSources, customRule, hostMode]);
}

export function useWatchdog() {
  useEffect(() => {
    const id = window.setInterval(() => {
      useIRStore.getState().tickWatchdog();
    }, 1200);
    return () => window.clearInterval(id);
  }, []);
}

export function useAttackDrill() {
  const timers = useRef<number[]>([]);

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);

  const run = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
    const store = useIRStore.getState();
    if (store.attacking) return;
    store.beginAttack();
    const cover = store.cover;
    const beats: { delay: number; fn: () => void }[] = [];
    const add = (delay: number, fn: () => void) => beats.push({ delay, fn });

    add(80, () =>
      store.pushAttack({
        tone: "info",
        text: "未知进程 enum_av.exe 正在枚举安全产品与防护进程",
      }),
    );
    add(900, () =>
      store.pushAttack({
        tone: "info",
        text: cover
          ? "窗口标题 / 进程名 / 字符串表均未命中杀毒特征"
          : "命中特征：灰域、UMBRA、查杀、quarantine、YARA",
      }),
    );
    add(1800, () => {
      if (cover) {
        useIRStore.getState().pushAttack({
          tone: "ok",
          text: "对手将本进程识别为 SysGraph.exe（性能采样），已跳过",
        });
      } else {
        useIRStore.getState().pushAttack({
          tone: "warn",
          text: "对手尝试结束 umbra.exe 并删除映像",
        });
      }
    });
    add(2700, () => {
      const st = useIRStore.getState();
      if (st.cover) {
        st.pushAttack({
          tone: "ok",
          text: "执行锁未暴露。看门狗心跳保持。",
        });
        st.endAttack();
      } else {
        st.pushAttack({
          tone: "hit",
          text: "看门狗拦截 NtTerminateProcess，拒绝卸载",
        });
      }
    });
    add(3600, () => {
      const st = useIRStore.getState();
      if (st.cover) return;
      st.setCover(true);
      st.pushAttack({
        tone: "ok",
        text: "已自动切入伪装身份 SysGraph，字符串表已替换，进程继续执行",
      });
      st.endAttack();
    });

    beats.forEach((b) => {
      timers.current.push(window.setTimeout(b.fn, b.delay));
    });
  };

  return run;
}

export function matchCount() {
  const s = useIRStore.getState();
  return visibleFindingsOf(s).filter((f) =>
    findingVisible(f, s.enabledEngines, s.enabledSources, s.customRule),
  ).length;
}
