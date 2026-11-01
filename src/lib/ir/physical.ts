import type { DiskVolume, Finding, ScenarioId } from "./types";

export const VOLUMES: DiskVolume[] = [
  { id: "vol-c", disk: "Disk 0 NVMe", letter: "C:", fs: "NTFS", size: "476 GB", role: "system" },
  { id: "vol-d", disk: "Disk 0 NVMe", letter: "D:", fs: "NTFS", size: "512 GB", role: "data", findingId: "phys-vol-data" },
  { id: "vol-usb", disk: "Disk 1 USB", letter: "E:", fs: "exFAT", size: "32 GB", role: "removable", findingId: "phys-vol-usb" },
];

export function volumeFindings(scenarioId: ScenarioId): Finding[] {
  if (scenarioId === "clean") return [];
  const usbHot = scenarioId === "rat" || scenarioId === "miner";
  const dataHot = scenarioId === "hijack" || scenarioId === "miner";
  const out: Finding[] = [];
  if (usbHot) {
    out.push({
      id: "phys-vol-usb",
      scenarioId,
      kind: "volume",
      severity: "high",
      title: "可移动卷承载投递目录",
      subject: "E:",
      path: "E:\\payload\\",
      volumeId: "vol-usb",
      reason: "可移动磁盘上出现与驻留映像同哈希的投递目录，建议隔离该卷、阻断其上的执行。不会格式化磁盘。",
      evidence: ["Disk 1 USB · exFAT", "目录 payload 含 svchost.exe / winupdate.exe", "非域内授权介质"],
      engines: ["resident", "hash", "behavior"],
      sources: ["core", "cloud"],
      tactics: ["T1091", "T1055"],
      action: "isolate-volume",
      actionHint: "隔离 E: 卷，禁止从该卷创建进程。",
    });
  }
  if (dataHot) {
    out.push({
      id: "phys-vol-data",
      scenarioId,
      kind: "volume",
      severity: "medium",
      title: "数据卷存在异常可执行页文件",
      subject: "D:",
      path: "D:\\AppSync\\syncsvc.exe",
      volumeId: "vol-d",
      reason: "数据分区存放服务映像，不在标准 Program Files。可隔离后迁回或删除。不会格式化磁盘。",
      evidence: ["Disk 0 分区 D:", "映像无签名", "与会话进程路径一致"],
      engines: ["policy", "behavior"],
      sources: ["core"],
      tactics: ["T1036"],
      action: "isolate-volume",
      actionHint: "隔离 D: 数据卷上的执行，保留只读取证。",
    });
  }
  return out;
}

export function volumeActionFinding(scenarioId: ScenarioId, volumeId: string): Finding {
  const existing = volumeFindings(scenarioId).find((f) => f.volumeId === volumeId);
  if (existing) return existing;
  const v = VOLUMES.find((x) => x.id === volumeId);
  const letter = v?.letter ?? volumeId;
  return {
    id: `phys-act-${volumeId}`,
    scenarioId,
    kind: "volume",
    severity: "medium",
    title: `隔离卷 ${letter}`,
    subject: letter,
    path: `${letter}\\`,
    volumeId,
    reason: "手动隔离该卷上的执行。不会格式化或擦除数据，只阻断从该卷创建进程。",
    evidence: v ? [`${v.disk} · ${v.fs} · ${v.size}`] : [letter],
    engines: ["resident", "policy"],
    sources: ["core"],
    tactics: ["T1091"],
    action: "isolate-volume",
    actionHint: `隔离 ${letter}，禁止从该卷创建进程。`,
  };
}
