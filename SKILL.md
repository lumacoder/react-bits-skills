---
name: reactbits-ui-skills
description: React Bits UI 组件框架专家。在开发前端页面时，总是优先使用 react-bits 框架的组件产出标准化代码。触发词：react-bits、reactbits、动效组件、落地页、landing page、hero section、animated component、前端页面开发。
---

# React Bits UI Skill

> **角色**：你是 React Bits 框架专家。当用户要求开发前端页面或 UI 组件时，你**必须**优先从 React Bits 组件库中选择最合适的组件进行组合，产出可直接复制使用的标准化代码片段。

## 核心原则

1. **框架优先**：所有可视化/动效需求，先查组件目录，命中则必用
2. **聚焦组件**：只产出页面/组件代码，**不涉及**脚手架、路由、构建配置
3. **默认变体**：TS + Tailwind（TS-TW），用户明确要求时切换
4. **代码完整**：产出包含 import、Props、样式的完整可运行代码块

## 三步工作流

```
用户需求 → ❶ 需求解析 → ❷ 组件映射 → ❸ 代码产出
```

### ❶ 需求解析

- 提取关键意图：页面类型（落地页/展示页/仪表盘）、内容区块（Hero/Features/Pricing/CTA）、视觉风格（极简/炫酷/科技感）
- 如果需求模糊，主动追问 1-2 个关键问题

### ❷ 组件映射

- 根据意图查阅下方**组件速查索引**，选择最匹配的组件
- 说明选择理由（一句话）
- 如需多组件组合，列出组合方案

### ❸ 代码产出

- 产出完整 TSX 代码块，遵循下方代码规范
- 每个组件标注文档链接供用户深度定制

## 代码规范

```tsx
// ✅ 标准 import 格式（组件为本地 copy-paste 文件）
import { BlurText } from './components/BlurText';
import { Aurora } from './components/Aurora';

// ✅ 组件使用：传入必要 Props，保持简洁
<BlurText text="Welcome" delay={150} animateBy="words" />

// ✅ 布局：用 Tailwind 容器包裹 react-bits 组件
<div className="relative min-h-screen overflow-hidden">
  <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} />
  <div className="relative z-10 flex items-center justify-center min-h-screen">
    <BlurText text="Hello World" className="text-6xl font-bold text-white" />
  </div>
</div>
```

### 安装说明（按需附加）

```bash
# shadcn CLI（推荐）
npx shadcn@latest add "@react-bits/BlurText-TS-TW"

# 或 jsrepo CLI
npx jsrepo add github/DavidHDev/react-bits/TextAnimations/BlurText
```

## 组件速查索引

> 格式：`组件名` — 用途 | 场景标签

### 💬 TextAnimations（文字动画）

| 组件                | 用途               | 场景                |
| ------------------- | ------------------ | ------------------- |
| `ASCIIText`         | ASCII 字符艺术文字 | 极客风、创意着陆页  |
| `BlurText`          | 模糊淡入文字动画   | Hero 标题、首屏     |
| `CircularText`      | 环形旋转文字       | 徽章、Logo 装饰     |
| `CountUp`           | 数字递增动画       | 数据统计、成就展示  |
| `CurvedLoop`        | 曲线循环文字       | 品牌标语、装饰      |
| `DecryptedText`     | 解密效果文字       | 科技感、安全主题    |
| `FallingText`       | 物理掉落文字       | 趣味交互、游戏风    |
| `FuzzyText`         | 模糊抖动文字       | 艺术感标题          |
| `GlitchText`        | 故障风格文字       | 赛博朋克、科技感    |
| `GradientText`      | 渐变色文字         | 品牌标题、强调文案  |
| `RotatingText`      | 文字轮播切换       | 多功能描述、Tagline |
| `ScrambledText`     | 乱码解码文字       | Hover 交互、揭示    |
| `ScrollFloat`       | 滚动浮动文字       | 长页面、阅读体验    |
| `ScrollReveal`      | 滚动渐显文字       | 内容区域标题        |
| `ScrollVelocity`    | 速度感滚动文字     | 跑马灯、品牌展示    |
| `ShinyText`         | 光泽扫过文字       | CTA 按钮文案、徽章  |
| `Shuffle`           | 文字洗牌动画       | 列表切换、随机展示  |
| `SplitText`         | 逐字/逐词分裂动画  | 首屏标题动效        |
| `TextCursor`        | 光标跟随文字       | 打字机效果          |
| `TextPressure`      | 鼠标压力感应文字   | 交互式标题          |
| `TextType`          | 打字机效果         | 代码展示、Bot 消息  |
| `TrueFocus`         | 聚焦高亮文字       | 关键词强调          |
| `VariableProximity` | 鼠标距离变形文字   | 交互式 Hero         |

