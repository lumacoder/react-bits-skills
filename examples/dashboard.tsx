/**
 * React Bits 数据大屏示例
 * 展示：科技感数据可视化界面
 * 自然语言描述："深色科技感主题，粒子背景，解密动画标题，聚光灯数据卡片，数字递增动画"
 */

import { Particles } from "./components/Particles";
import { DecryptedText } from "./components/DecryptedText";
import { SpotlightCard } from "./components/SpotlightCard";
import { CountUp } from "./components/CountUp";
import { AnimatedList } from "./components/AnimatedList";
import { GridScan } from "./components/GridScan";
import { Dock } from "./components/Dock";
import { GlareHover } from "./components/GlareHover";

/* ============================================
   模拟数据
   ============================================ */
const stats = [
  { label: "总用户数", value: 128456, suffix: "", color: "#3A29FF" },
  { label: "日活跃用户", value: 45231, suffix: "", color: "#FF94B4" },
  { label: "收入", value: 89.5, suffix: "K", prefix: "$", color: "#00D9FF" },
  { label: "转化率", value: 3.2, suffix: "%", color: "#FF3232" },
];

const recentActivities = [
  { user: "张小明", action: "完成订单 #2391", time: "2分钟前", type: "success" },
  { user: "李华", action: "注册新账号", time: "5分钟前", type: "info" },
  { user: "王芳", action: "升级至 Pro 版", time: "12分钟前", type: "success" },
  { user: "陈伟", action: "提交工单 #452", time: "18分钟前", type: "warning" },
  { user: "刘洋", action: "登录系统", time: "25分钟前", type: "info" },
];

const alerts = [
  { level: "critical", message: "服务器 CPU 使用率超过 90%", time: "刚刚" },
  { level: "warning", message: "数据库连接池接近上限", time: "5分钟前" },
  { level: "info", message: "每日备份完成", time: "1小时前" },
];

/* ============================================
   Section 1: Header with DecryptedText
   ============================================ */
function DashboardHeader() {
  return (
    <header className="relative px-6 py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            AI
          </div>
          <DecryptedText
            text="智能数据监控中心"
            speed={50}
            sequential={true}
            className="text-2xl font-bold text-white"
          />
        </div>
        <div className="flex items-center gap-6 text-sm text-white/60">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            系统正常
          </span>
          <span>{new Date().toLocaleString("zh-CN")}</span>
        </div>
      </div>
    </header>
  );
}

/* ============================================
   Section 2: Stats Grid with CountUp
   ============================================ */
function StatsGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, i) => (
        <SpotlightCard
          key={i}
          className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur"
          spotlightColor={`${stat.color}20`}
        >
          <p className="text-white/60 text-sm mb-2">{stat.label}</p>
          <div className="flex items-baseline gap-1">
            {stat.prefix && (
              <span className="text-2xl font-bold text-white">{stat.prefix}</span>
            )}
            <CountUp
              from={0}
              to={stat.value}
              duration={2 + i * 0.5}
              decimals={stat.value % 1 !== 0 ? 1 : 0}
              className="text-4xl font-bold"
              style={{ color: stat.color }}
            />
            <span className="text-xl font-bold" style={{ color: stat.color }}>
              {stat.suffix}
            </span>
          </div>
        </SpotlightCard>
      ))}
    </section>
  );
}

/* ============================================
   Section 3: Main Content Grid
   ============================================ */
function MainContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 左侧面板 - 实时活动 */}
      <GlareHover className="lg:col-span-2 rounded-xl bg-white/5 border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          实时活动
        </h3>
        <AnimatedList
          items={recentActivities.map((item) => ({
            id: item.user + item.time,
            content: (
              <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.type === "success"
                        ? "bg-green-500"
                        : item.type === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <span className="text-white font-medium">{item.user}</span>
                  <span className="text-white/60">{item.action}</span>
                </div>
                <span className="text-white/40 text-sm">{item.time}</span>
              </div>
            ),
          }))}
          delay={100}
        />
      </GlareHover>

      {/* 右侧面板 - 系统告警 */}
      <SpotlightCard
        className="rounded-xl bg-white/5 border border-white/10 p-6"
        spotlightColor="rgba(255, 50, 50, 0.1)"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          系统告警
        </h3>
        <div className="space-y-3">
          {alerts.map((alert, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg border ${
                alert.level === "critical"
                  ? "bg-red-500/10 border-red-500/30"
                  : alert.level === "warning"
                  ? "bg-yellow-500/10 border-yellow-500/30"
                  : "bg-blue-500/10 border-blue-500/30"
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  alert.level === "critical"
                    ? "text-red-400"
                    : alert.level === "warning"
                    ? "text-yellow-400"
                    : "text-blue-400"
                }`}
              >
                {alert.message}
              </p>
              <p className="text-white/40 text-xs mt-1">{alert.time}</p>
            </div>
          ))}
        </div>
      </SpotlightCard>
    </div>
  );
}

/* ============================================
   Section 4: Bottom Navigation
   ============================================ */
function BottomDock() {
  const items = [
    { icon: "📊", label: "概览", href: "#" },
    { icon: "👥", label: "用户", href: "#" },
    { icon: "💰", label: "收入", href: "#" },
    { icon: "⚙️", label: "设置", href: "#" },
  ];

  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock items={items} panelHeight={64} />
    </footer>
  );
}

/* ============================================
   Full Dashboard Export
   ============================================ */
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 背景层 */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleCount={80}
          particleColor="#3A29FF"
          speed={0.2}
          className="opacity-50"
        />
        <GridScan
          scanColor="#00D9FF"
          speed={0.5}
          className="opacity-20"
        />
      </div>

      {/* 内容层 */}
      <div className="relative z-10">
        <DashboardHeader />
        <main className="max-w-7xl mx-auto p-6 pb-32">
          <StatsGrid />
          <MainContent />
        </main>
      </div>

      <BottomDock />
    </div>
  );
}
