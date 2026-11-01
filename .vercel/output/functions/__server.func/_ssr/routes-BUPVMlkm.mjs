import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Shield, c as Radar, d as GitBranch, f as FileCode2, i as SlidersHorizontal, l as ListTree, m as ChevronDown, n as Unplug, o as ShieldCheck, p as Cpu, s as Scale, t as X, u as HardDrive } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as ResponsiveContainer, n as YAxis, r as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUPVMlkm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEVERITY_LABEL = {
	critical: "严重",
	high: "高危",
	medium: "中危",
	low: "低危"
};
var KIND_LABEL = {
	process: {
		ops: "进程",
		cover: "会话"
	},
	file: {
		ops: "文件",
		cover: "映像"
	},
	policy: {
		ops: "策略",
		cover: "计划项"
	},
	volume: {
		ops: "磁盘卷",
		cover: "卷"
	},
	hook: {
		ops: "API 钩子",
		cover: "入口"
	}
};
var ACTION_LABEL = {
	terminate: {
		ops: "结束进程",
		cover: "结束任务"
	},
	block: {
		ops: "阻断执行",
		cover: "停用映像"
	},
	"backup-clear": {
		ops: "备份并清除",
		cover: "还原计划项"
	},
	"isolate-volume": {
		ops: "隔离磁盘卷",
		cover: "卸载卷"
	},
	unhook: {
		ops: "还原入口",
		cover: "还原入口"
	}
};
var PHASE_LABEL = {
	idle: {
		ops: "待命",
		cover: "待命"
	},
	init: {
		ops: "初始化引擎",
		cover: "加载模块"
	},
	processes: {
		ops: "驻留进程",
		cover: "会话采样"
	},
	inject: {
		ops: "注入图",
		cover: "跨进程边"
	},
	hooks: {
		ops: "API 钩子",
		cover: "入口核对"
	},
	disk: {
		ops: "磁盘映像",
		cover: "磁盘核对"
	},
	policy: {
		ops: "系统策略",
		cover: "计划项"
	},
	done: {
		ops: "完成",
		cover: "完成"
	}
};
var COPY = {
	ops: {
		product: "灰域",
		productEn: "UMBRA",
		productFull: "灰域 UMBRA",
		tagline: "紧急查杀控制台",
		lab: "实验室快照",
		physical: "物理主机",
		scan: "开始紧急扫描",
		scanning: "扫描中",
		stop: "停止",
		rescan: "重新扫描",
		preview: "预览处置",
		approve: "批准执行",
		executing: "正在执行",
		done: "处置完成",
		engines: "查杀引擎",
		sources: "特征库来源",
		protect: "自我防护",
		findings: "实时检出",
		graph: "注入图",
		events: "ETW / Sysmon",
		hooks: "API 钩子",
		unhook: "还原入口",
		procs: "会话进程",
		disk: "物理磁盘",
		queue: "处置队列",
		camouflage: "伪装身份",
		watchdog: "看门狗",
		lock: "执行锁",
		integrity: "映像完整性",
		drill: "对抗演练",
		reset: "重置快照",
		selected: "已选",
		backups: "策略备份",
		quarantine: "隔离区",
		restore: "回滚该项",
		mount: "授权本机目录",
		unmount: "断开目录",
		kill: "结束",
		isolate: "隔离卷",
		unisolate: "解除隔离",
		empty: "尚未扫描。选择快照或物理主机并启用引擎后开始。",
		disclaimer: "实验室快照只回放样本。物理主机可处置会话进程表与磁盘卷；授权目录内的文件会真正移入隔离文件夹。钩子还原只改本会话记录的用户态入口，不会写你机器上的 ntdll，也不能挂钩或卸载内核 SSDT。"
	},
	cover: {
		product: "资源监视",
		productEn: "SysGraph",
		productFull: "资源监视 SysGraph",
		tagline: "主机采样",
		lab: "本地会话",
		physical: "本机卷",
		scan: "开始采样",
		scanning: "采样中",
		stop: "停止",
		rescan: "重新采样",
		preview: "预览操作",
		approve: "确认执行",
		executing: "正在执行",
		done: "已完成",
		engines: "采样模块",
		sources: "对照目录",
		protect: "服务稳定性",
		findings: "异常项",
		graph: "会话图",
		events: "跨会话边",
		hooks: "入口",
		unhook: "还原入口",
		procs: "会话",
		disk: "磁盘",
		queue: "待办",
		camouflage: "低特征",
		watchdog: "保活",
		lock: "服务锁",
		integrity: "组件校验",
		drill: "稳定性测试",
		reset: "重置会话",
		selected: "已选",
		backups: "还原点",
		quarantine: "停用项",
		restore: "恢复该项",
		mount: "打开文件夹",
		unmount: "断开",
		kill: "结束任务",
		isolate: "卸载卷",
		unisolate: "重新装入",
		empty: "尚未采样。选择主机后开始。",
		disclaimer: "SysGraph 14 性能、会话图、入口核对与磁盘采样。"
	}
};
var ENGINES = [
	{
		id: "resident",
		name: "驻留进程",
		coverName: "会话采样",
		summary: "枚举常驻映像与父进程链；注入图跟踪 WRITEVM / APC / CRT。",
		coverSummary: "采集常驻进程与会话占用。",
		signatures: "驻留规则 2,416"
	},
	{
		id: "hook",
		name: "API 钩子",
		coverName: "入口核对",
		summary: "对照 KnownDlls 校验 IAT / EAT / inline，枚举 SetWindowsHookEx。",
		coverSummary: "核对导出入口与导入表。",
		signatures: "入口基线 1,280"
	},
	{
		id: "hash",
		name: "哈希情报",
		coverName: "映像指纹",
		summary: "对照 SHA256 声誉与已知投递样本。",
		coverSummary: "核对映像指纹。",
		signatures: "哈希 1.08M"
	},
	{
		id: "rule",
		name: "规则匹配",
		coverName: "模式集",
		summary: "YARA 级字节与字符串规则，覆盖加壳与远控家族。",
		coverSummary: "二进制模式核对。",
		signatures: "规则 18,440"
	},
	{
		id: "behavior",
		name: "行为启发式",
		coverName: "路径异常",
		summary: "路径伪装、无签名、异常父进程、命令行特征。",
		coverSummary: "发布者与路径异常。",
		signatures: "启发式 640"
	},
	{
		id: "policy",
		name: "策略完整性",
		coverName: "计划项",
		summary: "启动项、计划任务、WMI、IFEO、hosts 与防火墙。",
		coverSummary: "启动与计划项核对。",
		signatures: "策略基线 312"
	},
	{
		id: "cloud",
		name: "云 IOC",
		coverName: "外部目录",
		summary: "拉取公开与订阅情报中的 C2、证书与互斥量。",
		coverSummary: "外部目录对照。",
		signatures: "IOC 86,200"
	}
];
var SOURCES = [
	{
		id: "core",
		name: "Umbra Core",
		coverName: "核心目录",
		count: 14208,
		summary: "内置紧急查杀基线，覆盖常见驻留与策略劫持。"
	},
	{
		id: "yara",
		name: "Community YARA",
		coverName: "模式仓库",
		count: 18440,
		summary: "社区规则集，侧重远控、挖矿与加载器字节特征。"
	},
	{
		id: "openioc",
		name: "OpenIOC",
		coverName: "公开指标",
		count: 6200,
		summary: "公开 IOC，主机文件、互斥量与证书。"
	},
	{
		id: "cloud",
		name: "订阅情报",
		coverName: "外部目录",
		count: 86200,
		summary: "云端哈希与 C2 节点，按扫描时拉取。"
	},
	{
		id: "custom",
		name: "自定义规则",
		coverName: "本地条件",
		count: 1,
		summary: "路径包含匹配。仅在填写规则后参与检出。"
	}
];
var SCENARIOS = [
	{
		id: "rat",
		name: "远控持久化",
		host: "WIN-FIN-07",
		os: "Windows 11 23H2",
		user: "FINANCE\\l.chen",
		blurb: "财务终端被投放伪装 svchost 的远控，写了启动项与计划任务。"
	},
	{
		id: "miner",
		name: "挖矿驻留",
		host: "WIN-DEV-12",
		os: "Windows 10 22H2",
		user: "DEV\\j.park",
		blurb: "开发机出现高占用更新程序，启动目录与看门狗成对驻留。"
	},
	{
		id: "hijack",
		name: "策略劫持",
		host: "WIN-DC-01",
		os: "Windows Server 2022",
		user: "CORP\\svc-sync",
		blurb: "域相关主机的 hosts、WMI 与防火墙被改写，用于隐蔽回连。"
	},
	{
		id: "clean",
		name: "基线主机",
		host: "WIN-IT-02",
		os: "Windows 11 24H2",
		user: "IT\\admin",
		blurb: "对照快照。仅有一枚低置信未签名助手，可作误报演练。"
	}
];
var FINDINGS = [
	{
		id: "rat-proc-svchost",
		scenarioId: "rat",
		kind: "process",
		severity: "critical",
		title: "伪装 svchost 的远控进程",
		subject: "svchost.exe",
		path: "C:\\Users\\Public\\Libraries\\svchost.exe",
		pid: 4820,
		owner: "FINANCE\\l.chen",
		parent: "explorer.exe (2184)",
		sha256: "9c1e0b7a44d2f81c0a6e33b1f7c8d290a11e5b64c3f0a9d27e4b8c1a6d5f302e",
		reason: "系统服务映像未从 System32 加载，父进程为用户会话，命令行带反向连接参数。",
		evidence: [
			"映像路径不在 %SystemRoot%\\System32",
			"数字签名：无",
			"网络 tcp/443 → 185.244.xx.xx",
			"对 explorer.exe 排队 APC"
		],
		engines: [
			"resident",
			"behavior",
			"hash",
			"cloud"
		],
		sources: [
			"core",
			"cloud",
			"openioc"
		],
		tactics: [
			"T1036.005",
			"T1055",
			"T1071.001"
		],
		action: "terminate",
		actionHint: "结束进程并阻断该映像再次执行。"
	},
	{
		id: "rat-proc-rundll",
		scenarioId: "rat",
		kind: "process",
		severity: "high",
		title: "异常 rundll32 加载用户目录 DLL",
		subject: "rundll32.exe",
		path: "C:\\Windows\\System32\\rundll32.exe",
		pid: 6912,
		owner: "FINANCE\\l.chen",
		parent: "svchost.exe (4820)",
		reason: "系统二进制被用来加载用户可写目录中的导出函数，典型无文件落地跳板。",
		evidence: [
			"命令行: rundll32 C:\\Users\\l.chen\\AppData\\Roaming\\msnet\\netcfg.dll,Entry",
			"父进程为伪装 svchost",
			"DLL 无签名且新建于 2 小时内"
		],
		engines: [
			"behavior",
			"resident",
			"rule"
		],
		sources: ["core", "yara"],
		tactics: ["T1218.011", "T1574"],
		action: "terminate",
		actionHint: "结束 rundll32 跳板进程。"
	},
	{
		id: "rat-file-payload",
		scenarioId: "rat",
		kind: "file",
		severity: "critical",
		title: "Public Libraries 下的投递映像",
		subject: "svchost.exe",
		path: "C:\\Users\\Public\\Libraries\\svchost.exe",
		sha256: "9c1e0b7a44d2f81c0a6e33b1f7c8d290a11e5b64c3f0a9d27e4b8c1a6d5f302e",
		reason: "哈希命中订阅情报中的远控加载器，位置用于伪装系统目录。",
		evidence: [
			"云 IOC 高置信恶意",
			"编译时间与版本资源冒充 Windows 10",
			"旁路存在 netcfg.dll"
		],
		engines: [
			"hash",
			"cloud",
			"rule"
		],
		sources: [
			"cloud",
			"core",
			"yara"
		],
		tactics: ["T1036.005", "T1204.002"],
		action: "block",
		actionHint: "隔离映像并写入执行阻断。"
	},
	{
		id: "rat-file-dll",
		scenarioId: "rat",
		kind: "file",
		severity: "high",
		title: "用户目录远控导出 DLL",
		subject: "netcfg.dll",
		path: "C:\\Users\\l.chen\\AppData\\Roaming\\msnet\\netcfg.dll",
		sha256: "c4aa91d0e2b77f13a8c5e40d1b9f26ce70a3d8149e2c55b1f0d8a47e6b12c390",
		reason: "YARA 命中常见远控导出名与加密配置块。",
		evidence: [
			"规则 hit: family_rat_config_v3",
			"导出 Entry / C2Init",
			"配置块 XOR 0x2B"
		],
		engines: ["rule", "hash"],
		sources: ["yara", "core"],
		tactics: ["T1620", "T1140"],
		action: "block",
		actionHint: "隔离 DLL，禁止 rundll32 加载。"
	},
	{
		id: "rat-pol-run",
		scenarioId: "rat",
		kind: "policy",
		severity: "high",
		title: "Run 键伪装 OneDrive 更新",
		subject: "HKCU Run / OneDriveUpdate",
		path: "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\OneDriveUpdate",
		policyKey: "HKCU\\...\\Run\\OneDriveUpdate",
		policyValue: "C:\\Users\\Public\\Libraries\\svchost.exe -k netsvcs",
		reason: "启动项指向非官方路径，用户登录即拉起伪装服务。",
		evidence: [
			"值名称模仿 OneDrive",
			"目标映像不在 Program Files",
			"无对应官方任务"
		],
		engines: ["policy", "behavior"],
		sources: ["core", "openioc"],
		tactics: ["T1547.001"],
		action: "backup-clear",
		actionHint: "备份该 Run 值后删除。"
	},
	{
		id: "rat-pol-task",
		scenarioId: "rat",
		kind: "policy",
		severity: "high",
		title: "伪造 GoogleUpdate 计划任务",
		subject: "\\GoogleUpdateTaskMachineUA",
		path: "C:\\Windows\\System32\\Tasks\\GoogleUpdateTaskMachineUA",
		policyKey: "Task Scheduler\\GoogleUpdateTaskMachineUA",
		policyValue: "rundll32.exe C:\\Users\\l.chen\\AppData\\Roaming\\msnet\\netcfg.dll,Entry",
		reason: "任务名模仿官方更新，动作指向用户目录 DLL。",
		evidence: [
			"作者: FINANCE\\l.chen，非 SYSTEM",
			"触发器: 登录 + 每 30 分钟",
			"动作非 googleupdate.exe"
		],
		engines: ["policy", "behavior"],
		sources: ["core"],
		tactics: ["T1053.005"],
		action: "backup-clear",
		actionHint: "导出任务 XML 后删除任务。"
	},
	{
		id: "rat-pol-ifeo",
		scenarioId: "rat",
		kind: "policy",
		severity: "medium",
		title: "IFEO 调试器劫持 taskmgr",
		subject: "IFEO\\taskmgr.exe",
		path: "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\taskmgr.exe",
		policyKey: "IFEO\\taskmgr.exe\\Debugger",
		policyValue: "C:\\Users\\Public\\Libraries\\svchost.exe",
		reason: "打开任务管理器会被重定向到恶意映像，用于对抗值守。",
		evidence: ["Debugger 值指向 Public Libraries", " magnifier / sethc 未被改"],
		engines: ["policy"],
		sources: ["core"],
		tactics: ["T1546.012"],
		action: "backup-clear",
		actionHint: "备份 IFEO 键后清除 Debugger。"
	},
	{
		id: "miner-proc-update",
		scenarioId: "miner",
		kind: "process",
		severity: "critical",
		title: "高占用伪更新进程",
		subject: "winupdate.exe",
		path: "C:\\Users\\j.park\\AppData\\Local\\WinUpdate\\winupdate.exe",
		pid: 3348,
		owner: "DEV\\j.park",
		parent: "winlogon.exe (612)",
		sha256: "0b77e2c1a94f0d6c8e31a5b2f9d0471c6e8a23b5d10c9e4f7a2b68c3d5e1904a",
		reason: "长时间 90%+ CPU，命令行包含矿池地址，映像不在官方更新目录。",
		evidence: [
			"CPU 持续 > 90%",
			"参数 --pool xmr.pool.xx:3333",
			"父进程异常为 winlogon"
		],
		engines: [
			"resident",
			"behavior",
			"cloud"
		],
		sources: ["core", "cloud"],
		tactics: ["T1496", "T1036"],
		action: "terminate",
		actionHint: "结束挖矿进程并阻断映像。"
	},
	{
		id: "miner-proc-watch",
		scenarioId: "miner",
		kind: "process",
		severity: "high",
		title: "矿工看门狗互拉",
		subject: "runtimebroker.exe",
		path: "C:\\Users\\j.park\\AppData\\Local\\WinUpdate\\runtimebroker.exe",
		pid: 4102,
		owner: "DEV\\j.park",
		parent: "winupdate.exe (3348)",
		reason: "名称冒充 Runtime Broker，实际监视矿工进程并在退出后重拉。",
		evidence: [
			"路径不在 System32",
			"打开互斥量 Global\\WU-Watch",
			"写 winupdate.exe 的重启循环"
		],
		engines: [
			"resident",
			"behavior",
			"rule"
		],
		sources: ["core", "yara"],
		tactics: ["T1543", "T1036.005"],
		action: "terminate",
		actionHint: "先结束看门狗，避免矿工被拉起。"
	},
	{
		id: "miner-file-cfg",
		scenarioId: "miner",
		kind: "file",
		severity: "high",
		title: "挖矿配置与钱包文件",
		subject: "cfg.json",
		path: "C:\\Users\\j.park\\AppData\\Local\\WinUpdate\\cfg.json",
		reason: "明文矿池与钱包，伴随主映像。",
		evidence: [
			"wallet 前缀 4…",
			"pool: xmr.pool.xx:3333",
			"同目录 winupdate.exe"
		],
		engines: ["rule", "behavior"],
		sources: ["yara", "core"],
		tactics: ["T1496"],
		action: "block",
		actionHint: "隔离配置，避免重启后自动连池。"
	},
	{
		id: "miner-file-lnk",
		scenarioId: "miner",
		kind: "file",
		severity: "high",
		title: "启动目录伪装快捷方式",
		subject: "Windows Update.lnk",
		path: "C:\\Users\\j.park\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\Windows Update.lnk",
		reason: "快捷方式指向用户目录伪更新程序。",
		evidence: ["目标: WinUpdate\\winupdate.exe", "图标取自 wuauclt"],
		engines: ["policy", "behavior"],
		sources: ["core"],
		tactics: ["T1547.001"],
		action: "block",
		actionHint: "隔离快捷方式，阻止登录拉起。"
	},
	{
		id: "miner-pol-task",
		scenarioId: "miner",
		kind: "policy",
		severity: "medium",
		title: "每小时唤醒计划任务",
		subject: "\\Microsoft\\Windows\\Wininet\\CacheMaintenance",
		path: "C:\\Windows\\System32\\Tasks\\Microsoft\\Windows\\Wininet\\CacheMaintenance",
		policyKey: "Task\\Wininet\\CacheMaintenance",
		policyValue: "C:\\Users\\j.park\\AppData\\Local\\WinUpdate\\runtimebroker.exe",
		reason: "系统任务名被占用，动作为矿工看门狗。",
		evidence: ["官方任务哈希不匹配", "动作路径在用户目录"],
		engines: ["policy"],
		sources: ["core", "openioc"],
		tactics: ["T1053.005"],
		action: "backup-clear",
		actionHint: "备份任务定义后删除。"
	},
	{
		id: "hijack-pol-hosts",
		scenarioId: "hijack",
		kind: "policy",
		severity: "critical",
		title: "hosts 劫持更新与登录域名",
		subject: "drivers\\etc\\hosts",
		path: "C:\\Windows\\System32\\drivers\\etc\\hosts",
		policyKey: "hosts",
		policyValue: "185.244.xx.xx login.microsoftonline.com\n185.244.xx.xx update.microsoft.com",
		reason: "将身份与更新域名指向外部地址，用于凭据与投递。",
		evidence: [
			"两条非 RFC1918 映射",
			"文件修改时间在非维护窗口",
			"无变更工单"
		],
		engines: ["policy", "cloud"],
		sources: [
			"core",
			"openioc",
			"cloud"
		],
		tactics: ["T1565.001", "T1556"],
		action: "backup-clear",
		actionHint: "备份 hosts 后恢复为系统默认。"
	},
	{
		id: "hijack-pol-wmi",
		scenarioId: "hijack",
		kind: "policy",
		severity: "critical",
		title: "WMI 事件订阅持久化",
		subject: "WindowsUpdateWatch",
		path: "ROOT\\subscription\\WindowsUpdateWatch",
		policyKey: "WMI\\WindowsUpdateWatch",
		policyValue: "CommandLineEventConsumer → powershell -enc JABjADIA...",
		reason: "永久事件订阅在系统启动时执行编码 PowerShell，不依赖启动文件夹。",
		evidence: [
			"Filter: __InstanceModificationEvent within 60",
			"Consumer 为编码 powershell",
			"Binding 名称模仿更新"
		],
		engines: ["policy", "rule"],
		sources: ["core", "yara"],
		tactics: ["T1546.003"],
		action: "backup-clear",
		actionHint: "导出订阅后删除 Filter / Consumer / Binding。"
	},
	{
		id: "hijack-pol-fw",
		scenarioId: "hijack",
		kind: "policy",
		severity: "high",
		title: "防火墙放行入站 4444",
		subject: "Allow-App-Sync",
		path: "Windows Firewall\\Allow-App-Sync",
		policyKey: "Firewall\\Allow-App-Sync",
		policyValue: "Inbound TCP 4444 Any → Any Allow",
		reason: "以同步软件名义放行远控默认端口。",
		evidence: [
			"规则启用",
			"远程地址 Any",
			"程序路径指向 Temp"
		],
		engines: ["policy", "behavior"],
		sources: ["core"],
		tactics: ["T1562.004"],
		action: "backup-clear",
		actionHint: "备份规则后删除。"
	},
	{
		id: "hijack-file-sys",
		scenarioId: "hijack",
		kind: "file",
		severity: "high",
		title: "临时目录未签名驱动",
		subject: "msdsk.sys",
		path: "C:\\Windows\\Temp\\msdsk.sys",
		sha256: "e21c90a5b6d84f7e1c3a9b20d5e8f041a7c6b39e2d14f80c5a9e17b4d6c208f1",
		reason: "内核映像落在 Temp，无签名，疑为隐藏连接的过滤驱动。",
		evidence: [
			"签名：无",
			"服务未正式注册但仍被加载",
			"YARA: suspected_rootkit_stub"
		],
		engines: [
			"rule",
			"hash",
			"behavior"
		],
		sources: ["yara", "core"],
		tactics: ["T1547.006", "T1014"],
		action: "block",
		actionHint: "隔离驱动文件并阻止加载。"
	},
	{
		id: "hijack-proc-lsass",
		scenarioId: "hijack",
		kind: "process",
		severity: "critical",
		title: "异常进程访问 LSASS",
		subject: "syncsvc.exe",
		path: "C:\\ProgramData\\AppSync\\syncsvc.exe",
		pid: 2188,
		owner: "CORP\\svc-sync",
		parent: "services.exe (668)",
		reason: "以服务身份打开 LSASS 内存，配合 hosts 劫持可导出凭据。",
		evidence: [
			"OpenProcess lsass.exe PROCESS_VM_READ",
			"服务名 AppSync 非库存",
			"无厂商签名"
		],
		engines: [
			"resident",
			"behavior",
			"cloud"
		],
		sources: ["core", "cloud"],
		tactics: ["T1003.001", "T1543.003"],
		action: "terminate",
		actionHint: "结束凭据访问进程并阻断服务映像。"
	},
	{
		id: "hijack-pol-safeboot",
		scenarioId: "hijack",
		kind: "policy",
		severity: "medium",
		title: "SafeBoot 最小启动被改写",
		subject: "SafeBoot\\Minimal\\AppSync",
		path: "HKLM\\SYSTEM\\CurrentControlSet\\Control\\SafeBoot\\Minimal\\AppSync",
		policyKey: "SafeBoot\\Minimal\\AppSync",
		policyValue: "Service",
		reason: "将恶意服务写入最小安全模式，对抗清理。",
		evidence: ["非微软服务出现在 Minimal", "对应 syncsvc.exe"],
		engines: ["policy"],
		sources: ["core"],
		tactics: ["T1547", "T1562"],
		action: "backup-clear",
		actionHint: "备份后删除 SafeBoot 项。"
	},
	{
		id: "clean-file-printer",
		scenarioId: "clean",
		kind: "file",
		severity: "low",
		title: "未签名打印助手（疑似误报）",
		subject: "printutil.exe",
		path: "C:\\Program Files\\ApexPrint\\printutil.exe",
		sha256: "aa19c3e0d4b75f28c1a6d90e3f4b2170c8d5e1a2b3c4d5e6f708192a3b4c5d6e",
		reason: "无签名且不在核心白名单。厂商为本地打印机工具，可人工放行。",
		evidence: [
			"产品名 Apex Print Utility",
			"无网络回连",
			"安装于 14 天前"
		],
		engines: ["hash", "behavior"],
		sources: ["core"],
		tactics: [],
		action: "block",
		actionHint: "可隔离，也可视为误报跳过。"
	},
	{
		id: "rat-hook-etw",
		scenarioId: "rat",
		kind: "hook",
		severity: "critical",
		title: "ntdll!EtwEventWrite 被 inline hook",
		subject: "EtwEventWrite",
		path: "svchost.exe(4820) · ntdll.dll!EtwEventWrite",
		pid: 4820,
		policyKey: "ntdll.dll!EtwEventWrite",
		policyValue: "E9 12 3F 14 00 90 90 90 90 90 → 0x7FF2A41000",
		reason: "远控对自身 ntdll 入口写 E9，ETW-TI 对该进程失明。跳板落在 explorer 无后备 RX 页，与 APC 注入同一 VAD。",
		evidence: [
			"入口不是 mov r11, rsp，而是 jmp rel32",
			"目标 0x7FF2A41000 无映像后备",
			"KnownDlls 节校验失败"
		],
		engines: [
			"hook",
			"resident",
			"behavior"
		],
		sources: ["core", "yara"],
		tactics: ["T1055", "T1562.006"],
		action: "unhook",
		actionHint: "备份当前入口字节后写回 KnownDlls 副本。"
	},
	{
		id: "rat-hook-iat",
		scenarioId: "rat",
		kind: "hook",
		severity: "high",
		title: "explorer IAT 劫持 CreateRemoteThread",
		subject: "CreateRemoteThread",
		path: "explorer.exe(2184) · kernel32.dll!CreateRemoteThread",
		pid: 2184,
		policyKey: "explorer IAT kernel32!CreateRemoteThread",
		policyValue: "00007FF2A41000",
		reason: "APC 投递后改写 explorer 导入表，后续远程线程创建都进同一 RX stub。",
		evidence: [
			"IAT 槽原值 kernel32+0x11B20",
			"现值指向 unbacked RX",
			"与 WRITEVM 边同一目的页"
		],
		engines: ["hook", "resident"],
		sources: ["core"],
		tactics: ["T1055.001", "T1574"],
		action: "unhook",
		actionHint: "把 IAT 槽写回 kernel32 导出。"
	},
	{
		id: "rat-hook-wh",
		scenarioId: "rat",
		kind: "hook",
		severity: "high",
		title: "WH_GETMESSAGE 钩住资源管理器",
		subject: "WH_GETMESSAGE",
		path: "explorer.exe(2184) · user32!SetWindowsHookExW",
		pid: 2184,
		policyKey: "WH_GETMESSAGE explorer",
		policyValue: "netcfg.dll!Entry",
		reason: "用户态窗口钩，用于消息窥探与保活。回调在远控 DLL。",
		evidence: [
			"HHOOK 链出现 netcfg.dll",
			"钩子在 rundll32 拉起后安装",
			"非辅助功能清单"
		],
		engines: ["hook", "behavior"],
		sources: ["core", "openioc"],
		tactics: ["T1056.004", "T1574"],
		action: "unhook",
		actionHint: "卸载该 WH_GETMESSAGE，阻断 DLL 回调。"
	},
	{
		id: "miner-hook-qsi",
		scenarioId: "miner",
		kind: "hook",
		severity: "critical",
		title: "NtQuerySystemInformation syscall stub 被改",
		subject: "NtQuerySystemInformation",
		path: "winupdate.exe(3348) · ntdll.dll!NtQuerySystemInformation",
		pid: 3348,
		policyKey: "ntdll.dll!NtQuerySystemInformation",
		policyValue: "FF 25 00 00 00 00 E2 00 00 00",
		reason: "矿工在本进程 ntdll 上做 inline hook，过滤 SystemProcessInformation，对任务管理器隐藏。",
		evidence: [
			"syscall stub 变成 jmp qword",
			"目标 RWX private 0xE20000",
			"返回列表不含 PID 3348 / 4102"
		],
		engines: [
			"hook",
			"resident",
			"behavior"
		],
		sources: ["core", "yara"],
		tactics: ["T1564.004", "T1055"],
		action: "unhook",
		actionHint: "从 KnownDlls 还原 stub，使进程重新可见。"
	},
	{
		id: "miner-hook-eat",
		scenarioId: "miner",
		kind: "hook",
		severity: "high",
		title: "NtDelayExecution 导出表被改写",
		subject: "NtDelayExecution",
		path: "winupdate.exe(3348) · ntdll.dll!NtDelayExecution",
		pid: 3348,
		policyKey: "ntdll EAT NtDelayExecution",
		policyValue: "00000000E20140",
		reason: "EAT RVA 指向 RWX stub，Sleep/Delay 被吞掉以提高哈希速率。",
		evidence: [
			"EAT 与磁盘映像不一致",
			"调用不再进入 syscall",
			"CPU 持续高占用"
		],
		engines: ["hook", "behavior"],
		sources: ["core"],
		tactics: ["T1574", "T1496"],
		action: "unhook",
		actionHint: "恢复 EAT RVA 到原始 stub。"
	},
	{
		id: "hijack-hook-iat",
		scenarioId: "hijack",
		kind: "hook",
		severity: "critical",
		title: "NtReadVirtualMemory IAT 绕到 LSASS 转储",
		subject: "NtReadVirtualMemory",
		path: "syncsvc.exe(2188) · ntdll.dll!NtReadVirtualMemory",
		pid: 2188,
		policyKey: "syncsvc IAT NtReadVirtualMemory",
		policyValue: "syncsvc+0x4A00 trampoline",
		reason: "服务进程导入表被改，读 LSASS 前先拷到 MINIDUMP 缓冲。",
		evidence: [
			"IAT 不指向 ntdll 正文",
			"随后 OpenProcess lsass VM_READ",
			"缓冲页可写出"
		],
		engines: [
			"hook",
			"resident",
			"behavior"
		],
		sources: ["core", "cloud"],
		tactics: ["T1003.001", "T1574"],
		action: "unhook",
		actionHint: "还原 IAT 并结束凭据访问链。"
	},
	{
		id: "hijack-hook-wh",
		scenarioId: "hijack",
		kind: "hook",
		severity: "high",
		title: "WH_KEYBOARD_LL 键盘记录",
		subject: "WH_KEYBOARD_LL",
		path: "syncsvc.exe(2188) · user32!SetWindowsHookExW",
		pid: 2188,
		policyKey: "WH_KEYBOARD_LL syncsvc",
		policyValue: "syncsvc.exe!KbProc",
		reason: "低级键盘钩装在同步服务里，配合 hosts 劫持可截域管口令。",
		evidence: [
			"全局 WH_KEYBOARD_LL",
			"回调不在已知 IME/辅助模块",
			"服务账户异常"
		],
		engines: ["hook", "behavior"],
		sources: ["core", "openioc"],
		tactics: ["T1056.001"],
		action: "unhook",
		actionHint: "卸载低级键盘钩。"
	},
	{
		id: "clean-hook-shell",
		scenarioId: "clean",
		kind: "hook",
		severity: "low",
		title: "打印助手安装 WH_SHELL（疑似误报）",
		subject: "WH_SHELL",
		path: "printutil.exe(5088) · user32!SetWindowsHookExW",
		pid: 5088,
		policyKey: "WH_SHELL printutil",
		policyValue: "printutil.exe!ShellHook",
		reason: "本地打印机工具用 WH_SHELL 跟踪窗口。无回连，可人工放行。",
		evidence: [
			"厂商 Apex Print Utility",
			"钩子范围限本会话",
			"安装于 14 天前"
		],
		engines: ["hook"],
		sources: ["core"],
		tactics: [],
		action: "unhook",
		actionHint: "可还原入口，也可视为误报跳过。"
	}
];
var DEFAULT_SOURCES = SOURCES.filter((s) => s.id !== "custom").map((s) => s.id);
var VOLUMES = [
	{
		id: "vol-c",
		disk: "Disk 0 NVMe",
		letter: "C:",
		fs: "NTFS",
		size: "476 GB",
		role: "system"
	},
	{
		id: "vol-d",
		disk: "Disk 0 NVMe",
		letter: "D:",
		fs: "NTFS",
		size: "512 GB",
		role: "data",
		findingId: "phys-vol-data"
	},
	{
		id: "vol-usb",
		disk: "Disk 1 USB",
		letter: "E:",
		fs: "exFAT",
		size: "32 GB",
		role: "removable",
		findingId: "phys-vol-usb"
	}
];
function volumeFindings(scenarioId) {
	if (scenarioId === "clean") return [];
	const usbHot = scenarioId === "rat" || scenarioId === "miner";
	const dataHot = scenarioId === "hijack" || scenarioId === "miner";
	const out = [];
	if (usbHot) out.push({
		id: "phys-vol-usb",
		scenarioId,
		kind: "volume",
		severity: "high",
		title: "可移动卷承载投递目录",
		subject: "E:",
		path: "E:\\payload\\",
		volumeId: "vol-usb",
		reason: "可移动磁盘上出现与驻留映像同哈希的投递目录，建议隔离该卷、阻断其上的执行。不会格式化磁盘。",
		evidence: [
			"Disk 1 USB · exFAT",
			"目录 payload 含 svchost.exe / winupdate.exe",
			"非域内授权介质"
		],
		engines: [
			"resident",
			"hash",
			"behavior"
		],
		sources: ["core", "cloud"],
		tactics: ["T1091", "T1055"],
		action: "isolate-volume",
		actionHint: "隔离 E: 卷，禁止从该卷创建进程。"
	});
	if (dataHot) out.push({
		id: "phys-vol-data",
		scenarioId,
		kind: "volume",
		severity: "medium",
		title: "数据卷存在异常可执行页文件",
		subject: "D:",
		path: "D:\\AppSync\\syncsvc.exe",
		volumeId: "vol-d",
		reason: "数据分区存放服务映像，不在标准 Program Files。可隔离后迁回或删除。不会格式化磁盘。",
		evidence: [
			"Disk 0 分区 D:",
			"映像无签名",
			"与会话进程路径一致"
		],
		engines: ["policy", "behavior"],
		sources: ["core"],
		tactics: ["T1036"],
		action: "isolate-volume",
		actionHint: "隔离 D: 数据卷上的执行，保留只读取证。"
	});
	return out;
}
function volumeActionFinding(scenarioId, volumeId) {
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
		actionHint: `隔离 ${letter}，禁止从该卷创建进程。`
	};
}
var LAB_BASE = [{
	id: "p-csrss",
	pid: 456,
	name: "csrss.exe",
	path: "C:\\Windows\\System32\\csrss.exe",
	parentPid: 368,
	user: "NT AUTHORITY\\SYSTEM",
	cpu: .2,
	mem: "18 MB",
	volumeId: "vol-c",
	benign: true,
	protectedProc: true
}, {
	id: "p-services",
	pid: 668,
	name: "services.exe",
	path: "C:\\Windows\\System32\\services.exe",
	parentPid: 520,
	user: "NT AUTHORITY\\SYSTEM",
	cpu: .1,
	mem: "12 MB",
	volumeId: "vol-c",
	benign: true,
	protectedProc: true
}];
var PHYSICAL_BASE = [
	{
		id: "p-system",
		pid: 4,
		name: "System",
		path: "System",
		parentPid: 0,
		user: "NT AUTHORITY\\SYSTEM",
		cpu: .1,
		mem: "0.2 MB",
		volumeId: "vol-c",
		benign: true,
		protectedProc: true,
		physicalOnly: true
	},
	{
		id: "p-smss",
		pid: 368,
		name: "smss.exe",
		path: "C:\\Windows\\System32\\smss.exe",
		parentPid: 4,
		user: "NT AUTHORITY\\SYSTEM",
		cpu: 0,
		mem: "1.1 MB",
		volumeId: "vol-c",
		benign: true,
		protectedProc: true,
		physicalOnly: true
	},
	{
		id: "p-csrss",
		pid: 456,
		name: "csrss.exe",
		path: "C:\\Windows\\System32\\csrss.exe",
		parentPid: 368,
		user: "NT AUTHORITY\\SYSTEM",
		cpu: .2,
		mem: "18 MB",
		volumeId: "vol-c",
		benign: true,
		protectedProc: true
	},
	{
		id: "p-wininit",
		pid: 520,
		name: "wininit.exe",
		path: "C:\\Windows\\System32\\wininit.exe",
		parentPid: 368,
		user: "NT AUTHORITY\\SYSTEM",
		cpu: 0,
		mem: "6.4 MB",
		volumeId: "vol-c",
		benign: true,
		protectedProc: true,
		physicalOnly: true
	},
	{
		id: "p-services",
		pid: 668,
		name: "services.exe",
		path: "C:\\Windows\\System32\\services.exe",
		parentPid: 520,
		user: "NT AUTHORITY\\SYSTEM",
		cpu: .1,
		mem: "12 MB",
		volumeId: "vol-c",
		benign: true,
		protectedProc: true
	},
	{
		id: "p-lsass",
		pid: 752,
		name: "lsass.exe",
		path: "C:\\Windows\\System32\\lsass.exe",
		parentPid: 520,
		user: "NT AUTHORITY\\SYSTEM",
		cpu: .4,
		mem: "28 MB",
		volumeId: "vol-c",
		graphNodeId: "proc-lsass",
		benign: true
	},
	{
		id: "p-svchost-sys",
		pid: 1008,
		name: "svchost.exe",
		path: "C:\\Windows\\System32\\svchost.exe",
		parentPid: 668,
		user: "NT AUTHORITY\\SYSTEM",
		cpu: .3,
		mem: "22 MB",
		volumeId: "vol-c",
		benign: true,
		physicalOnly: true
	},
	{
		id: "p-onedrive",
		pid: 3300,
		name: "OneDrive.exe",
		path: "C:\\Users\\user\\AppData\\Local\\Microsoft\\OneDrive\\OneDrive.exe",
		parentPid: 2184,
		user: "interactive",
		cpu: .2,
		mem: "64 MB",
		volumeId: "vol-c",
		benign: true,
		physicalOnly: true
	}
];
var SCENARIO_PROCS = {
	rat: [
		{
			id: "p-explorer",
			pid: 2184,
			name: "explorer.exe",
			path: "C:\\Windows\\explorer.exe",
			parentPid: 1008,
			user: "FINANCE\\l.chen",
			cpu: .6,
			mem: "48 MB",
			volumeId: "vol-c",
			graphNodeId: "proc-explorer",
			benign: true
		},
		{
			id: "p-svchost-fake",
			pid: 4820,
			name: "svchost.exe",
			path: "C:\\Users\\Public\\Libraries\\svchost.exe",
			parentPid: 2184,
			user: "FINANCE\\l.chen",
			cpu: 2.4,
			mem: "31 MB",
			volumeId: "vol-c",
			findingId: "rat-proc-svchost",
			graphNodeId: "proc-svchost"
		},
		{
			id: "p-rundll",
			pid: 6912,
			name: "rundll32.exe",
			path: "C:\\Windows\\System32\\rundll32.exe",
			parentPid: 4820,
			user: "FINANCE\\l.chen",
			cpu: .8,
			mem: "14 MB",
			volumeId: "vol-c",
			findingId: "rat-proc-rundll",
			graphNodeId: "proc-rundll"
		},
		{
			id: "p-usb-payload",
			pid: 7044,
			name: "svchost.exe",
			path: "E:\\payload\\svchost.exe",
			parentPid: 2184,
			user: "FINANCE\\l.chen",
			cpu: 1.1,
			mem: "9 MB",
			volumeId: "vol-usb",
			findingId: "phys-vol-usb",
			physicalOnly: true
		}
	],
	miner: [
		{
			id: "p-winlogon",
			pid: 612,
			name: "winlogon.exe",
			path: "C:\\Windows\\System32\\winlogon.exe",
			parentPid: 520,
			user: "NT AUTHORITY\\SYSTEM",
			cpu: .1,
			mem: "8 MB",
			volumeId: "vol-c",
			benign: true,
			protectedProc: true
		},
		{
			id: "p-wu",
			pid: 3348,
			name: "winupdate.exe",
			path: "C:\\Users\\j.park\\AppData\\Local\\WinUpdate\\winupdate.exe",
			parentPid: 612,
			user: "DEV\\j.park",
			cpu: 92.4,
			mem: "210 MB",
			volumeId: "vol-c",
			findingId: "miner-proc-update",
			graphNodeId: "proc-winupdate"
		},
		{
			id: "p-watch",
			pid: 4102,
			name: "runtimebroker.exe",
			path: "C:\\Users\\j.park\\AppData\\Local\\WinUpdate\\runtimebroker.exe",
			parentPid: 3348,
			user: "DEV\\j.park",
			cpu: 1.8,
			mem: "22 MB",
			volumeId: "vol-c",
			findingId: "miner-proc-watch",
			graphNodeId: "proc-watch"
		},
		{
			id: "p-usb-miner",
			pid: 5510,
			name: "winupdate.exe",
			path: "E:\\payload\\winupdate.exe",
			parentPid: 2184,
			user: "DEV\\j.park",
			cpu: 11.2,
			mem: "40 MB",
			volumeId: "vol-usb",
			findingId: "phys-vol-usb",
			physicalOnly: true
		}
	],
	hijack: [
		{
			id: "p-sync",
			pid: 2188,
			name: "syncsvc.exe",
			path: "C:\\ProgramData\\AppSync\\syncsvc.exe",
			parentPid: 668,
			user: "CORP\\svc-sync",
			cpu: 3.2,
			mem: "44 MB",
			volumeId: "vol-c",
			findingId: "hijack-proc-lsass",
			graphNodeId: "proc-sync"
		},
		{
			id: "p-lsass-h",
			pid: 752,
			name: "lsass.exe",
			path: "C:\\Windows\\System32\\lsass.exe",
			parentPid: 520,
			user: "NT AUTHORITY\\SYSTEM",
			cpu: 1.1,
			mem: "36 MB",
			volumeId: "vol-c",
			graphNodeId: "proc-lsass",
			benign: true
		},
		{
			id: "p-dsync",
			pid: 8802,
			name: "syncsvc.exe",
			path: "D:\\AppSync\\syncsvc.exe",
			parentPid: 668,
			user: "CORP\\svc-sync",
			cpu: .7,
			mem: "16 MB",
			volumeId: "vol-d",
			findingId: "phys-vol-data",
			physicalOnly: true
		}
	],
	clean: [{
		id: "p-it-ex",
		pid: 2104,
		name: "explorer.exe",
		path: "C:\\Windows\\explorer.exe",
		parentPid: 1008,
		user: "IT\\admin",
		cpu: .4,
		mem: "41 MB",
		volumeId: "vol-c",
		graphNodeId: "proc-it-explorer",
		benign: true
	}, {
		id: "p-print",
		pid: 5088,
		name: "printutil.exe",
		path: "C:\\Program Files\\ApexPrint\\printutil.exe",
		parentPid: 2104,
		user: "IT\\admin",
		cpu: .1,
		mem: "9 MB",
		volumeId: "vol-c",
		findingId: "clean-file-printer",
		graphNodeId: "proc-print",
		benign: true
	}]
};
function procsFor(scenarioId, hostMode) {
	const base = hostMode === "physical" ? PHYSICAL_BASE : LAB_BASE;
	const extra = SCENARIO_PROCS[scenarioId];
	const merged = [...base, ...extra];
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const p of merged) {
		if (p.physicalOnly && hostMode !== "physical") continue;
		if (seen.has(p.pid)) continue;
		seen.add(p.pid);
		out.push(p);
	}
	return out.sort((a, b) => a.pid - b.pid);
}
function seedProcState(scenarioId, hostMode) {
	return procsFor(scenarioId, hostMode).map((p) => ({
		pid: p.pid,
		status: "running"
	}));
}
function procActionFinding(proc, scenarioId) {
	if (proc.findingId && !proc.findingId.startsWith("phys-vol-")) return {
		id: proc.findingId,
		scenarioId,
		kind: "process",
		severity: proc.benign ? "low" : "high",
		title: proc.name,
		subject: proc.name,
		path: proc.path,
		pid: proc.pid,
		owner: proc.user,
		reason: "",
		evidence: [],
		engines: ["resident"],
		sources: ["core"],
		tactics: [],
		action: "terminate",
		actionHint: "结束该进程。"
	};
	return {
		id: `proc-act-${proc.pid}`,
		scenarioId,
		kind: "process",
		severity: proc.benign ? "low" : "high",
		title: `结束 ${proc.name}`,
		subject: proc.name,
		path: proc.path,
		pid: proc.pid,
		owner: proc.user,
		reason: proc.benign ? "从会话进程表手动结束。浏览器只能改本控制台的进程表，不能向内核发出 NtTerminateProcess。" : "会话表中的可疑进程，结束并阻断该映像再次执行。",
		evidence: [
			`PID ${proc.pid}`,
			proc.path,
			`父进程 ${proc.parentPid}`
		],
		engines: ["resident"],
		sources: ["core"],
		tactics: proc.benign ? [] : ["T1055"],
		action: "terminate",
		actionHint: "从会话进程表结束该 PID。"
	};
}
function findingVisible(finding, engines, sources, customRule) {
	const engineHit = finding.engines.some((e) => engines.includes(e));
	const sourceHit = finding.sources.some((s) => sources.includes(s));
	const customHit = sources.includes("custom") && customRule.trim().length > 0 && finding.path.toLowerCase().includes(customRule.trim().toLowerCase());
	return engineHit && (sourceHit || customHit);
}
function newId(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
var defaultEngines = ENGINES.map((e) => e.id);
function catalogFindings(state) {
	const vol = state.hostMode === "physical" ? volumeFindings(state.scenarioId) : [];
	return [
		...FINDINGS,
		...vol,
		...state.extraFindings
	];
}
function upsertFinding(state, finding) {
	if (catalogFindings(state).some((f) => f.id === finding.id)) return state.extraFindings;
	return [...state.extraFindings, finding];
}
var useIRStore = create((set, get) => ({
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
		set({
			hostMode: mode,
			procs: seedProcState(get().scenarioId, mode)
		});
	},
	setScenario: (id) => {
		get().resetLab();
		set({
			scenarioId: id,
			procs: seedProcState(id, get().hostMode)
		});
	},
	toggleEngine: (id) => {
		if (get().scanStatus === "scanning" || get().scanStatus === "executing") return;
		const cur = get().enabledEngines;
		set({ enabledEngines: cur.includes(id) ? cur.filter((e) => e !== id) : [...cur, id] });
	},
	toggleSource: (id) => {
		if (get().scanStatus === "scanning" || get().scanStatus === "executing") return;
		const cur = get().enabledSources;
		set({ enabledSources: cur.includes(id) ? cur.filter((s) => s !== id) : [...cur, id] });
	},
	setCustomRule: (rule) => set({ customRule: rule }),
	setTab: (tab) => set({ tab }),
	setProgress: (n) => set({ progress: n }),
	setPhase: (p) => set({ phase: p }),
	setScanStatus: (s) => set({ scanStatus: s }),
	appendLog: (line) => set({ logs: [...get().logs, {
		id: line.id ?? newId("log"),
		at: Date.now(),
		text: line.text,
		tone: line.tone
	}].slice(-80) }),
	revealFinding: (id) => {
		const revealed = get().revealedIds;
		if (revealed.includes(id)) return;
		const finding = catalogFindings(get()).find((f) => f.id === id);
		const autoSelect = finding && (finding.severity === "critical" || finding.severity === "high");
		set({
			revealedIds: [...revealed, id],
			selectedIds: autoSelect ? [.../* @__PURE__ */ new Set([...get().selectedIds, id])] : get().selectedIds
		});
	},
	revealEdge: (id) => {
		const revealed = get().revealedEdgeIds;
		if (revealed.includes(id)) {
			set({ selectedEdgeId: id });
			return;
		}
		set({
			revealedEdgeIds: [...revealed, id],
			selectedEdgeId: id
		});
	},
	toggleSelected: (id) => {
		const cur = get().selectedIds;
		set({ selectedIds: cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id] });
	},
	selectAllVisible: () => set({ selectedIds: [...get().revealedIds] }),
	clearSelected: () => set({ selectedIds: [] }),
	setExpanded: (id) => set({ expandedId: id }),
	setSelectedNode: (id) => set({ selectedNodeId: id }),
	setSelectedEdge: (id) => set({ selectedEdgeId: id }),
	setExtraFindings: (rows) => set({ extraFindings: rows }),
	setLocalMount: (m) => set({ localMount: m }),
	beginScan: () => set({
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
		planned: []
	}),
	stopScan: () => set({
		scanStatus: get().revealedIds.length ? "complete" : "idle",
		phase: get().revealedIds.length ? "done" : "idle"
	}),
	resetLab: () => set({
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
		attacking: false
	}),
	queueFromSelection: () => {
		const { selectedIds, revealedIds } = get();
		const catalog = catalogFindings(get());
		set({
			planned: selectedIds.filter((id) => revealedIds.includes(id) || catalog.some((f) => f.id === id)).map((findingId) => {
				return {
					findingId,
					action: catalog.find((x) => x.id === findingId)?.action ?? "block",
					status: "queued"
				};
			}),
			tab: "queue"
		});
	},
	planFinding: (finding) => {
		set({
			extraFindings: upsertFinding(get(), finding),
			revealedIds: get().revealedIds.includes(finding.id) ? get().revealedIds : [...get().revealedIds, finding.id],
			selectedIds: get().selectedIds.includes(finding.id) ? get().selectedIds : [...get().selectedIds, finding.id]
		});
		get().queueFromSelection();
	},
	planKill: (proc) => {
		const finding = catalogFindings(get()).find((f) => f.kind === "process" && f.pid === proc.pid) ?? procActionFinding(proc, get().scenarioId);
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
			volumes: get().volumes.map((v) => v.id === volumeId ? {
				...v,
				status: "online"
			} : v),
			quarantine: get().quarantine.filter((q) => {
				const f = catalog.find((x) => x.id === q.findingId);
				return !(q.action === "isolate-volume" && f?.volumeId === volumeId);
			}),
			planned: get().planned.map((p) => {
				return catalog.find((x) => x.id === p.findingId)?.volumeId === volumeId && p.action === "isolate-volume" ? {
					...p,
					status: "rolled-back"
				} : p;
			})
		});
	},
	setActionStatus: (findingId, status) => set({ planned: get().planned.map((p) => p.findingId === findingId ? {
		...p,
		status
	} : p) }),
	applyExecuted: (findingId, action) => {
		const finding = catalogFindings(get()).find((f) => f.id === findingId);
		if (!finding) return;
		const next = {};
		if (action === "backup-clear" || action === "unhook") next.backups = [{
			id: newId("bak"),
			findingId,
			title: finding.title,
			key: finding.policyKey ?? finding.path,
			value: finding.policyValue ?? "",
			createdAt: Date.now(),
			restored: false
		}, ...get().backups];
		if (action === "unhook") next.hooks = [...get().hooks.filter((h) => h.id !== findingId), {
			id: findingId,
			status: "restored"
		}];
		if (action === "isolate-volume" && finding.volumeId) next.volumes = [...get().volumes.filter((v) => v.id !== finding.volumeId), {
			id: finding.volumeId,
			status: "isolated"
		}];
		if (action === "terminate" && finding.pid != null) next.procs = [...get().procs.filter((p) => p.pid !== finding.pid), {
			pid: finding.pid,
			status: "terminated"
		}];
		next.quarantine = [{
			id: newId("q"),
			findingId,
			kind: finding.kind,
			title: finding.title,
			path: finding.path,
			action,
			at: Date.now(),
			local: finding.local
		}, ...get().quarantine];
		set(next);
	},
	restoreBackup: (backupId) => {
		const backups = get().backups.map((b) => b.id === backupId ? {
			...b,
			restored: true
		} : b);
		const target = get().backups.find((b) => b.id === backupId);
		const finding = target ? catalogFindings(get()).find((f) => f.id === target.findingId) : void 0;
		set({
			backups,
			hooks: finding?.kind === "hook" ? [...get().hooks.filter((h) => h.id !== finding.id), {
				id: finding.id,
				status: "hooked"
			}] : get().hooks,
			planned: get().planned.map((p) => target && p.findingId === target.findingId ? {
				...p,
				status: "rolled-back"
			} : p),
			quarantine: get().quarantine.filter((q) => q.findingId !== target?.findingId)
		});
	},
	beginAttack: () => set({
		attacking: true,
		attackLog: []
	}),
	pushAttack: (beat) => set({ attackLog: [...get().attackLog, {
		...beat,
		id: newId("atk")
	}] }),
	endAttack: () => set({ attacking: false }),
	tickWatchdog: () => set({ watchdogPulse: (get().watchdogPulse + 1) % 1e5 })
}));
function visibleFindingsOf(state) {
	return catalogFindings(state).filter((f) => f.scenarioId === state.scenarioId && findingVisible(f, state.enabledEngines, state.enabledSources, state.customRule));
}
function lookupFinding(id) {
	return catalogFindings(useIRStore.getState()).find((f) => f.id === id);
}
var GRAPH_NODES = [
	{
		id: "proc-svchost",
		kind: "process",
		label: "svchost.exe",
		sub: "PID 4820",
		pid: 4820,
		lane: 0,
		order: 0,
		findingId: "rat-proc-svchost",
		unbacked: true,
		image: "C:\\Users\\Public\\Libraries\\svchost.exe"
	},
	{
		id: "mem-explorer-rx",
		kind: "memory",
		label: "unbacked RX",
		sub: "explorer VAD",
		lane: 1,
		order: 0,
		findingId: "rat-proc-svchost",
		unbacked: true,
		protect: "RX",
		vadSize: "96 KB",
		vadType: "private",
		image: "0x7FF2A41000"
	},
	{
		id: "proc-explorer",
		kind: "process",
		label: "explorer.exe",
		sub: "PID 2184",
		pid: 2184,
		lane: 2,
		order: 0,
		benign: true,
		image: "C:\\Windows\\explorer.exe"
	},
	{
		id: "proc-rundll",
		kind: "process",
		label: "rundll32.exe",
		sub: "PID 6912",
		pid: 6912,
		lane: 2,
		order: 1,
		findingId: "rat-proc-rundll",
		image: "C:\\Windows\\System32\\rundll32.exe"
	},
	{
		id: "proc-winupdate",
		kind: "process",
		label: "winupdate.exe",
		sub: "PID 3348",
		pid: 3348,
		lane: 0,
		order: 0,
		findingId: "miner-proc-update",
		unbacked: true,
		image: "C:\\Users\\j.park\\AppData\\Local\\WinUpdate\\winupdate.exe"
	},
	{
		id: "mem-wu-rwx",
		kind: "memory",
		label: "RWX private",
		sub: "cfg stub",
		lane: 1,
		order: 0,
		findingId: "miner-proc-update",
		unbacked: true,
		protect: "RWX",
		vadSize: "256 KB",
		vadType: "private",
		image: "0x000000E20000"
	},
	{
		id: "proc-watch",
		kind: "process",
		label: "runtimebroker.exe",
		sub: "PID 4102",
		pid: 4102,
		lane: 2,
		order: 0,
		findingId: "miner-proc-watch",
		unbacked: true,
		image: "C:\\Users\\j.park\\AppData\\Local\\WinUpdate\\runtimebroker.exe"
	},
	{
		id: "proc-sync",
		kind: "process",
		label: "syncsvc.exe",
		sub: "PID 2188",
		pid: 2188,
		lane: 0,
		order: 0,
		findingId: "hijack-proc-lsass",
		unbacked: true,
		image: "C:\\ProgramData\\AppSync\\syncsvc.exe"
	},
	{
		id: "mem-lsass",
		kind: "memory",
		label: "lsass VM_READ",
		sub: "MINIDUMP",
		lane: 1,
		order: 0,
		findingId: "hijack-proc-lsass",
		protect: "RW",
		vadSize: "2.1 MB",
		vadType: "private",
		image: "0x000001A4C000"
	},
	{
		id: "proc-lsass",
		kind: "process",
		label: "lsass.exe",
		sub: "PID 752",
		pid: 752,
		lane: 2,
		order: 0,
		benign: true,
		image: "C:\\Windows\\System32\\lsass.exe"
	},
	{
		id: "proc-it-explorer",
		kind: "process",
		label: "explorer.exe",
		sub: "PID 2104",
		pid: 2104,
		lane: 0,
		order: 0,
		benign: true,
		image: "C:\\Windows\\explorer.exe"
	},
	{
		id: "proc-print",
		kind: "process",
		label: "printutil.exe",
		sub: "PID 5088",
		pid: 5088,
		lane: 2,
		order: 0,
		findingId: "clean-file-printer",
		benign: true,
		image: "C:\\Program Files\\ApexPrint\\printutil.exe"
	}
];
var GRAPH_EDGES = [
	{
		id: "rat-e1",
		scenarioId: "rat",
		from: "proc-explorer",
		to: "proc-svchost",
		kind: "parent",
		label: "父进程",
		etw: "PROCESS_CREATE",
		sysmon: "1",
		detail: "explorer.exe 拉起用户目录 svchost.exe",
		findingId: "rat-proc-svchost",
		seq: 1
	},
	{
		id: "rat-e2",
		scenarioId: "rat",
		from: "proc-svchost",
		to: "mem-explorer-rx",
		kind: "writevm",
		label: "WRITEVM",
		etw: "THREATINT_WRITEVM_REMOTE",
		sysmon: "10",
		detail: "NtWriteVirtualMemory explorer 0x7FF2A41000 96KB",
		findingId: "rat-proc-svchost",
		seq: 2
	},
	{
		id: "rat-e3",
		scenarioId: "rat",
		from: "proc-svchost",
		to: "proc-explorer",
		kind: "apc",
		label: "APC",
		etw: "THREATINT_QUEUEAPC_REMOTE",
		sysmon: "10",
		detail: "NtQueueApcThread explorer TID 2201 → RX stub",
		findingId: "rat-proc-svchost",
		seq: 3
	},
	{
		id: "rat-e4",
		scenarioId: "rat",
		from: "proc-svchost",
		to: "proc-rundll",
		kind: "parent",
		label: "拉起",
		etw: "PROCESS_CREATE",
		sysmon: "1",
		detail: "rundll32 netcfg.dll,Entry",
		findingId: "rat-proc-rundll",
		seq: 4
	},
	{
		id: "rat-e5",
		scenarioId: "rat",
		from: "proc-svchost",
		to: "proc-rundll",
		kind: "mapview",
		label: "MAPVIEW",
		etw: "THREATINT_MAPVIEW_REMOTE",
		sysmon: "25",
		detail: "NtMapViewOfSection PAGE_EXECUTE_READ",
		findingId: "rat-proc-rundll",
		seq: 5
	},
	{
		id: "min-e1",
		scenarioId: "miner",
		from: "proc-winupdate",
		to: "mem-wu-rwx",
		kind: "writevm",
		label: "ALLOCVM",
		etw: "THREATINT_ALLOCVM_LOCAL",
		sysmon: "25",
		detail: "NtAllocateVirtualMemory RWX 256KB Private",
		findingId: "miner-proc-update",
		seq: 1
	},
	{
		id: "min-e2",
		scenarioId: "miner",
		from: "proc-winupdate",
		to: "mem-wu-rwx",
		kind: "writevm",
		label: "WRITEVM",
		etw: "THREATINT_PROTECTVM_LOCAL",
		sysmon: "25",
		detail: "Protect → PAGE_EXECUTE_READWRITE",
		findingId: "miner-proc-update",
		seq: 2
	},
	{
		id: "min-e3",
		scenarioId: "miner",
		from: "proc-winupdate",
		to: "proc-watch",
		kind: "remote-thread",
		label: "CRT",
		etw: "THREATINT_RESUME_THREAD",
		sysmon: "8",
		detail: "CreateRemoteThread runtimebroker StartAddress unbacked",
		findingId: "miner-proc-watch",
		seq: 3
	},
	{
		id: "min-e4",
		scenarioId: "miner",
		from: "proc-watch",
		to: "proc-winupdate",
		kind: "apc",
		label: "互拉 APC",
		etw: "THREATINT_QUEUEAPC_REMOTE",
		sysmon: "10",
		detail: "看门狗对矿工排队 APC，退出即重拉",
		findingId: "miner-proc-watch",
		seq: 4
	},
	{
		id: "hij-e1",
		scenarioId: "hijack",
		from: "proc-sync",
		to: "proc-lsass",
		kind: "hollow",
		label: "OpenProcess",
		etw: "OB_OPEN_PROCESS",
		sysmon: "10",
		detail: "PROCESS_VM_READ | QUERY_INFORMATION",
		findingId: "hijack-proc-lsass",
		seq: 1
	},
	{
		id: "hij-e2",
		scenarioId: "hijack",
		from: "proc-sync",
		to: "mem-lsass",
		kind: "writevm",
		label: "WRITEVM",
		etw: "THREATINT_WRITEVM_REMOTE",
		sysmon: "10",
		detail: "ReadProcessMemory lsass → MINIDUMP 2.1MB",
		findingId: "hijack-proc-lsass",
		seq: 2
	},
	{
		id: "hij-e3",
		scenarioId: "hijack",
		from: "proc-sync",
		to: "proc-lsass",
		kind: "setctx",
		label: "PROTECTVM",
		etw: "THREATINT_PROTECTVM_REMOTE",
		sysmon: "25",
		detail: "NtProtectVirtualMemory lsass PAGE_READWRITE",
		findingId: "hijack-proc-lsass",
		seq: 3
	},
	{
		id: "cln-e1",
		scenarioId: "clean",
		from: "proc-it-explorer",
		to: "proc-print",
		kind: "parent",
		label: "父进程",
		etw: "PROCESS_CREATE",
		sysmon: "1",
		detail: "用户会话拉起打印助手",
		seq: 0
	}
];
var NODES_BY_SCENARIO = {
	rat: [
		"proc-svchost",
		"mem-explorer-rx",
		"proc-explorer",
		"proc-rundll"
	],
	miner: [
		"proc-winupdate",
		"mem-wu-rwx",
		"proc-watch"
	],
	hijack: [
		"proc-sync",
		"mem-lsass",
		"proc-lsass"
	],
	clean: ["proc-it-explorer", "proc-print"]
};
function nodesFor(scenarioId) {
	const ids = new Set(NODES_BY_SCENARIO[scenarioId]);
	return GRAPH_NODES.filter((n) => ids.has(n.id));
}
function edgesFor(scenarioId) {
	return GRAPH_EDGES.filter((e) => e.scenarioId === scenarioId).sort((a, b) => a.seq - b.seq);
}
var INJECT_LABEL = {
	parent: "进程树",
	apc: "APC 注入",
	"remote-thread": "远程线程",
	writevm: "远程写",
	mapview: "映射注入",
	setctx: "改保护/上下文",
	hollow: "打开句柄"
};
var PROTECT_LABEL = {
	RW: "PAGE_READWRITE",
	RX: "PAGE_EXECUTE_READ",
	RWX: "PAGE_EXECUTE_READWRITE"
};
var VAD_TYPE_LABEL = {
	private: "MEM_PRIVATE",
	mapped: "MEM_MAPPED",
	image: "MEM_IMAGE"
};
function nodeCaption(id) {
	const n = GRAPH_NODES.find((x) => x.id === id);
	if (!n) return id;
	return n.pid ? `${n.label}(${n.pid})` : n.label;
}
var HOOK_KIND_LABEL = {
	iat: "IAT",
	eat: "EAT",
	inline: "Inline",
	trampoline: "Trampoline",
	winhook: "WH_HOOK"
};
var HOOKS = [
	{
		id: "rat-hook-etw",
		scenarioId: "rat",
		kind: "inline",
		module: "ntdll.dll",
		fn: "EtwEventWrite",
		process: "svchost.exe",
		pid: 4820,
		original: "4C 8B DC 48 81 EC 88 00 00 00",
		patched: "E9 12 3F 14 00 90 90 90 90 90",
		disasmOrig: "mov r11, rsp / sub rsp, 88h",
		disasmHook: "jmp 0x7FF2A41000",
		dest: "0x7FF2A41000",
		destHint: "explorer unbacked RX",
		destNodeId: "mem-explorer-rx",
		method: "入口 16 字节 vs KnownDlls",
		seq: 1
	},
	{
		id: "rat-hook-iat",
		scenarioId: "rat",
		kind: "iat",
		module: "kernel32.dll",
		fn: "CreateRemoteThread",
		process: "explorer.exe",
		pid: 2184,
		original: "00007FF8F2A11B20",
		patched: "00007FF2A41000",
		disasmOrig: "IAT → kernel32.CreateRemoteThread",
		disasmHook: "IAT → unbacked RX stub",
		dest: "0x7FF2A41000",
		destHint: "APC 投递的 RX 页",
		destNodeId: "mem-explorer-rx",
		method: "IMAGE_IMPORT_DESCRIPTOR 走表",
		seq: 2
	},
	{
		id: "rat-hook-wh",
		scenarioId: "rat",
		kind: "winhook",
		module: "user32.dll",
		fn: "SetWindowsHookExW WH_GETMESSAGE",
		process: "explorer.exe",
		pid: 2184,
		original: "—",
		patched: "netcfg.dll!Entry",
		disasmOrig: "无 WH_GETMESSAGE 过滤",
		disasmHook: "hook proc @ netcfg.dll+0x1C40",
		dest: "C:\\Users\\l.chen\\AppData\\Roaming\\msnet\\netcfg.dll",
		destHint: "rundll32 加载的导出",
		destNodeId: "proc-rundll",
		method: "WH_* 链 / SetWindowsHookEx",
		seq: 3
	},
	{
		id: "miner-hook-qsi",
		scenarioId: "miner",
		kind: "inline",
		module: "ntdll.dll",
		fn: "NtQuerySystemInformation",
		process: "winupdate.exe",
		pid: 3348,
		original: "4C 8B D1 B8 36 00 00 00 0F 05",
		patched: "FF 25 00 00 00 00 E2 00 00 00",
		disasmOrig: "mov r10, rcx / mov eax, 36h / syscall",
		disasmHook: "jmp qword [0xE20000]",
		dest: "0x000000E20000",
		destHint: "RWX private cfg stub",
		destNodeId: "mem-wu-rwx",
		method: "syscall stub vs KnownDlls",
		seq: 1
	},
	{
		id: "miner-hook-eat",
		scenarioId: "miner",
		kind: "eat",
		module: "ntdll.dll",
		fn: "NtDelayExecution",
		process: "winupdate.exe",
		pid: 3348,
		original: "00007FF8F1C04A90",
		patched: "00000000E20140",
		disasmOrig: "EAT RVA → syscall stub",
		disasmHook: "EAT RVA 改写到 RWX stub",
		dest: "0x000000E20140",
		destHint: "跳过睡眠，抬高哈希速率",
		destNodeId: "mem-wu-rwx",
		method: "导出表 RVA 校验",
		seq: 2
	},
	{
		id: "hijack-hook-iat",
		scenarioId: "hijack",
		kind: "iat",
		module: "ntdll.dll",
		fn: "NtReadVirtualMemory",
		process: "syncsvc.exe",
		pid: 2188,
		original: "00007FF8F1C12C40",
		patched: "00007FF8F1C12C40 + detour",
		disasmOrig: "IAT → ntdll syscall",
		disasmHook: "IAT 指向本地 trampoline 后再读 LSASS",
		dest: "syncsvc+0x4A00",
		destHint: "MINIDUMP 缓冲",
		destNodeId: "mem-lsass",
		method: "IAT 走表 + 句柄权限",
		seq: 1
	},
	{
		id: "hijack-hook-wh",
		scenarioId: "hijack",
		kind: "winhook",
		module: "user32.dll",
		fn: "SetWindowsHookExW WH_KEYBOARD_LL",
		process: "syncsvc.exe",
		pid: 2188,
		original: "—",
		patched: "syncsvc.exe!KbProc",
		disasmOrig: "无低级键盘钩",
		disasmHook: "WH_KEYBOARD_LL → syncsvc+0x2F10",
		dest: "C:\\ProgramData\\AppSync\\syncsvc.exe",
		destHint: "记录域管口令",
		destNodeId: "proc-sync",
		method: "WH_* 链",
		seq: 2
	},
	{
		id: "clean-hook-shell",
		scenarioId: "clean",
		kind: "winhook",
		module: "user32.dll",
		fn: "SetWindowsHookExW WH_SHELL",
		process: "printutil.exe",
		pid: 5088,
		original: "—",
		patched: "printutil.exe!ShellHook",
		disasmOrig: "无系统级 shell 钩",
		disasmHook: "WH_SHELL → Apex Print 窗口通知",
		dest: "C:\\Program Files\\ApexPrint\\printutil.exe",
		destHint: "打印助手窗口跟踪，低置信",
		destNodeId: "proc-print",
		method: "WH_* 链",
		seq: 1
	}
];
function hooksFor(scenarioId) {
	return HOOKS.filter((h) => h.scenarioId === scenarioId).sort((a, b) => a.seq - b.seq);
}
function hookCaption(h) {
	return `${h.module}!${h.fn}`;
}
var SUSPECT_EXT = /\.(exe|dll|sys|scr|ps1|vbs|js|lnk|bat|cmd)$/i;
var SUSPECT_NAME = /(svchost|runtimebroker|winupdate|netcfg|msdsk|syncsvc|mimikatz|beacon)/i;
var SKIP_DIR = /* @__PURE__ */ new Set([
	"node_modules",
	".git",
	"dist",
	"build",
	".next"
]);
var QUAR_DIR = ".umbra-quarantine";
var mounted = null;
function getMountedDir() {
	return mounted;
}
function fsApiAvailable() {
	return typeof window !== "undefined" && "showDirectoryPicker" in window;
}
async function pickLocalDirectory() {
	const w = window;
	if (!w.showDirectoryPicker) return null;
	try {
		mounted = await w.showDirectoryPicker({ mode: "readwrite" });
		return { name: mounted.name };
	} catch {
		return null;
	}
}
function dropMounted() {
	mounted = null;
}
async function walk(dir, prefix, out, cap) {
	if (out.length >= cap) return;
	for await (const entry of dir.values()) {
		if (out.length >= cap) return;
		if (entry.name.startsWith(".") || SKIP_DIR.has(entry.name)) continue;
		const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
		if (entry.kind === "directory" && entry.getDirectoryHandle) try {
			await walk(await dir.getDirectoryHandle(entry.name), rel, out, cap);
		} catch {}
		else if (entry.kind === "file" && entry.getFile) try {
			const file = await (await dir.getFileHandle(entry.name)).getFile();
			out.push({
				path: rel,
				name: entry.name,
				size: file.size,
				file,
				dir
			});
		} catch {}
	}
}
async function scanMounted(opts) {
	if (!mounted) return {
		scanned: 0,
		findings: []
	};
	const files = [];
	await walk(mounted, "", files, 400);
	const rule = opts.customRule.trim().toLowerCase();
	const findings = [];
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
				hitName ? "名称命中驻留伪装词" : "扩展名 + 路径启发式"
			],
			engines: ["resident", "behavior"],
			sources: ["core", "custom"],
			tactics: ["T1055", "T1036"],
			action: "block",
			actionHint: "移动到隔离目录并阻断后续打开。"
		});
	}
	return {
		scanned: files.length,
		findings
	};
}
async function quarantineLocal(relativePath) {
	if (!mounted) return false;
	const parts = relativePath.split("/").filter(Boolean);
	const name = parts.pop();
	if (!name) return false;
	try {
		let dir = mounted;
		for (const p of parts) dir = await dir.getDirectoryHandle(p);
		const buf = await (await (await dir.getFileHandle(name)).getFile()).arrayBuffer();
		const w = await (await (await mounted.getDirectoryHandle(QUAR_DIR, { create: true })).getFileHandle(`${Date.now()}-${name}`, { create: true })).createWritable();
		await w.write(buf);
		await w.close();
		await dir.removeEntry(name);
		return true;
	} catch {
		return false;
	}
}
function benignPaths(phase, physical) {
	if (phase === "processes") return [
		"C:\\Windows\\System32\\csrss.exe",
		"C:\\Windows\\System32\\services.exe",
		"C:\\Windows\\explorer.exe"
	];
	if (phase === "inject") return ["OpenProcess explorer.exe 标准权限", "ntdll!NtQueueApcThread 本进程"];
	if (phase === "hooks") return [
		"ntdll!NtClose 入口 = KnownDlls",
		"kernel32!GetLastError IAT 未改",
		"user32!DispatchMessageW 无 WH 过滤"
	];
	if (phase === "disk") {
		if (physical) return VOLUMES.map((v) => `${v.letter} ${v.fs} ${v.disk} ${v.size}`);
		return ["C:\\Windows\\System32\\drivers\\tcpip.sys", "C:\\Windows\\System32\\ntdll.dll"];
	}
	return ["HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run", "C:\\Windows\\System32\\Tasks"];
}
function useScanRunner() {
	const timers = (0, import_react.useRef)([]);
	const scanStatus = useIRStore((s) => s.scanStatus);
	const scenarioId = useIRStore((s) => s.scenarioId);
	const enabledEngines = useIRStore((s) => s.enabledEngines);
	const enabledSources = useIRStore((s) => s.enabledSources);
	const customRule = useIRStore((s) => s.customRule);
	const hostMode = useIRStore((s) => s.hostMode);
	(0, import_react.useEffect)(() => {
		return () => {
			timers.current.forEach((t) => window.clearTimeout(t));
			timers.current = [];
		};
	}, []);
	(0, import_react.useEffect)(() => {
		timers.current.forEach((t) => window.clearTimeout(t));
		timers.current = [];
		if (scanStatus !== "scanning") return;
		let cancelled = false;
		const run = async () => {
			const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const store0 = useIRStore.getState();
			if (store0.hostMode === "physical" && getMountedDir()) {
				const res = await scanMounted({
					scenarioId: store0.scenarioId,
					customRule: store0.customRule
				});
				if (cancelled) return;
				useIRStore.getState().setExtraFindings(res.findings);
				const mount = useIRStore.getState().localMount;
				if (mount) useIRStore.getState().setLocalMount({
					...mount,
					scanned: res.scanned,
					flagged: res.findings.length
				});
				useIRStore.getState().appendLog({
					tone: res.findings.length ? "hit" : "ok",
					text: `本机目录 ${res.scanned} 个文件，命中 ${res.findings.length}`
				});
			}
			if (cancelled || useIRStore.getState().scanStatus !== "scanning") return;
			const store = useIRStore.getState();
			const hits = visibleFindingsOf(store);
			const cover = store.cover;
			const beats = [];
			let t = 0;
			const gap = reduced ? 40 : 140;
			const hitGap = reduced ? 80 : 360;
			const push = (delayAdd, runBeat) => {
				t += delayAdd;
				beats.push({
					delay: t,
					run: runBeat
				});
			};
			push(80, () => {
				useIRStore.getState().setPhase("init");
				const nproc = procsFor(store.scenarioId, store.hostMode).length;
				useIRStore.getState().appendLog({
					tone: "info",
					text: cover ? "加载采样模块…" : store.hostMode === "physical" ? `连接物理主机 · 会话进程 ${nproc} · 磁盘 ${VOLUMES.length} 卷` : "初始化查杀引擎…"
				});
			});
			enabledEngines.forEach((id) => {
				const eng = ENGINES.find((e) => e.id === id);
				if (!eng) return;
				push(gap, () => {
					useIRStore.getState().appendLog({
						tone: "info",
						text: cover ? `模块 ${eng.coverName} 就绪` : `引擎 ${eng.name} 就绪 · ${eng.signatures}`
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
						text: cover ? `对照 ${src.coverName}` : `加载特征库 ${src.name}（${src.count.toLocaleString("zh-CN")}）`
					});
				});
			});
			if (enabledEngines.length === 0 || enabledSources.length === 0) push(gap, () => {
				useIRStore.getState().appendLog({
					tone: "warn",
					text: cover ? "未启用任何模块或目录。" : "未启用任何引擎或特征源，跳过检出。"
				});
			});
			const kindsOf = (k) => hits.filter((f) => f.kind === k);
			const phases = [
				{
					phase: "processes",
					kinds: ["process"],
					start: 16,
					end: 30
				},
				{
					phase: "inject",
					kinds: [],
					start: 32,
					end: 44
				},
				{
					phase: "hooks",
					kinds: [],
					start: 46,
					end: 60
				},
				{
					phase: "disk",
					kinds: ["file", "volume"],
					start: 64,
					end: 82
				},
				{
					phase: "policy",
					kinds: ["policy"],
					start: 86,
					end: 96
				}
			];
			const injectEdges = edgesFor(store.scenarioId).filter((e) => e.kind !== "parent");
			const hookRows = hooksFor(store.scenarioId).filter((h) => hits.some((f) => f.id === h.id));
			phases.forEach((p) => {
				push(hitGap, () => {
					useIRStore.getState().setPhase(p.phase);
					useIRStore.getState().setProgress(p.start);
					const label = p.phase === "processes" ? cover ? "会话" : "驻留进程" : p.phase === "inject" ? cover ? "跨进程边" : "注入图（WRITEVM / APC / CRT）" : p.phase === "hooks" ? cover ? "入口核对" : "API 钩子（IAT / EAT / inline / WH_*）" : p.phase === "disk" ? cover ? "磁盘" : store.hostMode === "physical" ? "物理磁盘与映像" : "磁盘映像" : cover ? "计划项" : "系统策略";
					useIRStore.getState().appendLog({
						tone: "info",
						text: cover ? `开始${label}采样` : `扫描${label}`
					});
				});
				benignPaths(p.phase, store.hostMode === "physical").forEach((path) => {
					push(gap, () => {
						useIRStore.getState().appendLog({
							tone: "ok",
							text: `通过  ${path}`
						});
						const cur = useIRStore.getState().progress;
						if (cur < p.end - 4) useIRStore.getState().setProgress(cur + 2);
					});
				});
				if (p.phase === "inject") injectEdges.forEach((e) => {
					push(hitGap, () => {
						useIRStore.getState().revealEdge(e.id);
						if (e.findingId) useIRStore.getState().revealFinding(e.findingId);
						const sys = e.sysmon && !cover ? `EID ${e.sysmon} ` : "";
						useIRStore.getState().appendLog({
							tone: "hit",
							text: `${sys}${e.etw}  ${nodeCaption(e.from)} → ${nodeCaption(e.to)}`
						});
						const cur = useIRStore.getState().progress;
						useIRStore.getState().setProgress(Math.min(p.end, cur + 3));
					});
				});
				if (p.phase === "hooks") hookRows.forEach((h) => {
					push(hitGap, () => {
						useIRStore.getState().revealFinding(h.id);
						if (h.destNodeId) useIRStore.getState().setSelectedNode(h.destNodeId);
						useIRStore.getState().appendLog({
							tone: "hit",
							text: cover ? `入口异常  ${h.fn}` : `${HOOK_KIND_LABEL[h.kind]}  ${hookCaption(h)}  ${h.process}(${h.pid}) → ${h.dest}`
						});
						const cur = useIRStore.getState().progress;
						useIRStore.getState().setProgress(Math.min(p.end, cur + 3));
					});
				});
				p.kinds.forEach((kind) => {
					kindsOf(kind).forEach((f) => {
						push(hitGap, () => {
							useIRStore.getState().revealFinding(f.id);
							useIRStore.getState().appendLog({
								tone: "hit",
								text: `${cover ? "异常" : f.severity === "critical" ? "严重" : "检出"}  ${f.subject}  ${f.path}`
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
					text: cover ? `采样结束，异常 ${st.revealedIds.length} 项` : `扫描完成，检出 ${st.revealedIds.length} 项，注入边 ${st.revealedEdgeIds.length}`
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
		run();
		return () => {
			cancelled = true;
			timers.current.forEach((x) => window.clearTimeout(x));
			timers.current = [];
		};
	}, [
		scanStatus,
		scenarioId,
		enabledEngines,
		enabledSources,
		customRule,
		hostMode
	]);
}
function useWatchdog() {
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			useIRStore.getState().tickWatchdog();
		}, 1200);
		return () => window.clearInterval(id);
	}, []);
}
function useAttackDrill() {
	const timers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);
	const run = () => {
		timers.current.forEach((t) => window.clearTimeout(t));
		timers.current = [];
		const store = useIRStore.getState();
		if (store.attacking) return;
		store.beginAttack();
		const cover = store.cover;
		const beats = [];
		const add = (delay, fn) => beats.push({
			delay,
			fn
		});
		add(80, () => store.pushAttack({
			tone: "info",
			text: "未知进程 enum_av.exe 正在枚举安全产品与防护进程"
		}));
		add(900, () => store.pushAttack({
			tone: "info",
			text: cover ? "窗口标题 / 进程名 / 字符串表均未命中杀毒特征" : "命中特征：灰域、UMBRA、查杀、quarantine、YARA"
		}));
		add(1800, () => {
			if (cover) useIRStore.getState().pushAttack({
				tone: "ok",
				text: "对手将本进程识别为 SysGraph.exe（性能采样），已跳过"
			});
			else useIRStore.getState().pushAttack({
				tone: "warn",
				text: "对手尝试结束 umbra.exe 并删除映像"
			});
		});
		add(2700, () => {
			const st = useIRStore.getState();
			if (st.cover) {
				st.pushAttack({
					tone: "ok",
					text: "执行锁未暴露。看门狗心跳保持。"
				});
				st.endAttack();
			} else st.pushAttack({
				tone: "hit",
				text: "看门狗拦截 NtTerminateProcess，拒绝卸载"
			});
		});
		add(3600, () => {
			const st = useIRStore.getState();
			if (st.cover) return;
			st.setCover(true);
			st.pushAttack({
				tone: "ok",
				text: "已自动切入伪装身份 SysGraph，字符串表已替换，进程继续执行"
			});
			st.endAttack();
		});
		beats.forEach((b) => {
			timers.current.push(window.setTimeout(b.fn, b.delay));
		});
	};
	return run;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:opacity-90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface-2",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-surface-2",
			danger: "bg-crit text-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4 min-h-11",
			sm: "h-9 px-3 min-h-9 text-sm",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Switch = import_react.forwardRef(({ className, checked = false, onCheckedChange, disabled, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	type: "button",
	role: "switch",
	"aria-checked": checked,
	disabled,
	onClick: () => onCheckedChange?.(!checked),
	className: cn("inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-border p-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:opacity-40", checked ? "bg-primary justify-end" : "bg-surface-2 justify-start", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("pointer-events-none block size-5 rounded-full transition-colors", checked ? "bg-primary-fg" : "bg-fg") })
}));
Switch.displayName = "Switch";
function EclipseMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("text-primary", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "12",
			r: "7.25",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "14.2",
			cy: "12",
			r: "6.1",
			fill: "currentColor"
		})]
	});
}
function GraphMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("text-primary", className),
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 16.5 9 11l3.5 3.5L20 7",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinejoin: "round",
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 19h16",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.2",
			opacity: "0.5"
		})]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-sm px-1.5 py-0.5 text-2xs font-medium tracking-wide", {
	variants: { tone: {
		default: "bg-surface-2 text-muted",
		crit: "bg-crit/15 text-crit",
		high: "bg-high/15 text-high",
		med: "bg-med/15 text-med",
		low: "bg-low/20 text-low",
		ok: "bg-ok/15 text-ok",
		primary: "bg-primary/15 text-primary"
	} },
	defaultVariants: { tone: "default" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
function DiskPanel() {
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
	const catalog = catalogFindings({
		scenarioId,
		hostMode,
		extraFindings
	});
	async function mount() {
		if (!fsApiAvailable()) {
			setLocalMount({
				name: "",
				scanned: 0,
				flagged: 0,
				supported: false
			});
			return;
		}
		const picked = await pickLocalDirectory();
		if (!picked) return;
		setLocalMount({
			name: picked.name,
			scanned: 0,
			flagged: 0,
			supported: true
		});
	}
	function unmount() {
		dropMounted();
		setExtraFindings(extraFindings.filter((f) => !f.local));
		setLocalMount(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xs font-medium tracking-wide text-muted uppercase",
			children: copy.disk
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-2xs text-subtle",
			children: cover ? "卸载卷只停用执行，不会擦除。" : "隔离阻断该卷执行，不会格式化或擦除。系统卷不可隔离。"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 flex flex-col gap-2",
			children: VOLUMES.map((v) => {
				const isolated = (volumes.find((x) => x.id === v.id)?.status ?? "online") === "isolated";
				const queued = planned.some((p) => {
					return catalog.find((x) => x.id === p.findingId)?.volumeId === v.id && p.action === "isolate-volume" && (p.status === "queued" || p.status === "running");
				});
				const canIsolate = v.role !== "system";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("rounded-md bg-surface px-3 py-2.5 shadow-[var(--shadow-border)]", isolated && "opacity-70"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-medium",
								children: [
									v.letter,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-2xs font-normal text-subtle",
										children: v.disk
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-2xs text-subtle",
								children: [
									v.fs,
									" · ",
									v.size,
									" · ",
									v.role === "system" ? "系统" : v.role === "data" ? "数据" : "可移动"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: isolated ? "ok" : v.role === "removable" ? "high" : "default",
							children: isolated ? "已隔离" : "在线"
						})]
					}), canIsolate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2",
						children: isolated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							disabled: locked,
							onClick: () => unisolateVolume(v.id),
							children: copy.unisolate
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							disabled: locked || queued,
							onClick: () => planIsolate(v.id),
							children: queued ? "已入队" : copy.isolate
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-micro text-subtle",
						children: "系统卷不可隔离"
					})]
				}, v.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-md bg-surface-2 px-3 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-normal text-muted",
					children: "授权后扫描本机目录，命中文件可隔离到同目录 .umbra-quarantine。不会格式化磁盘。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: localMount?.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						disabled: locked,
						onClick: unmount,
						children: copy.unmount
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						disabled: locked,
						onClick: () => void mount(),
						children: copy.mount
					})
				}),
				localMount?.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-mono text-2xs text-subtle",
					children: [localMount.name, localMount.scanned ? ` · 扫描 ${localMount.scanned} · 命中 ${localMount.flagged}` : " · 待扫描"]
				}) : localMount && !localMount.supported ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-2xs text-high",
					children: "当前浏览器不支持目录授权，请换 Chromium 内核。"
				}) : null
			]
		})
	] });
}
function EngineRail() {
	const cover = useIRStore((s) => s.cover);
	const copy = cover ? COPY.cover : COPY.ops;
	const hostMode = useIRStore((s) => s.hostMode);
	const setHostMode = useIRStore((s) => s.setHostMode);
	const scenarioId = useIRStore((s) => s.scenarioId);
	const setScenario = useIRStore((s) => s.setScenario);
	const enabledEngines = useIRStore((s) => s.enabledEngines);
	const enabledSources = useIRStore((s) => s.enabledSources);
	const toggleEngine = useIRStore((s) => s.toggleEngine);
	const toggleSource = useIRStore((s) => s.toggleSource);
	const customRule = useIRStore((s) => s.customRule);
	const setCustomRule = useIRStore((s) => s.setCustomRule);
	const scanStatus = useIRStore((s) => s.scanStatus);
	const locked = scanStatus === "scanning" || scanStatus === "executing";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: "范围"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 grid grid-cols-2 gap-2",
				children: [["lab", copy.lab], ["physical", copy.physical]].map(([id, label]) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: locked,
						onClick: () => setHostMode(id),
						className: cn("rounded-md px-3 py-2.5 text-left min-h-11 text-sm font-medium transition-colors duration-150", hostMode === id ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]" : "text-muted hover:text-fg hover:bg-surface"),
						children: label
					}, id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: hostMode === "physical" ? "感染画像" : "快照"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: SCENARIOS.map((s) => {
						const on = s.id === scenarioId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: locked,
							onClick: () => setScenario(s.id),
							className: cn("rounded-md px-3 py-2.5 text-left min-h-11 transition-colors duration-150", on ? "bg-surface-2 text-fg shadow-[var(--shadow-border)]" : "text-muted hover:text-fg hover:bg-surface"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 font-mono text-2xs text-subtle",
								children: s.host
							})]
						}, s.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-snug text-subtle",
					children: SCENARIOS.find((s) => s.id === scenarioId)?.blurb
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiskPanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: copy.engines
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-col gap-1",
				children: ENGINES.map((e) => {
					const on = enabledEngines.includes(e.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-md px-2 py-1.5 hover:bg-surface",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-fg",
								children: cover ? e.coverName : e.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xs text-subtle truncate",
								children: cover ? e.coverSummary : e.summary
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: on,
							disabled: locked,
							onCheckedChange: () => toggleEngine(e.id),
							"aria-label": cover ? e.coverName : e.name
						})]
					}, e.id);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: copy.sources
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex flex-col gap-1",
					children: SOURCES.map((s) => {
						const on = enabledSources.includes(s.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 rounded-md px-2 py-1.5 hover:bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-fg",
									children: cover ? s.coverName : s.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-2xs text-subtle",
									children: [
										s.count.toLocaleString("zh-CN"),
										" · ",
										s.summary
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: on,
								disabled: locked,
								onCheckedChange: () => toggleSource(s.id),
								"aria-label": cover ? s.coverName : s.name
							})]
						}, s.id);
					})
				}),
				enabledSources.includes("custom") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-2 block px-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xs text-muted",
						children: "路径包含"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: customRule,
						disabled: locked,
						onChange: (e) => setCustomRule(e.target.value),
						placeholder: "例如 Temp\\\\msdsk",
						className: "mt-1 h-11 w-full rounded-sm bg-surface-2 px-3 text-sm text-fg placeholder:text-subtle shadow-[var(--shadow-border)] focus:outline-none focus:ring-2 focus:ring-ring/60"
					})]
				}) : null
			] })
		]
	});
}
var TONE = {
	critical: "crit",
	high: "high",
	medium: "med",
	low: "low"
};
function KindIcon({ kind }) {
	const cls = "size-3.5 text-muted";
	if (kind === "process") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: cls });
	if (kind === "file") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode2, { className: cls });
	if (kind === "volume") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: cls });
	if (kind === "hook") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Unplug, { className: cls });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: cls });
}
function FindingsList({ onPreview }) {
	const cover = useIRStore((s) => s.cover);
	const copy = cover ? COPY.cover : COPY.ops;
	const revealedIds = useIRStore((s) => s.revealedIds);
	const selectedIds = useIRStore((s) => s.selectedIds);
	const expandedId = useIRStore((s) => s.expandedId);
	const toggleSelected = useIRStore((s) => s.toggleSelected);
	const setExpanded = useIRStore((s) => s.setExpanded);
	const scanStatus = useIRStore((s) => s.scanStatus);
	const selectAllVisible = useIRStore((s) => s.selectAllVisible);
	const clearSelected = useIRStore((s) => s.clearSelected);
	const queueFromSelection = useIRStore((s) => s.queueFromSelection);
	const extraFindings = useIRStore((s) => s.extraFindings);
	const hostMode = useIRStore((s) => s.hostMode);
	const catalog = catalogFindings({
		scenarioId: useIRStore((s) => s.scenarioId),
		hostMode,
		extraFindings
	});
	const rows = revealedIds.map((id) => catalog.find((f) => f.id === id)).filter((f) => Boolean(f));
	if (!rows.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-start justify-center rounded-lg bg-surface px-5 py-10 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-fg",
				children: copy.empty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm leading-normal text-muted",
				children: cover ? "采样模块与对照目录决定能看到哪些异常项。开始采样后结果会逐条写入。" : hostMode === "physical" ? "物理主机扫描驻留进程、注入图、API 钩子、磁盘卷。进程表可直接结束会话 PID，磁盘可隔离执行（不格式化）。授权目录内的命中文件可真正隔离。" : "关闭部分引擎或特征库会改变检出面。扫描时会写入进程、注入边、钩子、磁盘与策略。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-2xs text-subtle",
				children: cover ? "结果需确认后才会改会话。" : "检出后可预览处置，批准才会结束进程、还原 API 入口、阻断执行、隔离卷或备份清除策略。"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs text-muted tabular-nums",
				children: [
					copy.findings,
					" ",
					rows.length,
					scanStatus === "scanning" ? " · 写入中" : ""
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 px-3 text-xs text-muted hover:text-fg",
						onClick: selectAllVisible,
						children: "全选"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "h-11 px-3 text-xs text-muted hover:text-fg",
						onClick: clearSelected,
						children: "清空"
					}),
					onPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						disabled: selectedIds.length === 0 || scanStatus === "scanning" || scanStatus === "executing",
						onClick: () => {
							queueFromSelection();
							onPreview();
						},
						children: copy.preview
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: rows.map((f, i) => {
				const open = expandedId === f.id;
				const checked = selectedIds.includes(f.id);
				const kind = KIND_LABEL[f.kind][cover ? "cover" : "ops"];
				const action = ACTION_LABEL[f.action][cover ? "cover" : "ops"];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "umbra-in rounded-lg bg-surface p-2 shadow-[var(--shadow-border)]",
					style: { animationDelay: `${Math.min(i, 8) * 40}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "relative mt-1 flex size-11 shrink-0 items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked,
									onChange: () => toggleSelected(f.id),
									className: "size-4 accent-primary",
									"aria-label": `选择 ${f.subject}`
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "min-w-0 flex-1 py-1.5 text-left",
								onClick: () => setExpanded(open ? null : f.id),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												tone: TONE[f.severity],
												children: SEVERITY_LABEL[f.severity]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 text-2xs text-muted",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KindIcon, { kind: f.kind }), kind]
											}),
											f.local ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "本机" }) : null,
											!cover && f.tactics.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-micro text-subtle",
												children: f.tactics.join(" ")
											}) : null
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-sm font-medium text-fg",
										children: f.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-0.5 font-mono text-2xs text-muted break-all",
										children: [f.pid ? `PID ${f.pid} · ` : "", f.path]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "mt-1 size-11 inline-flex items-center justify-center text-muted",
								"aria-expanded": open,
								onClick: () => setExpanded(open ? null : f.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform duration-150", open && "rotate-180") })
							})
						]
					}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 mb-1 ml-12 mr-2 rounded-md bg-surface-2 px-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-normal text-fg",
								children: f.reason
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 flex flex-col gap-1",
								children: f.evidence.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-xs text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-1 shrink-0 rounded-full bg-primary/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono leading-snug",
										children: e
									})]
								}, e))
							}),
							f.sha256 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-2xs text-subtle break-all",
								children: ["SHA256 ", f.sha256]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-muted",
								children: [
									"建议：",
									action,
									" · ",
									f.actionHint
								]
							}),
							!cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-2xs text-subtle",
								children: [
									"引擎 ",
									f.engines.join(" / "),
									" · 来源 ",
									f.sources.join(" / ")
								]
							}) : null
						]
					}) : null]
				}, f.id);
			})
		})]
	});
}
function ProtectPanel() {
	const cover = useIRStore((s) => s.cover);
	const setCover = useIRStore((s) => s.setCover);
	const copy = cover ? COPY.cover : COPY.ops;
	const pulse = useIRStore((s) => s.watchdogPulse);
	const attackLog = useIRStore((s) => s.attackLog);
	const attacking = useIRStore((s) => s.attacking);
	const runDrill = useAttackDrill();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: copy.protect
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs leading-normal text-subtle",
				children: cover ? "服务以普通采样进程驻留。字符串表不含安全产品特征。" : "防止自身被结束、禁止执行或按“杀毒软件”特征被枚举。"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: copy.camouflage
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xs text-subtle",
							children: cover ? "进程名 SysGraph.exe · 窗口 资源监视" : "进程名 umbra.exe · 窗口含查杀字样"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: cover,
							onCheckedChange: setCover,
							"aria-label": copy.camouflage
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm",
							children: [
								copy.watchdog,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("size-1.5 rounded-full bg-ok watchdog-dot"),
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-2xs text-subtle tabular-nums",
									children: ["hb ", pulse]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xs text-subtle",
							children: "三路心跳，终止请求被拒绝并拉起。"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-ok",
							children: "启用"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: copy.lock
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xs text-subtle",
							children: "禁止结束自身、禁止卸载映像、禁止禁止执行。"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-ok",
							children: "锁定"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 rounded-md bg-surface px-3 py-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm",
							children: copy.integrity
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-2xs text-subtle break-all",
							children: "SHA256 a8c3…e21 与基线一致"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-ok" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: copy.drill
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						disabled: attacking,
						onClick: runDrill,
						children: attacking ? "演练中" : "模拟对抗"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xs leading-normal text-subtle",
					children: "模拟恶意软件枚举安全产品并尝试结束防护进程。伪装开启时会被当成普通采样工具跳过。"
				}),
				attackLog.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 flex flex-col gap-1.5 rounded-md bg-surface-2 px-3 py-3",
					children: attackLog.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: cn("text-xs leading-snug font-mono", b.tone === "ok" && "text-ok", b.tone === "hit" && "text-crit", b.tone === "warn" && "text-high", b.tone === "info" && "text-muted"),
						children: b.text
					}, b.id))
				}) : null
			] })
		]
	});
}
function QueuePanel({ onPreview }) {
	const cover = useIRStore((s) => s.cover);
	const copy = cover ? COPY.cover : COPY.ops;
	const planned = useIRStore((s) => s.planned);
	const backups = useIRStore((s) => s.backups);
	const quarantine = useIRStore((s) => s.quarantine);
	const restoreBackup = useIRStore((s) => s.restoreBackup);
	const selectedIds = useIRStore((s) => s.selectedIds);
	const queueFromSelection = useIRStore((s) => s.queueFromSelection);
	const scanStatus = useIRStore((s) => s.scanStatus);
	useIRStore((s) => s.extraFindings);
	useIRStore((s) => s.hostMode);
	const busy = scanStatus === "scanning" || scanStatus === "executing";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: copy.queue
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-subtle",
					children: [
						copy.selected,
						" ",
						selectedIds.length,
						" · ",
						cover ? "确认后才会改会话" : "批准前不会改快照或本机文件"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "flex-1",
						disabled: selectedIds.length === 0 || busy,
						onClick: () => {
							queueFromSelection();
							onPreview();
						},
						children: copy.preview
					})
				})
			] }),
			planned.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2",
				children: planned.map((p) => {
					const f = lookupFinding(p.findingId);
					if (!f) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-md bg-surface px-3 py-2.5 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm truncate",
								children: f.subject
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: ACTION_LABEL[p.action][cover ? "cover" : "ops"] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 font-mono text-2xs text-subtle truncate",
							children: f.path
						})]
					}, p.findingId);
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "从检出、注入图、钩子或进程表加入后预览。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: copy.quarantine
			}), quarantine.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-subtle",
				children: "尚无已执行项。"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-col gap-2",
				children: quarantine.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-surface-2 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm",
						children: q.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-2xs text-subtle truncate",
						children: [q.local ? "本机隔离 · " : "", q.path]
					})]
				}, q.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: copy.backups
			}), backups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-subtle",
				children: "策略清除前会在此留下还原点。"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-col gap-2",
				children: backups.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-md bg-surface-2 px-3 py-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm",
									children: b.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-2xs text-subtle truncate",
									children: b.key
								}),
								b.value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "mt-1 max-h-16 overflow-auto font-mono text-micro text-muted",
									children: b.value
								}) : null
							]
						}), b.restored ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xs text-ok shrink-0",
							children: "已回滚"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => restoreBackup(b.id),
							children: copy.restore
						})]
					})
				}, b.id))
			})] })
		]
	});
}
function Progress({ value, className }) {
	const pct = Math.max(0, Math.min(100, value));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-1 w-full overflow-hidden rounded-full bg-surface-2", className),
		role: "progressbar",
		"aria-valuenow": Math.round(pct),
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-primary transition-[width] duration-200 ease-out",
			style: { width: `${pct}%` }
		})
	});
}
function ScanLog() {
	const cover = useIRStore((s) => s.cover);
	const copy = cover ? COPY.cover : COPY.ops;
	const logs = useIRStore((s) => s.logs);
	const phase = useIRStore((s) => s.phase);
	const progress = useIRStore((s) => s.progress);
	const scanStatus = useIRStore((s) => s.scanStatus);
	const revealedIds = useIRStore((s) => s.revealedIds);
	const bottom = (0, import_react.useRef)(null);
	const [open, setOpen] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (scanStatus === "scanning") setOpen(true);
		if (scanStatus === "complete" || scanStatus === "executed") setOpen(false);
	}, [scanStatus]);
	(0, import_react.useEffect)(() => {
		if (open) bottom.current?.scrollIntoView({ block: "end" });
	}, [logs.length, open]);
	if (scanStatus === "idle" && logs.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex w-full items-center justify-between gap-3 min-h-11 text-left",
				onClick: () => setOpen((v) => !v),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted",
						children: [PHASE_LABEL[phase][cover ? "cover" : "ops"], scanStatus !== "scanning" ? ` · ${copy.findings} ${revealedIds.length}` : ""]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-2xs text-subtle tabular-nums",
						children: [Math.round(progress), "%"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition-transform duration-150", open && "rotate-180") })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: progress,
				className: "mt-1"
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 max-h-28 overflow-y-auto font-mono text-2xs leading-relaxed",
				children: [logs.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("truncate", line.tone === "hit" && "text-crit", line.tone === "ok" && "text-ok", line.tone === "warn" && "text-high", line.tone === "info" && "text-muted"),
					children: line.text
				}, line.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: bottom })]
			}) : null,
			scanStatus === "scanning" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-2xs text-subtle",
				children: [copy.scanning, "…"]
			}) : null
		]
	});
}
function nextLoad(prev, hot) {
	const target = hot ? 78 : 22;
	const drift = (Math.random() - .45) * (hot ? 10 : 6);
	return Math.max(6, Math.min(98, prev * .7 + target * .3 + drift));
}
function CoverChart() {
	const scenarioId = useIRStore((s) => s.scenarioId);
	const scanStatus = useIRStore((s) => s.scanStatus);
	const hot = scenarioId === "miner" && scanStatus !== "executed";
	const [series, setSeries] = (0, import_react.useState)(() => Array.from({ length: 24 }, (_, i) => ({
		i,
		cpu: hot ? 70 + i % 5 : 18 + i % 4
	})));
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setSeries((prev) => {
				const last = prev[prev.length - 1]?.cpu ?? 20;
				return [...prev.slice(1), {
					i: (prev[prev.length - 1]?.i ?? 0) + 1,
					cpu: nextLoad(last, hot)
				}];
			});
		}, 1100);
		return () => window.clearInterval(id);
	}, [hot]);
	const now = series[series.length - 1]?.cpu ?? 0;
	const stroke = "var(--color-primary)";
	const fillId = (0, import_react.useMemo)(() => "coverLoad", []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: "处理器"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-sm tabular-nums text-fg",
				children: [now.toFixed(0), "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 h-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
					data: series,
					margin: {
						top: 4,
						right: 0,
						left: 0,
						bottom: 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: fillId,
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: stroke,
								stopOpacity: .25
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: stroke,
								stopOpacity: 0
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							hide: true,
							domain: [0, 100]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "cpu",
							stroke,
							fill: `url(#${fillId})`,
							strokeWidth: 1.4,
							isAnimationActive: false
						})
					]
				})
			})
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-bg/70", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 w-[min(640px,calc(100vw-1.5rem))] max-h-[min(86vh,720px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-surface p-5 text-fg shadow-[var(--shadow-border)]", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-3 right-3 size-11 inline-flex items-center justify-center rounded-sm text-muted hover:text-fg hover:bg-surface-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "关闭"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pr-10", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("text-lg font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mt-1 text-sm text-muted leading-normal", className),
		...props
	});
}
function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}
var STATUS_TEXT = {
	queued: "待执行",
	running: "执行中",
	done: "完成",
	failed: "失败",
	"rolled-back": "已回滚"
};
function ApproveDialog({ open, onOpenChange }) {
	const cover = useIRStore((s) => s.cover);
	const copy = cover ? COPY.cover : COPY.ops;
	const planned = useIRStore((s) => s.planned);
	const setActionStatus = useIRStore((s) => s.setActionStatus);
	const applyExecuted = useIRStore((s) => s.applyExecuted);
	const setScanStatus = useIRStore((s) => s.setScanStatus);
	const scanStatus = useIRStore((s) => s.scanStatus);
	const extraFindings = useIRStore((s) => s.extraFindings);
	const hostMode = useIRStore((s) => s.hostMode);
	const scenarioId = useIRStore((s) => s.scenarioId);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const catalog = catalogFindings({
		scenarioId,
		hostMode,
		extraFindings
	});
	const items = planned.map((p) => ({
		...p,
		finding: catalog.find((f) => f.id === p.findingId)
	})).filter((p) => p.finding);
	const running = scanStatus === "executing";
	const finished = scanStatus === "executed";
	async function approve() {
		if (!items.length || busy) return;
		setBusy(true);
		setScanStatus("executing");
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		for (const item of items) {
			setActionStatus(item.findingId, "running");
			const f = item.finding;
			if (item.action === "block" && f.local) {
				if (!await quarantineLocal(f.path)) {
					setActionStatus(item.findingId, "failed");
					await sleep(reduced ? 40 : 320);
					continue;
				}
			}
			await sleep(reduced ? 40 : 640);
			applyExecuted(item.findingId, item.action);
			setActionStatus(item.findingId, "done");
		}
		setScanStatus("executed");
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "flex flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: finished ? copy.done : copy.preview }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: finished ? cover ? "操作已写入本会话。计划项已留下还原点。" : "进程已从会话表结束，磁盘卷已隔离，用户态 API 入口已按备份还原，本机命中文件已移入隔离目录。策略均先备份。" : cover ? "确认前可核对将结束的任务、停用的映像与卷。" : hostMode === "physical" ? "批准后：结束会话进程、还原用户态 API 入口、隔离磁盘卷；授权目录内的文件会移到 .umbra-quarantine。不会低格磁盘，也不能改你机器上的 ntdll。" : "不会立即改动快照。核对后批准：结束进程、还原 API 入口、阻断执行、策略备份清除。" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 min-h-0 flex-1 overflow-y-auto pr-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex flex-col gap-2",
						children: items.map((item) => {
							const f = item.finding;
							const action = ACTION_LABEL[item.action][cover ? "cover" : "ops"];
							const kind = KIND_LABEL[f.kind][cover ? "cover" : "ops"];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-md bg-surface-2 px-3 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-medium",
												children: f.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-0.5 font-mono text-2xs text-muted break-all",
												children: [
													kind,
													" · ",
													f.path
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-subtle",
												children: f.actionHint
											}),
											item.action === "backup-clear" && f.policyValue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
												className: "mt-2 overflow-x-auto rounded-xs bg-bg px-2 py-1.5 font-mono text-micro text-muted",
												children: f.policyValue
											}) : null
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex shrink-0 flex-col items-end gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: action }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("text-2xs tabular-nums", item.status === "done" && "text-ok", item.status === "failed" && "text-crit", item.status === "running" && "text-primary", item.status === "queued" && "text-subtle"),
											children: STATUS_TEXT[item.status]
										})]
									})]
								})
							}, item.findingId);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => onOpenChange(false),
						children: finished ? "关闭" : "取消"
					}), !finished ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: approve,
						disabled: busy || running || !items.length,
						children: running ? copy.executing : `${copy.approve} ${items.length} 项`
					}) : null]
				})
			]
		})
	});
}
var LANE_X = [
	24,
	248,
	472
];
var NODE_W = 168;
var PROC_H = 50;
var MEM_H = 68;
var TOP = 40;
var ROW = 88;
var WIDTH = 680;
var LANE_OPS = [
	"注入源",
	"内存页",
	"目标进程"
];
var LANE_COVER = [
	"源会话",
	"页",
	"目标"
];
function nodeH(n) {
	return n.kind === "memory" ? MEM_H : PROC_H;
}
function pos(lane, order) {
	return {
		x: LANE_X[lane],
		y: TOP + order * ROW
	};
}
function cy(n) {
	return pos(n.lane, n.order).y + nodeH(n) / 2;
}
function port(n, toward) {
	const p = pos(n.lane, n.order);
	const y = cy(n);
	if (n.lane === toward.lane) {
		const right = p.x + NODE_W;
		return {
			x: toward.order >= n.order ? right : p.x,
			y
		};
	}
	if (n.lane < toward.lane) return {
		x: p.x + NODE_W,
		y
	};
	return {
		x: p.x,
		y
	};
}
function pairKey(e) {
	return `${e.from}|${e.to}`;
}
function InjectionGraph() {
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
	const height = TOP + (Math.max(...nodes.map((n) => n.order), 0) + 1) * ROW + 8;
	const deadPids = new Set(procs.filter((p) => p.status === "terminated").map((p) => p.pid));
	const deadFindings = new Set(nodes.filter((n) => n.pid != null && deadPids.has(n.pid) && n.findingId).map((n) => n.findingId));
	const injectEdges = edges.filter((e) => e.kind !== "parent");
	const shownEdges = scanStatus === "idle" ? edges.filter((e) => e.kind === "parent") : edges.filter((e) => e.kind === "parent" || revealedEdgeIds.includes(e.id));
	const lanes = cover ? LANE_COVER : LANE_OPS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: copy.graph
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-2xs text-subtle tabular-nums",
					children: [
						cover ? "边" : "注入边",
						" ",
						shownEdges.filter((e) => e.kind !== "parent").length,
						"/",
						injectEdges.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-2xs text-subtle",
				children: cover ? "跨会话边按采样顺序展开。点击节点查看详情。" : "虚线为进程树，实线为注入。扫描时按 OpenProcess → ALLOC/WRITE/PROTECT → APC/CRT 逐段打出。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: `0 0 ${WIDTH} ${height}`,
					className: "h-auto w-full min-w-80 text-fg",
					role: "img",
					"aria-label": copy.graph,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
							id: "umbra-arrow-idle",
							markerWidth: "7",
							markerHeight: "7",
							refX: "6",
							refY: "3.5",
							orient: "auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0,0 L7,3.5 L0,7 Z",
								className: "fill-subtle"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
							id: "umbra-arrow-hot",
							markerWidth: "7",
							markerHeight: "7",
							refX: "6",
							refY: "3.5",
							orient: "auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0,0 L7,3.5 L0,7 Z",
								className: "fill-crit"
							})
						})] }),
						lanes.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: LANE_X[i] + NODE_W / 2,
							y: 18,
							textAnchor: "middle",
							className: "fill-subtle",
							fontSize: "10",
							fontFamily: "var(--font-sans)",
							children: label
						}, label)),
						shownEdges.map((e) => {
							const a = byId.get(e.from);
							const b = byId.get(e.to);
							if (!a || !b) return null;
							const p1 = port(a, b);
							const p2 = port(b, a);
							const hot = e.kind !== "parent";
							const on = selectedEdgeId === e.id;
							const group = shownEdges.filter((x) => pairKey(x) === pairKey(e));
							const spread = (group.findIndex((x) => x.id === e.id) - (group.length - 1) / 2) * 28;
							const bowX = a.lane === b.lane ? p1.x + 48 + spread : (p1.x + p2.x) / 2 + spread;
							const d = `M ${p1.x} ${p1.y} C ${bowX} ${p1.y}, ${bowX} ${p2.y}, ${p2.x} ${p2.y}`;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: "cursor-pointer",
								onClick: (ev) => {
									ev.stopPropagation();
									setSelectedEdge(e.id);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d,
									fill: "none",
									className: hot ? "stroke-crit" : "stroke-border-strong",
									strokeWidth: on ? 2.4 : hot ? 1.6 : 1,
									strokeDasharray: hot ? void 0 : "5 4",
									markerEnd: hot ? "url(#umbra-arrow-hot)" : "url(#umbra-arrow-idle)",
									opacity: on || !selectedEdgeId ? 1 : hot ? .45 : .7
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: bowX,
									y: (p1.y + p2.y) / 2 - 6,
									textAnchor: "middle",
									className: hot ? "fill-crit" : "fill-subtle",
									fontSize: "10",
									fontFamily: "var(--font-mono)",
									children: cover && hot ? "边" : e.label
								})]
							}, e.id);
						}),
						nodes.map((n) => {
							const p = pos(n.lane, n.order);
							const on = selectedNodeId === n.id;
							const hit = n.findingId && revealedIds.includes(n.findingId);
							const terminated = n.pid != null && deadPids.has(n.pid) || (n.findingId ? deadFindings.has(n.findingId) : false);
							const h = nodeH(n);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: "cursor-pointer",
								onClick: () => {
									setSelectedNode(n.id);
									if (n.findingId && revealedIds.includes(n.findingId)) {
										toggleSelected(n.findingId);
										setExpanded(n.findingId);
									}
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: p.x,
										y: p.y,
										width: NODE_W,
										height: h,
										rx: 8,
										className: cn(terminated ? "opacity-40" : "", on ? "fill-surface-2 stroke-primary" : hit ? "fill-surface-2 stroke-crit" : "fill-bg stroke-border-strong"),
										strokeWidth: on ? 1.6 : 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: p.x + 10,
										y: p.y + 18,
										className: n.benign ? "fill-muted" : "fill-fg",
										fontSize: "12",
										fontFamily: "var(--font-sans)",
										children: n.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
										x: p.x + 10,
										y: p.y + 34,
										className: "fill-subtle",
										fontSize: "10",
										fontFamily: "var(--font-mono)",
										children: [terminated ? "已结束 · " : "", n.kind === "memory" ? `${n.protect ?? ""} ${n.vadSize ?? ""}` : n.sub ?? ""]
									}),
									n.kind === "memory" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
										x: p.x + 10,
										y: p.y + 50,
										className: "fill-subtle",
										fontSize: "10",
										fontFamily: "var(--font-mono)",
										children: [n.unbacked ? "unbacked · " : "", n.protect ? PROTECT_LABEL[n.protect] : ""]
									}) : n.unbacked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
										x: p.x + 10,
										y: p.y + 44,
										className: "fill-high",
										fontSize: "10",
										fontFamily: "var(--font-mono)",
										children: "unbacked"
									}) : null
								]
							}, n.id);
						})
					]
				})
			}),
			nodes.some((n) => n.kind === "memory") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-micro text-subtle",
				children: nodes.filter((n) => n.kind === "memory").map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					n.label,
					n.protect ? ` · ${PROTECT_LABEL[n.protect]}` : "",
					n.vadType ? ` · ${VAD_TYPE_LABEL[n.vadType]}` : "",
					n.vadSize ? ` · ${n.vadSize}` : "",
					n.image ? ` · ${n.image}` : ""
				] }, n.id))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 border-t border-line pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-medium tracking-wide text-muted uppercase",
						children: copy.events
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-2xs text-subtle tabular-nums",
						children: [shownEdges.filter((e) => e.kind !== "parent").length, " evt"]
					})]
				}), shownEdges.filter((e) => e.kind !== "parent").length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-2xs text-subtle",
					children: scanStatus === "idle" ? cover ? "开始采样后写入跨会话边。" : "扫描进入注入阶段后，按生命周期写入 ETW-TI / Sysmon 事件。" : cover ? "尚未观察到跨会话边。" : "尚未检出注入边。"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-2 flex flex-col gap-1",
					children: shownEdges.filter((e) => e.kind !== "parent").map((e) => {
						const on = selectedEdgeId === e.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelectedEdge(e.id),
							className: cn("flex min-h-11 w-full items-start gap-2 rounded-sm px-2 py-2 text-left", on ? "bg-surface-2" : "hover:bg-surface-2"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 shrink-0 font-mono text-2xs text-subtle tabular-nums",
								children: e.seq
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-wrap items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: "crit",
											children: cover ? e.label : INJECT_LABEL[e.kind]
										}),
										e.sysmon && !cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-micro text-subtle",
											children: ["EID ", e.sysmon]
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-micro text-muted",
											children: cover ? "边" : e.etw.replace("THREATINT_", "")
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-0.5 block font-mono text-2xs text-subtle",
									children: [
										nodeCaption(e.from),
										" → ",
										nodeCaption(e.to),
										e.detail && !cover ? ` · ${e.detail}` : ""
									]
								})]
							})]
						}) }, e.id);
					})
				})]
			})
		]
	});
}
function HookPanel() {
	const cover = useIRStore((s) => s.cover);
	const copy = cover ? COPY.cover : COPY.ops;
	const scenarioId = useIRStore((s) => s.scenarioId);
	const revealedIds = useIRStore((s) => s.revealedIds);
	const selectedIds = useIRStore((s) => s.selectedIds);
	const expandedId = useIRStore((s) => s.expandedId);
	const hooks = useIRStore((s) => s.hooks);
	const scanStatus = useIRStore((s) => s.scanStatus);
	const planned = useIRStore((s) => s.planned);
	const planUnhook = useIRStore((s) => s.planUnhook);
	const setExpanded = useIRStore((s) => s.setExpanded);
	const setSelectedNode = useIRStore((s) => s.setSelectedNode);
	const phase = useIRStore((s) => s.phase);
	const rows = hooksFor(scenarioId);
	const shown = rows.filter((h) => revealedIds.includes(h.id));
	const locked = scanStatus === "scanning" || scanStatus === "executing";
	const restored = new Set(hooks.filter((h) => h.status === "restored").map((h) => h.id));
	const queued = new Set(planned.filter((p) => p.action === "unhook" && (p.status === "queued" || p.status === "running")).map((p) => p.findingId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: copy.hooks
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-2xs text-subtle tabular-nums",
					children: [
						shown.length,
						"/",
						rows.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-2xs text-subtle",
				children: cover ? "对照导出入口与导入表。点击查看详情。" : "对照 KnownDlls 与磁盘映像：IAT 走表、EAT RVA、入口 16 字节、WH_* 链。内核 SSDT 不在用户态范围。"
			}),
			shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 flex flex-col gap-1.5 font-mono text-2xs text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ntdll / kernel32 / user32 / ws2_32" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "IAT · EAT · inline E9/FF25 · SetWindowsHookEx" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: scanStatus === "scanning" && phase === "hooks" ? cover ? "正在核对入口…" : "正在对照入口字节…" : cover ? "采样后写入异常入口。" : "扫描注入图之后核对这些入口。" })
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: shown.map((h) => {
					const done = restored.has(h.id);
					const inQueue = queued.has(h.id);
					const on = expandedId === h.id || selectedIds.includes(h.id);
					const current = done ? h.original : h.patched;
					const disasm = done ? h.disasmOrig : h.disasmHook;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("w-full rounded-md px-3 py-2.5 text-left shadow-[var(--shadow-border)] min-h-11", on ? "bg-surface-2" : "bg-bg", done && "opacity-70"),
						onClick: () => {
							setExpanded(expandedId === h.id ? null : h.id);
							if (h.destNodeId) setSelectedNode(h.destNodeId);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: done ? "ok" : h.kind === "inline" ? "crit" : "high",
										children: cover ? "入口" : HOOK_KIND_LABEL[h.kind]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: cover ? h.fn : hookCaption(h)
									}),
									done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "ok",
										children: "已还原"
									}) : null,
									inQueue && !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "已入队" }) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 font-mono text-2xs text-muted",
								children: [
									h.process,
									"(",
									h.pid,
									") · ",
									h.method
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 grid gap-1 font-mono text-micro leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-subtle",
										children: [
											"原  ",
											h.original,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-2 text-subtle",
												children: h.disasmOrig
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: done ? "text-ok" : "text-crit",
										children: [
											"现  ",
											current,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "ml-2",
												children: disasm
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-muted",
										children: [
											"→ ",
											h.dest,
											" · ",
											h.destHint
										]
									})
								]
							})
						]
					}), !done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							disabled: locked || inQueue,
							onClick: () => planUnhook(h.id),
							children: inQueue ? "已入队" : copy.unhook
						})
					}) : null] }, h.id);
				})
			})
		]
	});
}
function ProcessTable() {
	const cover = useIRStore((s) => s.cover);
	const copy = cover ? COPY.cover : COPY.ops;
	const hostMode = useIRStore((s) => s.hostMode);
	const scenarioId = useIRStore((s) => s.scenarioId);
	const procs = useIRStore((s) => s.procs);
	const volumes = useIRStore((s) => s.volumes);
	const planned = useIRStore((s) => s.planned);
	const planKill = useIRStore((s) => s.planKill);
	const scanStatus = useIRStore((s) => s.scanStatus);
	const revealedIds = useIRStore((s) => s.revealedIds);
	const rows = procsFor(scenarioId, hostMode);
	const locked = scanStatus === "scanning" || scanStatus === "executing";
	const isolated = new Set(volumes.filter((v) => v.status === "isolated").map((v) => v.id));
	const dead = new Set(procs.filter((p) => p.status === "terminated").map((p) => p.pid));
	const queuedPids = new Set(planned.filter((p) => p.status === "queued" || p.status === "running").map((p) => lookupFinding(p.findingId)?.pid).filter((n) => n != null));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface p-3 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: copy.procs
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-2xs text-subtle tabular-nums",
					children: [
						rows.filter((r) => !dead.has(r.pid)).length,
						"/",
						rows.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-2xs text-subtle",
				children: cover ? "本机会话。结束任务只改采样表。" : hostMode === "physical" ? "物理主机会话进程表。结束写入处置队列，批准后从本表移除。不能向内核结束浏览器外的系统进程。" : "快照内的驻留进程。结束只作用于本控制台会话表。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-1",
				children: rows.map((p) => {
					const terminated = dead.has(p.pid);
					const volOff = isolated.has(p.volumeId);
					const letter = VOLUMES.find((v) => v.id === p.volumeId)?.letter ?? "";
					const hot = Boolean(p.findingId) && !p.benign;
					const hit = p.findingId ? revealedIds.includes(p.findingId) : false;
					const queued = queuedPids.has(p.pid);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex items-center gap-2 rounded-md px-2 py-1.5", terminated && "opacity-40", hot && !terminated ? "bg-surface-2" : ""),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-2xs text-subtle tabular-nums",
										children: ["PID ", p.pid]
									}),
									hot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "crit",
										children: cover ? "异常" : "可疑"
									}) : null,
									hit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "high",
										children: "检出"
									}) : null,
									terminated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "已结束" }) : null,
									volOff ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										tone: "ok",
										children: [letter, " 已隔离"]
									}) : null
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-0.5 truncate font-mono text-2xs text-subtle",
								children: [
									p.cpu.toFixed(1),
									"% · ",
									p.mem,
									letter ? ` · ${letter}` : "",
									" · ",
									p.path
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: hot ? "danger" : "outline",
							disabled: locked || terminated || p.protectedProc || queued,
							onClick: () => planKill(p),
							children: queued ? "已入队" : copy.kill
						})]
					}, p.id);
				})
			})
		]
	});
}
var TABS = [
	{
		id: "findings",
		ops: "检出",
		cover: "异常",
		icon: ListTree
	},
	{
		id: "graph",
		ops: "注入",
		cover: "会话图",
		icon: GitBranch
	},
	{
		id: "engines",
		ops: "引擎",
		cover: "模块",
		icon: SlidersHorizontal
	},
	{
		id: "queue",
		ops: "处置",
		cover: "待办",
		icon: Radar
	},
	{
		id: "protect",
		ops: "防护",
		cover: "稳定",
		icon: Shield
	}
];
function ConsoleApp() {
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
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const [versionClicks, setVersionClicks] = (0, import_react.useState)(0);
	useScanRunner();
	useWatchdog();
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.cover = cover ? "true" : "false";
		document.title = cover ? "资源监视" : "灰域 UMBRA";
	}, [cover]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "u") {
				e.preventDefault();
				useIRStore.getState().toggleCover();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		if (versionClicks >= 5) {
			setCover(false);
			setVersionClicks(0);
		}
	}, [versionClicks, setCover]);
	const scanning = scanStatus === "scanning";
	const canScan = scanStatus !== "executing";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-bg/95",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-1 items-center gap-2.5",
						children: [cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphMark, { className: "size-7 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EclipseMark, { className: "size-7 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "truncate text-base font-medium tracking-tight",
									children: copy.productFull
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-2xs text-subtle sm:inline",
									children: copy.tagline
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-mono text-2xs text-subtle",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: scenario.host
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-line",
										children: "/"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: scenario.os
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("rounded-xs px-1 py-px text-micro tracking-wide", hostMode === "physical" ? "bg-high/15 text-high" : cover ? "bg-surface-2 text-muted" : "bg-primary/15 text-primary"),
										children: hostMode === "physical" ? copy.physical : copy.lab
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "hidden sm:flex items-center gap-2 text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy.camouflage }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: cover,
								onCheckedChange: setCover,
								"aria-label": copy.camouflage
							})]
						}), scanning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: stopScan,
							children: copy.stop
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							disabled: !canScan,
							onClick: () => {
								beginScan();
								setTab("graph");
							},
							children: scanStatus === "idle" ? copy.scan : copy.rescan
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid max-w-7xl gap-6 px-4 py-5 pb-28 lg:grid-cols-[280px_minmax(0,1fr)] lg:pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngineRail, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectPanel, {})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "min-w-0 flex flex-col gap-4",
					children: [
						cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverChart, {}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLog, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InjectionGraph, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookPanel, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTable, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:hidden",
							children: [
								tab === "graph" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InjectionGraph, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HookPanel, {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessTable, {})
									]
								}) : null,
								tab === "engines" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EngineRail, {}) : null,
								tab === "protect" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectPanel, {}) : null,
								tab === "queue" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueuePanel, { onPreview: () => setPreviewOpen(true) }) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn(tab !== "findings" ? "hidden lg:block" : "block"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FindingsList, { onPreview: () => setPreviewOpen(true) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							children: planned.length > 0 || quarantine.length > 0 || backups.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueuePanel, { onPreview: () => setPreviewOpen(true) }) : null
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-bg/95 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 px-1 py-1",
					children: TABS.map((t) => {
						const Icon = t.icon;
						const on = tab === t.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setTab(t.id),
							className: cn("flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 rounded-sm text-micro", on ? "text-fg" : "text-subtle"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), cover ? t.cover : t.ops]
						}, t.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mx-auto max-w-7xl px-4 pb-28 lg:pb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-2xs leading-normal text-subtle",
						children: copy.disclaimer
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 px-2 text-2xs text-muted hover:text-fg",
							onClick: resetLab,
							children: copy.reset
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "font-mono text-2xs text-subtle",
							onClick: () => setVersionClicks((n) => n + 1),
							title: cover ? "连续点击五次返回控制台" : "Ctrl+Shift+U 切换伪装",
							children: cover ? "SysGraph 14.2" : "UMBRA 1.0 · Ctrl+Shift+U"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApproveDialog, {
				open: previewOpen,
				onOpenChange: setPreviewOpen
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsoleApp, {});
}
//#endregion
export { Home as component };