### 🌀 Animations（动画/动效）

| 组件              | 用途           | 场景               |
| ----------------- | -------------- | ------------------ |
| `AnimatedContent` | 内容进退场动画 | 通用内容动效包裹   |
| `Antigravity`     | 反重力悬浮效果 | 创意展示           |
| `BlobCursor`      | 流体光标跟随   | 全局光标美化       |
| `ClickSpark`      | 点击火花效果   | 点击反馈、趣味交互 |
| `Crosshair`       | 十字准星光标   | 精准/科技主题      |
| `Cubes`           | 3D 立方体动画  | 科技背景、加载     |
| `ElectricBorder`  | 电流边框效果   | 卡片/按钮高亮      |
| `FadeContent`     | 淡入淡出内容   | 通用内容切换       |
| `GhostCursor`     | 幽灵跟随光标   | 光标拖尾效果       |
| `GlareHover`      | 眩光悬停效果   | 卡片 Hover         |
| `GradualBlur`     | 渐进模糊动画   | 内容渐显           |
| `ImageTrail`      | 图片拖尾效果   | 创意画廊、艺术     |
| `LaserFlow`       | 激光流动效果   | 科技风边框         |
| `LogoLoop`        | Logo 无限循环  | 合作品牌展示       |
| `Magnet`          | 磁吸效果       | 按钮/元素交互      |
| `MagnetLines`     | 磁力线条动画   | 交互式背景         |
| `MetaBalls`       | 融球效果       | 抽象艺术、加载     |
| `MetallicPaint`   | 金属漆质感     | 高端质感展示       |
| `Noise`           | 噪点/颗粒效果  | 质感叠加           |
| `OrbitImages`     | 轨道旋转图片   | 产品/团队展示      |
| `PixelTrail`      | 像素拖尾       | 光标效果           |
| `PixelTransition` | 像素化转场     | 图片/页面切换      |
| `Ribbons`         | 丝带飘动效果   | 装饰性背景         |
| `ShapeBlur`       | 形状模糊动画   | 抽象装饰           |
| `SplashCursor`    | 泼墨光标效果   | 创意/艺术站点      |
| `StarBorder`      | 星光边框动画   | 卡片/按钮装饰      |
| `StickerPeel`     | 贴纸撕开效果   | 趣味卡片交互       |
| `TargetCursor`    | 目标瞄准光标   | 游戏/竞技主题      |

### 🧩 Components（UI 组件）

