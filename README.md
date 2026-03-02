<p align="center">
  <img src="https://reactbits.dev/favicon.ico" alt="React Bits Logo" width="80" />
</p>

<h1 align="center">🎨 React Bits Skills</h1>

<p align="center">
  <strong>让 AI 生成的前端不再丑陋 — 基于 React Bits 框架的 AI UI 生成能力库</strong>
</p>

<p align="center">
  <a href="https://reactbits.dev"><img src="https://img.shields.io/badge/React_Bits-117+_Components-blue?style=for-the-badge&logo=react" alt="Components"></a>
  <a href="https://github.com/DavidHDev/react-bits"><img src="https://img.shields.io/badge/GitHub-15k+_Stars-yellow?style=for-the-badge&logo=github" alt="Stars"></a>
  <a href="#"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"></a>
</p>

---

## 🤔 这个项目解决什么问题？

> **前端工程师的焦虑：AI 生成的页面为什么总是那么丑？**

你是否遇到过这些场景：

- 🎭 让 AI 生成一个落地页，结果拿到的是 **2015 年审美的 Bootstrap 风格**
- 😩 想要一个科技感大屏，AI 给你的却是 **毫无动效的静态表格**
- 🔄 反复 prompt 调整，**耗费大量时间**却始终达不到设计师水准
- 💀 客户看到 AI 生成的 demo，直接说 **"这不行"**

**React Bits Skills 的核心使命：** 让 AI 真正理解现代前端动效组件库，**从根本上解决 AI 生成 UI "太丑" 的问题**。

