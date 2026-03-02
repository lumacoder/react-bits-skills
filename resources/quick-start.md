# React Bits 快速上手指南

## 1 分钟快速开始

### 方式一：直接描述需求（推荐）

你不需要知道任何组件名，直接告诉 AI 你想要什么效果：

```
"帮我做个科技感落地页，要有极光背景，标题淡入动画，
 卡片鼠标放上去有光效，底部是 Mac 风格的导航"
```

AI 会自动匹配：
- `Aurora` - 极光背景
- `BlurText` - 标题淡入
- `SpotlightCard` - 聚光灯卡片
- `Dock` - Mac 风格导航

### 方式二：按场景使用

| 场景 | 直接说 |
|-----|-------|
| SaaS 产品页 | "SaaS 落地页，科技感" |
| 数据大屏 | "数据可视化大屏，深色主题" |
| 作品集 | "个人作品集网站，优雅风格" |
| 公司官网 | "企业官网，商务风格" |
| 赛博朋克 | "赛博朋克风格页面" |

## 5 分钟了解核心组件

### 最常用的 10 个组件

| 组件 | 一句话描述 | 什么时候用 |
|-----|-----------|-----------|
| `Aurora` | 极光渐变背景 | 暗色主题页面背景 |
| `Particles` | 粒子效果背景 | 科技感页面背景 |
| `BlurText` | 文字模糊淡入 | 页面大标题 |
| `SplitText` | 文字逐字显示 | 需要强调的首屏标题 |
| `ShinyText` | 光泽扫过文字 | CTA 按钮、强调文案 |
| `SpotlightCard` | 聚光灯卡片 | 功能特性展示 |
| `CountUp` | 数字递增动画 | 数据统计、成就展示 |
| `Dock` | Mac 风格导航 | 底部导航栏 |
| `GlareHover` | 眩光悬停效果 | 卡片交互增强 |
| `GlitchText` | 故障风格文字 | 赛博朋克主题 |

### 按页面区块选择

```
首屏 Hero
├── 背景: Aurora / Particles / Silk
├── 标题: BlurText / SplitText / DecryptedText
├── 副标题: ScrollFloat / ScrollReveal
└── 按钮: ShinyText

特性展示
├── 卡片: SpotlightCard / MagicBento / TiltedCard
├── 统计: CountUp / Counter
└── 列表: AnimatedList

画廊/作品
├── 瀑布流: Masonry
├── 环形: CircularGallery
└── 轮播: Carousel

导航
├── 底部: Dock
├── 顶部: PillNav / GooeyNav
└── 全屏: FlowingMenu
```

## 项目结构

```
reactbits-ui-skills/
├── SKILL.md                          # AI 核心技能定义
├── README.md                         # 项目说明
├── resources/
│   ├── component-catalog.md          # 完整组件目录
│   └── natural-language-guide.md     # 自然语言使用指南
├── examples/
│   ├── landing-page.tsx              # 落地页示例
│   ├── dashboard.tsx                 # 数据大屏示例
│   └── portfolio.tsx                 # 作品集示例
└── public/
    └── demo.gif                      # 演示动图
```

## 多工具配置

### Claude Code
```bash
# 已内置支持，直接使用
```

### OpenCode
```bash
opcode skill add reactbits-ui-skills /path/to/skill
```

### Gemini CLI
```bash
git clone https://github.com/lumacoder/reactbits-ui-skills.git \
  ~/.gemini/skills/reactbits-ui-skills
```

### Cursor
在项目根目录创建 `.cursor/rules/reactbits.mdc`：
```markdown
---
name: React Bits
description: React Bits UI 组件框架专家
globs: "*.tsx"
---

当用户需要开发前端页面或 UI 组件时，优先使用 React Bits 框架的组件...
[粘贴 SKILL.md 核心内容]
```

## 下一步

1. 查看 [自然语言使用指南](./natural-language-guide.md) - 学习如何用自然语言描述需求
2. 查看 [完整组件目录](./component-catalog.md) - 了解所有 117+ 个组件
3. 查看 [examples](../examples/) - 参考完整页面示例代码

## 常见问题

**Q: 我不知道组件名怎么办？**
A: 没关系！用自然语言描述效果，比如 "鼠标放上去有光效"，AI 会自动匹配 `SpotlightCard`。

**Q: 如何描述想要的风格？**
A: 直接说 "科技感"、"赛博朋克"、"极简优雅" 等，AI 会自动组合对应的组件。

**Q: 组件需要安装吗？**
A: React Bits 是 copy-paste 模式，直接复制源码到项目中即可。部分组件依赖 `framer-motion`。

**Q: 支持哪些框架？**
A: 目前主要针对 React + TypeScript + Tailwind CSS，这也是最推荐的组合。