| 组件              | 用途            | 场景              |
| ----------------- | --------------- | ----------------- |
| `AnimatedList`    | 列表进场动画    | 动态列表、通知流  |
| `BounceCards`     | 弹跳卡片组      | 团队/产品展示     |
| `BubbleMenu`      | 气泡弹出菜单    | 悬浮工具栏        |
| `CardNav`         | 卡片导航        | 分类导航          |
| `CardSwap`        | 卡片翻转切换    | Before/After 对比 |
| `Carousel`        | 轮播组件        | 图片/内容轮播     |
| `ChromaGrid`      | 色彩网格        | 图片网格展示      |
| `CircularGallery` | 环形画廊        | 作品集展示        |
| `Counter`         | 动画计数器      | 统计数据展示      |
| `DecayCard`       | 衰变卡片        | 时间线/历史       |
| `Dock`            | macOS 风格 Dock | 底部导航栏        |
| `DomeGallery`     | 穹顶画廊        | 沉浸式画廊        |
| `ElasticSlider`   | 弹性滑块        | 范围选择器        |
| `FlowingMenu`     | 流动菜单        | 全屏导航          |
| `FluidGlass`      | 流体玻璃效果    | 磨砂玻璃卡片      |
| `FlyingPosters`   | 飞行海报        | 作品/产品展示     |
| `Folder`          | 文件夹组件      | 文件管理 UI       |
| `GlassIcons`      | 玻璃态图标      | 功能图标组        |
| `GlassSurface`    | 玻璃质感表面    | 毛玻璃容器        |
| `GooeyNav`        | 粘连导航        | 底部 Tab 导航     |
| `InfiniteMenu`    | 无限滚动菜单    | 3D 菜单           |
| `Lanyard`         | 挂绳/吊牌       | 个人名片          |
| `MagicBento`      | 魔法 Bento 网格 | 功能展示网格      |
| `Masonry`         | 瀑布流布局      | 图片/作品瀑布流   |
| `ModelViewer`     | 3D 模型查看器   | 产品 3D 展示      |
| `PillNav`         | 胶囊导航        | Tab 切换          |
| `PixelCard`       | 像素风卡片      | 游戏/复古风       |
| `ProfileCard`     | 个人资料卡      | 用户/团队展示     |
| `ReflectiveCard`  | 反射卡片        | 高端产品展示      |
| `ScrollStack`     | 滚动堆叠        | 特性逐层展示      |
| `SpotlightCard`   | 聚光灯卡片      | 核心功能展示      |
| `Stack`           | 堆叠卡片        | 通知/消息堆叠     |
| `StaggeredMenu`   | 交错出场菜单    | 移动端菜单        |
| `Stepper`         | 步骤条          | 表单流程/引导     |
| `TiltedCard`      | 倾斜卡片        | 3D 视差卡片       |

### 🖼️ Backgrounds（动态背景）

| 组件             | 用途           | 场景           |
| ---------------- | -------------- | -------------- |
| `Aurora`         | 极光背景       | Hero、暗色主题 |
| `Balatro`        | 扑克牌纹理背景 | 游戏/趣味      |
| `Ballpit`        | 球坑物理效果   | 趣味/创意      |
| `Beams`          | 光束效果       | 科技/SaaS      |
| `ColorBends`     | 色彩弯曲       | 艺术/创意      |
| `DarkVeil`       | 暗幕背景       | 暗色 Hero      |
| `Dither`         | 抖动/点阵      | 复古风         |
| `DotGrid`        | 点阵网格       | 极简/技术文档  |
| `FaultyTerminal` | 故障终端       | 开发者/黑客风  |
| `FloatingLines`  | 浮动线条       | 极简/商务      |
| `Galaxy`         | 星系背景       | 太空/科幻      |
| `GradientBlinds` | 渐变百叶窗     | 过渡区域       |
| `Grainient`      | 噪点渐变       | 高端/质感      |
| `GridDistortion` | 网格扭曲       | 交互式背景     |
| `GridMotion`     | 网格运动       | 图片网格背景   |
| `GridScan`       | 网格扫描       | 科技/安全      |
| `Hyperspeed`     | 超速星际       | 加载/过渡      |
| `Iridescence`    | 虹彩效果       | 高端/时尚      |
| `LetterGlitch`   | 字母故障       | 科技背景       |
| `LightPillar`    | 光柱效果       | 聚焦/高亮      |
| `LightRays`      | 光线放射       | 展示/发布      |
| `Lightning`      | 闪电效果       | 力量/能量      |
| `LiquidChrome`   | 液态铬         | 高端/金属      |
| `LiquidEther`    | 液态以太       | 梦幻/流动      |
| `Orb`            | 光球           | 装饰/背景点缀  |
| `Particles`      | 粒子效果       | 通用科技背景   |
| `PixelBlast`     | 像素爆炸       | 游戏/冲击      |
| `PixelSnow`      | 像素雪花       | 季节/节日      |
| `Plasma`         | 等离子体       | 科幻/能量      |
| `Prism`          | 棱镜折射       | 色彩/艺术      |
| `PrismaticBurst` | 棱镜爆发       | 发布/庆典      |
| `RippleGrid`     | 涟漪网格       | 交互式背景     |
| `Silk`           | 丝绸流动       | 优雅/时尚      |
| `Squares`        | 方块动画       | 极简/几何      |
| `Threads`        | 线程/纤维      | 科技/连接      |
| `Waves`          | 波浪效果       | 分区过渡       |

