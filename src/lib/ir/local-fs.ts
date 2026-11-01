import type { Finding, ScenarioId } from "./types";

export interface FsDirHandle {
  name: string;
  getDirectoryHandle: (name: string, opts?: { create?: boolean }) => Promise<FsDirHandle>;
  getFileHandle: (name: string, opts?: { create?: boolean }) => Promise<FsFileHandle>;
  removeEntry: (name: string) => Promise<void>;
  values: () => AsyncIterable<FsHandle>;
}

interface FsFileHandle {
  name: string;
  getFile: () => Promise<File>;
  createWritable: () => Promise<{ write: (d: BufferSource | Blob | string) => Promise<void>; close: () => Promise<void> }>;
}

type FsHandle = { kind: "file" | "directory"; name: string } & Partial<FsDirHandle> & Partial<FsFileHandle>;

const SUSPECT_EXT = /\.(exe|dll|sys|scr|ps1|vbs|js|lnk|bat|cmd)$/i;
const SUSPECT_NAME = /(svchost|runtimebroker|winupdate|netcfg|msdsk|syncsvc|mimikatz|beacon)/i;
const SKIP_DIR = new Set(["node_modules", ".git", "dist", "build", ".next"]);
const QUAR_DIR = ".umbra-quarantine";

let mounted: FsDirHandle | null = null;

export function getMountedDir() {
  return mounted;
}

export function fsApiAvailable() {
  return typeof window !== "undefined" && "showDirectoryPicker" in window;
}

export async function pickLocalDirectory(): Promise<{ name: string } | null> {
  const w = window as unknown as {
    showDirectoryPicker?: (opts?: { mode?: string }) => Promise<FsDirHandle>;
  };
  if (!w.showDirectoryPicker) return null;
  try {
    mounted = await w.showDirectoryPicker({ mode: "readwrite" });
    return { name: mounted.name };
  } catch {
    return null;
  }
}

export function dropMounted() {
  mounted = null;
}

interface Walked {
  path: string;
  name: string;
  size: number;
  file: File;
  dir: FsDirHandle;
}

async function walk(dir: FsDirHandle, prefix: string, out: Walked[], cap: number): Promise<void> {
  if (out.length >= cap) return;
  for await (const entry of dir.values()) {
    if (out.length >= cap) return;
    if (entry.name.startsWith(".") || SKIP_DIR.has(entry.name)) continue;
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.kind === "directory" && entry.getDirectoryHandle) {
      try {
        const sub = await dir.getDirectoryHandle(entry.name);
        await walk(sub, rel, out, cap);
      } catch {
        /* skip unreadable */
      }
    } else if (entry.kind === "file" && entry.getFile) {
      try {
        const fh = await dir.getFileHandle(entry.name);
        const file = await fh.getFile();
        out.push({ path: rel, name: entry.name, size: file.size, file, dir });
      } catch {
        /* skip */
      }
    }
  }
}

export async function scanMounted(opts: {
  scenarioId: ScenarioId;
  customRule: string;
}): Promise<{ scanned: number; findings: Finding[] }> {
  if (!mounted) return { scanned: 0, findings: [] };
  const files: Walked[] = [];
  await walk(mounted, "", files, 400);
  const rule = opts.customRule.trim().toLowerCase();
  const findings: Finding[] = [];
  for (const f of files) {
    const hitName = SUSPECT_NAME.test(f.name) || SUSPECT_NAME.test(f.path);
    const hitExt = SUSPECT_EXT.test(f.name);
    const hitRule = rule.length > 0 && f.path.toLowerCase().includes(rule);
    const hitPath = hitExt && /payload|appdata|temp|download/i.test(f.path);
    if (!hitName && !hitRule && !hitPath) continue;
    findings.push({
      id: `local-${f.path}`,
      scenarioId: opts.scenarioId,
      kind: "file",
      severity: hitName ? "high" : "medium",
      title: `本机目录命中 ${f.name}`,
      subject: f.name,
      path: f.path,
      local: true,
      reason: "授权目录内的映像名称或路径匹配紧急查杀启发式，可隔离到同卷 .umbra-quarantine。",
      evidence: [
        `相对路径 ${f.path}`,
        `大小 ${f.size} B`,
        hitName ? "名称命中驻留伪装词" : "扩展名 + 路径启发式",
      ],
      engines: ["resident", "behavior"],
      sources: ["core", "custom"],
      tactics: ["T1055", "T1036"],
      action: "block",
      actionHint: "移动到隔离目录并阻断后续打开。",
    });
  }
  return { scanned: files.length, findings };
}

export async function quarantineLocal(relativePath: string): Promise<boolean> {
  if (!mounted) return false;
  const parts = relativePath.split("/").filter(Boolean);
  const name = parts.pop();
  if (!name) return false;
  try {
    let dir = mounted;
    for (const p of parts) dir = await dir.getDirectoryHandle(p);
    const fh = await dir.getFileHandle(name);
    const file = await fh.getFile();
    const buf = await file.arrayBuffer();
    const q = await mounted.getDirectoryHandle(QUAR_DIR, { create: true });
    const dest = await q.getFileHandle(`${Date.now()}-${name}`, { create: true });
    const w = await dest.createWritable();
    await w.write(buf);
    await w.close();
    await dir.removeEntry(name);
    return true;
  } catch {
    return false;
  }
}
