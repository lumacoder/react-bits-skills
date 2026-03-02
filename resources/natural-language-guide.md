# React Bits 自然语言使用指南

> 不知道怎么用组件名？没关系！用自然语言描述，AI 会自动帮你匹配最佳组件。

## 🎯 核心用法

你不需要知道组件叫什么，只需要描述你想要的效果：

| ❌ 旧方式（需要知道组件名） | ✅ 新方式（自然语言描述） |
|-------------------------|------------------------|
| "用 Aurora 做背景" | "想要极光渐变背景" |
| "SpotlightCard 展示功能" | "卡片鼠标放上去有聚光灯效果" |
| "BlurText 做标题" | "大标题要有模糊淡入动画" |
| "Dock 做导航" | "底部导航像 Mac 那样" |

## 💬 常用自然语言描述对照

### 背景效果

| 你说 | AI 会选择 |
|-----|----------|
| "科技感背景" / "星空效果" / "粒子效果" | `Particles` |
| "极光背景" / "渐变流动" / "彩色光带" | `Aurora` |
| "光束效果" / "射线背景" | `Beams` |
| "网格背景" / "极简点阵" | `DotGrid` |
| "丝绸质感" / "优雅流动" | `Silk` |
| "赛博朋克风" / "故障终端" | `FaultyTerminal` |
| "网格扫描" / "雷达效果" | `GridScan` |
| "液态金属" / "流动质感" | `LiquidChrome` |

### 文字动画

| 你说 | AI 会选择 |
|-----|----------|
| "文字模糊淡入" / "标题有动画" | `BlurText` |
| "文字一个个字出来" / "逐字显示" | `SplitText` |
| "像解密一样显示" / "黑客风文字" | `DecryptedText` |
| "故障风格" / "赛博朋克文字" | `GlitchText` |
| "有光泽扫过" / "闪闪发光" | `ShinyText` |
| "打字机效果" / "逐字输入" | `TextType` |
| "渐变色文字" / "彩虹字" | `GradientText` |
| "滚动时浮现" / "滚动出现" | `ScrollReveal` |
| "滚动时浮动" / "视差文字" | `ScrollFloat` |
| "环形排列文字" / "旋转文字" | `CircularText` |

### 卡片组件

| 你说 | AI 会选择 |
|-----|----------|
| "鼠标放上去有光" / "聚光灯效果" | `SpotlightCard` |
| "眩光悬停" / "光晕效果" | `GlareHover` |
| "3D倾斜卡片" / "鼠标跟随倾斜" | `TiltedCard` |
| "玻璃效果" / "毛玻璃质感" | `GlassSurface` |
| "卡片翻转" / "正反面切换" | `CardSwap` |
| "反射效果" / "镜面卡片" | `ReflectiveCard` |
| "像素风格卡片" / "复古游戏风" | `PixelCard` |

### 数据展示

| 你说 | AI 会选择 |
|-----|----------|
| "数字从0开始涨" / "数字滚动" | `CountUp` |
| "数字计数器" / "统计动画" | `Counter` |
| "列表进场动画" / "列表依次出现" | `AnimatedList` |

### 导航

| 你说 | AI 会选择 |
|-----|----------|
| "Mac底部导航" / "Dock栏" | `Dock` |
| "胶囊导航" / "Tab切换" | `PillNav` |
| "粘连导航" / "流体Tab" | `GooeyNav` |
| "全屏菜单" / "流动菜单" | `FlowingMenu` |
| "气泡菜单" / "悬浮工具栏" | `BubbleMenu` |

### 画廊/展示

| 你说 | AI 会选择 |
|-----|----------|
| "瀑布流" / "Pinterest风格" | `Masonry` |
| "环形画廊" / "圆形排列图片" | `CircularGallery` |
| "轮播图" / "滑动切换" | `Carousel` |
| "穹顶画廊" / "3D画廊" | `DomeGallery` |
| "飞行海报" / "悬浮展示" | `FlyingPosters` |

### 动效增强