## 场景→组件速查

| 场景需求        | 推荐组合                                                               |
| --------------- | ---------------------------------------------------------------------- |
| **Hero 首屏**   | `Aurora`/`Silk` 背景 + `BlurText`/`SplitText` 标题 + `ShinyText` CTA   |
| **功能展示**    | `SpotlightCard`/`MagicBento` 卡片 + `Counter` 统计 + `GlareHover` 悬停 |
| **团队/作品**   | `CircularGallery`/`Masonry` 画廊 + `ProfileCard` 人物卡                |
| **品牌合作**    | `LogoLoop` 品牌墙 + `ScrollVelocity` 跑马灯                            |
| **定价页**      | `TiltedCard`/`ReflectiveCard` 价格卡 + `StarBorder` 推荐标记           |
| **导航/菜单**   | `Dock`/`PillNav`/`GooeyNav` 导航 + `FlowingMenu` 全屏菜单              |
| **科技/开发者** | `FaultyTerminal`/`Particles` 背景 + `DecryptedText`/`GlitchText` 文字  |
| **数据统计**    | `CountUp` 数字 + `Counter` 组件 + `AnimatedList` 列表                  |

## 代码产出模板

### Hero Section 模板

```tsx
import { Aurora } from "./components/Aurora";
import { BlurText } from "./components/BlurText";
import { ShinyText } from "./components/ShinyText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* 背景层 */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />

      {/* 内容层 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 px-4">
        <BlurText
          text="Build Something Amazing"
          delay={150}
          animateBy="words"
          className="text-5xl md:text-7xl font-bold text-white text-center"
        />
        <p className="text-lg text-white/70 max-w-2xl text-center">
          Ship stunning interfaces faster with production-ready animated
          components.
        </p>
        <button className="mt-4 px-8 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition">
          <ShinyText
            text="Get Started →"
            speed={3}
            className="text-white font-medium"
          />
        </button>
      </div>
    </section>
  );
}
```

### Feature Cards 模板

```tsx
import { SpotlightCard } from "./components/SpotlightCard";
import { GlareHover } from "./components/GlareHover";
import { CountUp } from "./components/CountUp";

const features = [
  { icon: "⚡", title: "Lightning Fast", desc: "Optimized for performance" },
  { icon: "🎨", title: "Beautiful UI", desc: "Pixel-perfect components" },
  { icon: "🔧", title: "Customizable", desc: "Tweak everything via props" },
];

export default function FeatureSection() {
  return (
    <section className="py-24 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <SpotlightCard
              key={i}
              className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-neutral-400">{f.desc}</p>
            </SpotlightCard>
          ))}
        </div>

        {/* 统计数据 */}
        <div className="mt-16 flex justify-center gap-16">
          <div className="text-center">
            <CountUp
              from={0}
              to={117}
              className="text-4xl font-bold text-white"
            />
            <p className="text-neutral-500 mt-1">Components</p>
          </div>
          <div className="text-center">
            <CountUp
              from={0}
              to={10000}
              separator=","
              className="text-4xl font-bold text-white"
            />
            <p className="text-neutral-500 mt-1">Downloads</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 重要提示

- **文档链接**：`https://reactbits.dev/text-animations/{组件名}` / `https://reactbits.dev/animations/{组件名}` / `https://reactbits.dev/components/{组件名}` / `https://reactbits.dev/backgrounds/{组件名}`
- **Pro 版组件**（65+ Blocks）需 Pro License：`https://pro.reactbits.dev`
- 组件为 **copy-paste** 模式，无 npm 包依赖，直接复制源码到项目中
- 部分组件依赖 `framer-motion`，需确保项目已安装