通过将 [React Bits](https://reactbits.dev) 框架的 **117+ 精品动效组件** 编码为 AI 可理解的技能知识，使 AI 能够：

1. **精准选择组件** — 根据用户描述自动匹配最合适的动效组件
2. **正确组合搭配** — 背景 + 文字动画 + 交互组件的黄金组合
3. **输出生产级代码** — 可直接复制使用的完整 TSX 代码

---

## 🖥️ 案例演示：AI 数字大屏

> 仅通过一句话描述，AI 即可生成一个专业级公司数字大屏界面：

![AI 数字大屏演示 — 由 React Bits Skills 驱动，一句话生成企业级科技感数据可视化大屏](public/demo.gif)

**Prompt 示例：**

```
生成一个公司的 AI 数字大屏，要求：
- 深色科技感主题
- 顶部标题带解密动画效果
- 左右两侧数据面板带聚光灯卡片
- 中间区域展示核心指标（数字递增动画）
- 底部粒子效果背景
```

**AI 自动选择的 React Bits 组件：**

|   区域   |          组件          |         效果          |
| :------: | :--------------------: | :-------------------: |
|   背景   | `Particles` + `Aurora` | 科技感粒子 + 极光渐变 |
|   标题   |    `DecryptedText`     |   字符逐个解密显现    |
| 数据卡片 |    `SpotlightCard`     |  鼠标跟随聚光灯效果   |
| 核心指标 |       `CountUp`        |   数字从 0 递增动画   |
|   列表   |     `AnimatedList`     |    列表项依次进场     |
|   导航   |         `Dock`         |  macOS 风格底部导航   |

---

## 🧩 组件能力覆盖

React Bits Skills 覆盖 **4 大类、117+ 组件**，完整映射 React Bits 生态：

```
📦 react-bits-skills
├── 💬 TextAnimations（25 个） — 文字动画：模糊、解密、故障、渐变、打字机...
├── 🌀 Animations（30 个）    — 交互动效：流体光标、磁吸、像素转场、丝带...
├── 🧩 Components（35 个）    — UI 组件：聚光灯卡片、3D 画廊、瀑布流、Dock...
└── 🖼️ Backgrounds（37 个）   — 动态背景：极光、粒子、星系、液态铬、闪电...
```

### 🔥 高频使用组件 TOP 10

| 排名 | 组件            | 一句话描述      | 典型场景      |
| :--: | :-------------- | :-------------- | :------------ |
|  1   | `Aurora`        | 极光背景        | Hero 首屏背景 |
|  2   | `BlurText`      | 文字模糊淡入    | 大标题动效    |
|  3   | `SpotlightCard` | 聚光灯卡片      | 功能特性展示  |
|  4   | `CountUp`       | 数字递增        | 数据统计面板  |
|  5   | `ShinyText`     | 光泽滑过文字    | CTA 按钮      |
|  6   | `Particles`     | 粒子背景        | 科技感页面    |
|  7   | `DecryptedText` | 解密效果        | 科技/安全主题 |
|  8   | `GlareHover`    | 眩光悬停        | 卡片交互高亮  |
|  9   | `Dock`          | macOS Dock 导航 | 底部导航栏    |
|  10  | `ScrollFloat`   | 滚动浮动        | 长页面标题    |

---

## 🚀 快速上手

### 1. 作为 AI Skill 使用

将本项目配置为你的 AI 编码助手的 Skill，AI 即可在开发前端页面时**自动调用 React Bits 组件**：

```bash
# 克隆到你的 skills 目录
git clone https://github.com/lumacoder/react-bits-skills.git
```

### 2. 触发词

在与 AI 对话时，使用以下关键词即可激活本 Skill：

| 触发词                            | 说明               |
| :-------------------------------- | :----------------- |
| `react-bits` / `reactbits`        | 直接调用框架       |
| `动效组件` / `animated component` | 需要动画效果的组件 |
| `落地页` / `landing page`         | 生成完整页面场景   |
| `hero section`                    | 首屏区域           |
| `前端页面开发`                    | 通用前端开发请求   |
| `数字大屏` / `数据可视化`         | 数据展示场景       |

### 3. 使用示例

```
用户：帮我生成一个 SaaS 产品的落地页，要求科技感强，有动画效果

AI（激活 React Bits Skills 后）：
  ✅ 背景 → Aurora 极光 + Particles 粒子
  ✅ 标题 → BlurText 模糊淡入 + SplitText 逐字分裂
  ✅ 功能卡 → SpotlightCard 聚光灯 + CountUp 数据统计
  ✅ 价格 → GlareHover 眩光 + StarBorder 推荐标记
  ✅ CTA → ShinyText 光泽按钮
  ✅ 导航 → Dock macOS 风格
```

---

## 📁 项目结构

```
react-bits-skills/
├── SKILL.md                       # 核心 Skill 定义（AI 读取此文件）
├── README.md                      # 项目说明
├── public/
│   └── demo.gif                   # 演示动图
├── examples/
│   └── landing-page.tsx           # 完整落地页示例代码
└── resources/
    └── component-catalog.md       # 组件详细目录
```

---

## 🎯 场景速查表

| 你想做什么      | 推荐组合                                                                       |
| :-------------- | :----------------------------------------------------------------------------- |
| **Hero 首屏**   | `Aurora`/`Silk` 背景 + `BlurText`/`SplitText` 标题 + `ShinyText` CTA           |
| **功能展示**    | `SpotlightCard`/`MagicBento` 卡片 + `Counter` + `GlareHover` 悬停              |
| **数据大屏**    | `Particles` 背景 + `CountUp` 指标 + `AnimatedList` 列表 + `DecryptedText` 标题 |
| **团队/作品集** | `CircularGallery`/`Masonry` 画廊 + `ProfileCard` 人物卡                        |
| **品牌合作墙**  | `LogoLoop` 品牌滚动 + `ScrollVelocity` 跑马灯                                  |
| **定价页**      | `TiltedCard`/`ReflectiveCard` + `StarBorder` 推荐标记                          |
| **科技/开发者** | `FaultyTerminal`/`Particles` 背景 + `DecryptedText`/`GlitchText` 文字          |
| **导航菜单**    | `Dock`/`PillNav`/`GooeyNav` 导航 + `FlowingMenu` 全屏菜单                      |

---

## 🔗 相关链接

- 🌐 [React Bits 官方文档](https://reactbits.dev)
- 🏆 [React Bits Pro](https://pro.reactbits.dev) — 65+ Premium Blocks
- ⭐ [React Bits GitHub](https://github.com/DavidHDev/react-bits)

---

## 📄 License

MIT © [LumaCoder](https://github.com/lumacoder)

---

<p align="center">
  <strong>🌟 如果这个项目帮到了你，请给一个 Star！</strong><br/>
  <sub>让前端工程师不再焦虑 AI 没有审美，生成的"丑页面" 🎉</sub>
</p>