| 你说 | AI 会选择 |
|-----|----------|
| "点击有火花" / "点击反馈" | `ClickSpark` |
| "磁吸效果" / "按钮被吸过去" | `Magnet` |
| "Logo滚动" / "品牌墙" | `LogoLoop` |
| "星光边框" / "发光边框" | `StarBorder` |
| "电流边框" / "激光边框" | `ElectricBorder` / `LaserFlow` |

## 🎨 按风格描述

直接告诉 AI 你想要的风格：

```
"我要做一个赛博朋克风格的落地页"
→ AI 自动组合：FaultyTerminal背景 + GlitchText + PixelCard + LaserFlow

"想要一个极简优雅的官网"
→ AI 自动组合：Silk背景 + BlurText + GlassSurface卡片 + FadeContent

"科技公司数据大屏"
→ AI 自动组合：Particles背景 + DecryptedText + CountUp + AnimatedList

"复古游戏风格"
→ AI 自动组合：PixelBlast背景 + ASCIIText + PixelCard + ClickSpark
```

## 📍 按页面区块描述

描述你的页面结构：

```
"首屏要有震撼效果"
→ Aurora/Silk背景 + BlurText/SplitText标题 + ShinyText按钮

"展示产品特性"
→ SpotlightCard/MagicBento网格 + CountUp统计数据

"客户评价区域"
→ AnimatedList滚动列表 + ScrollReveal渐显

"价格方案对比"
→ TiltedCard/ReflectiveCard + StarBorder推荐标记

"团队介绍"
→ ProfileCard + CircularGallery/Masonry
```

## 🔥 实战示例

### 示例 1：完全自然语言

**用户说：**
> 帮我做个产品落地页，要科技感强一点。首屏要有炫酷的背景，大标题要一个一个地显示出来，下面放几个卡片展示功能，鼠标放上去要有光效。再加点数据统计，数字要从零开始涨。

**AI 理解并匹配：**
- "科技感强的背景" → `Particles` 或 `Aurora`
- "大标题一个一个显示" → `SplitText`
- "卡片...鼠标放上去有光效" → `SpotlightCard`
- "数字从零开始涨" → `CountUp`

### 示例 2：风格导向

**用户说：**
> 我想做一个赛博朋克风格的个人主页，要有故障风的感觉。

**AI 理解并匹配：**
- "赛博朋克风格" → `FaultyTerminal` 背景
- "故障风" → `GlitchText` 标题 + `PixelCard` 内容卡片
- 整体暗色 + 霓虹配色

### 示例 3：具体效果描述

**用户说：**
> 需要一个数据仪表盘，背景要有粒子效果，标题要像解密一样显示，数据用卡片展示，数字要有动画。

**AI 理解并匹配：**
- "粒子背景" → `Particles`
- "像解密一样" → `DecryptedText`
- "卡片展示" → `SpotlightCard` 或 `GlassSurface`
- "数字动画" → `CountUp`

## 💡 提示技巧

1. **描述效果，而不是组件名**
   - ✅ "鼠标放上去有聚光灯"
   - ❌ "用 SpotlightCard"

2. **描述风格，让 AI 组合**
   - ✅ "科技感 SaaS 落地页"
   - ❌ "用 Aurora + BlurText + SpotlightCard"

3. **描述页面区块功能**
   - ✅ "首屏标题区" / "特性展示区" / "数据统计区"

4. **混合使用也可以**
   - "想要极光背景（Aurora），标题用模糊淡入效果"

## 📚 常见自然语言关键词库

### 背景类
- 科技感、粒子、星空、流动、渐变、极光、光束、网格、丝绸、赛博、故障、扫描、液态

### 文字类
- 模糊、淡入、逐字、解密、故障、光泽、打字机、渐变、滚动浮现、浮动、环形

### 交互类
- 聚光灯、眩光、3D倾斜、玻璃、翻转、磁吸、点击反馈、发光边框

### 数据类
- 数字增长、计数器、列表动画、统计

### 导航类
- Dock、胶囊、Tab、全屏菜单、气泡

### 风格类
- 科技感、极简、优雅、赛博朋克、复古、游戏风、商务
