# Antigravity 使用指南

> 本文档专门针对 [Antigravity](https://github.com/google-gemini/antigravity) 环境配置 React Bits UI Skill

## 什么是 Antigravity?

Antigravity 是 Google 推出的基于 Gemini 的 AI 编程助手，支持通过 skills 扩展能力。React Bits UI Skill 让 Antigravity 能够生成美观的前端界面。

## 安装配置

### 方式一：Skills 目录安装（推荐）

```bash
# 1. 进入 antigravity skills 目录
cd ~/.gemini/skills/

# 2. 克隆本仓库
git clone https://github.com/lumacoder/reactbits-ui-skills.git

# 3. 验证安装
ls -la ~/.gemini/skills/reactbits-ui-skills/
# 应该看到: SKILL.md, README.md, resources/, examples/
```

### 方式二：项目本地配置

在你的项目根目录创建 `.antigravity/skills/`:

```bash
mkdir -p .antigravity/skills
cd .antigravity/skills
git clone https://github.com/lumacoder/reactbits-ui-skills.git
```

### 方式三：配置文件中指定

编辑 `~/.gemini/config.json`:

```json
{
  "skills": [
    "/path/to/reactbits-ui-skills"
  ],
  "default_model": "gemini-2.0-pro",
  "temperature": 0.2
}
```

## 使用方式

### 触发 Skill

在 Antigravity 对话中使用以下关键词触发：

```
react-bits, reactbits, 动效组件, 落地页, landing page,
hero section, animated component, 前端页面开发, 做个页面
```

### 示例对话

#### 示例 1：完全自然语言

**用户输入:**
```
帮我做一个科技感的数据大屏，要有粒子背景，标题像解密一样显示，
数据用卡片展示，鼠标放上去有光效，数字要滚动增加
```

**Antigravity 会:**
1. 识别需求意图 → 数据大屏 + 科技感
2. 自动匹配组件:
   - "粒子背景" → `Particles`
   - "像解密一样" → `DecryptedText`
   - "鼠标放上去有光效" → `SpotlightCard`
   - "数字滚动" → `CountUp`
3. 生成完整 TSX 代码

#### 示例 2：指定风格

**用户输入:**
```
生成一个赛博朋克风格的个人主页，故障风文字效果，背景要有终端的感觉
```

**Antigravity 会:**
- 背景: `FaultyTerminal`
- 标题: `GlitchText`
- 卡片: `PixelCard`
- 边框: `LaserFlow`

#### 示例 3：具体区块

**用户输入:**
```
给我的 landing page 加一个首屏，要极光背景，大标题要有动画，
下面放个发光的按钮
```

**Antigravity 会:**
- 背景: `Aurora`
- 标题: `BlurText`
- 按钮: `ShinyText`

## Antigravity 特有功能

### 1. 代码片段生成

Antigravity 支持生成可直接使用的代码片段：

```bash
# 生成后可以直接保存到文件
antigravity > "生成一个 Hero 组件，极光背景，模糊淡入标题" > hero.tsx
```

### 2. 上下文感知

Antigravity 会根据你的项目上下文推荐组件：

```bash
# 如果检测到 Next.js 项目
antigravity > "生成一个页面"
# 会自动使用 Next.js 的页面结构
```

### 3. 多轮对话优化

```
用户: 生成一个登录页
AI: [生成基础登录页]
用户: 加点科技感，背景要有粒子效果
AI: [添加 Particles 背景]
用户: 标题要像解密一样
AI: [将标题替换为 DecryptedText]
```

## 常用 Prompt 模板

### 模板 1：快速页面生成

```
帮我生成一个 {页面类型}，要求：
- 风格: {科技感/极简/赛博朋克/优雅}
- 背景: {极光/粒子/丝绸/网格}
- 标题: {模糊淡入/逐字显示/解密动画}
- 内容: {卡片/画廊/数据展示}
- 导航: {Dock/胶囊导航/全屏菜单}
```

### 模板 2：组件级需求

```
需要一个 {组件描述}：
- 效果: {鼠标光效/3D倾斜/玻璃质感}
- 用途: {展示功能/数据统计/用户列表}
- 交互: {悬停效果/点击反馈/滚动动画}
```

### 模板 3：风格改造

```
把现有的 {组件/页面} 改成 {风格} 风格：
- 参考: {具体描述或参考网站}
- 重点: {背景/文字/卡片/动效}
```

## 实战案例

### 案例 1：SaaS 落地页

**Prompt:**
```
生成一个 SaaS 产品的落地页，极简科技风：
1. 首屏：极光渐变背景，大标题模糊淡入，副标题逐字显示，发光 CTA 按钮
2. 特性区：3 个聚光灯卡片展示核心功能
3. 数据区：数字递增动画展示用户量
4. 底部：macOS 风格 Dock 导航
```

### 案例 2：电商数据大屏

**Prompt:**
```
做一个电商实时数据监控大屏：
- 深色主题，粒子背景加网格扫描效果
- 顶部解密动画标题
- 四个核心指标卡片（销售额、订单量、用户数、转化率），数字滚动动画
- 左侧实时订单列表，带进场动画
- 右侧系统告警面板
- 底部 Dock 导航
```

### 案例 3：个人作品集

**Prompt:**
```
设计一个设计师作品集网站：
- 优雅风格，丝绸质感背景
- 首屏大标题渐变色彩，滚动浮动效果
- 关于我区块：个人卡片 + 技能进度条
- 作品展示：瀑布流画廊，聚光灯悬停效果
- 联系方式：磁吸按钮效果
```

## 故障排除

### Skill 未激活

**症状:** Antigravity 没有使用 React Bits 组件

**解决:**
1. 检查 skill 路径是否正确
2. 在对话开头明确提及 "react-bits" 触发词
3. 检查 `~/.gemini/config.json` 配置

### 组件不匹配

**症状:** AI 选择的组件不符合预期

**解决:**
1. 使用更具体的描述，如 "极光背景" 而非 "好看的背景"
2. 直接说明风格，如 "赛博朋克风格"
3. 参考自然语言指南中的关键词

### 代码格式问题

**症状:** 生成的代码有语法错误

**解决:**
1. 明确要求 "TypeScript + Tailwind CSS"
2. 要求 "完整的可运行代码"
3. 检查 framer-motion 是否已安装

## 最佳实践

1. **先描述风格，再描述细节**
   ```
   ✅ "赛博朋克风格的登录页，故障风文字，终端背景"
   ❌ "用 GlitchText 和 FaultyTerminal 做登录页"
   ```

2. **分区块描述**
   ```
   ✅ "首屏要... 特性区要... 底部要..."
   ```

3. **使用对比描述**
   ```
   ✅ "像 Mac 那样的 Dock 导航"
   ✅ "像解密一样显示文字"
   ```

4. **提供参考**
   ```
   ✅ "类似 Stripe 官网的首屏效果"
   ```

## 相关资源

- [自然语言使用指南](./natural-language-guide.md)
- [完整组件目录](./component-catalog.md)
- [快速上手指南](./quick-start.md)
- [React Bits 官方文档](https://reactbits.dev)

## 获取帮助

如果在 Antigravity 中使用遇到问题：

1. 检查本仓库 Issues
2. 查看 Antigravity 官方文档
3. 尝试简化 Prompt，逐步增加复杂度
