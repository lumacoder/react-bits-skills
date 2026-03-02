# React Bits 组件速查表

> 117 个组件 · 4 大分类 · 每个组件含核心 Props 和适用场景

---

## 💬 TextAnimations（22 个）

| 组件                | 描述                | 核心 Props                              | 场景        |
| ------------------- | ------------------- | --------------------------------------- | ----------- |
| `ASCIIText`         | ASCII 字符渲染文字  | `text`, `enableWaves`                   | 极客风 Hero |
| `BlurText`          | 逐词/逐字模糊淡入   | `text`, `delay`, `animateBy`            | Hero 标题   |
| `CircularText`      | 环形旋转排列文字    | `text`, `radius`, `fontSize`            | 装饰徽章    |
| `CountUp`           | 数字递增动画        | `from`, `to`, `duration`                | 统计面板    |
| `CurvedLoop`        | 弧形循环滚动文字    | `text`, `speed`                         | 品牌标语    |
| `DecryptedText`     | 加密→解密文字效果   | `text`, `speed`, `sequential`           | 安全/科技   |
| `FallingText`       | 物理引擎掉落文字    | `text`, `trigger`                       | 趣味交互    |
| `FuzzyText`         | Canvas 模糊抖动文字 | `text`, `fontSize`, `fuzziness`         | 艺术标题    |
| `GlitchText`        | 故障/失真文字       | `text`, `speed`                         | 赛博朋克    |
| `GradientText`      | 动态渐变色文字      | `text`, `colors`, `animationSpeed`      | 品牌标题    |
| `RotatingText`      | 多词轮播旋转        | `texts`, `interval`                     | 多功能描述  |
| `ScrambledText`     | Hover 乱码效果      | `text`, `speed`, `scrambleChars`        | Hover 揭示  |
| `ScrollFloat`       | 滚动触发浮动        | `children`, `stiffness`                 | 长页面标题  |
| `ScrollReveal`      | 滚动渐显文字        | `children`, `threshold`                 | 内容区标题  |
| `ScrollVelocity`    | 速度感横向滚动      | `texts`, `velocity`, `direction`        | 跑马灯      |
| `ShinyText`         | 光泽扫过效果        | `text`, `speed`                         | CTA/徽章    |
| `Shuffle`           | 文字洗牌重排        | `text`, `trigger`                       | 列表切换    |
| `SplitText`         | 逐字进场动画        | `text`, `delay`, `animationFrom`        | 首屏标题    |
| `TextCursor`        | 光标跟随文字        | `text`, `cursorChar`                    | 打字机      |
| `TextPressure`      | 鼠标压力响应        | `text`, `weight`, `width`               | 交互标题    |
| `TextType`          | 打字机输入效果      | `text`, `speed`, `loop`                 | 终端/Bot    |
| `TrueFocus`         | 聚焦高亮词语        | `sentence`, `manualMode`                | 关键词强调  |
| `VariableProximity` | 鼠标距离变形        | `children`, `fromFontVariationSettings` | 交互Hero    |

---

## 🌀 Animations（27 个）

| 组件              | 描述          | 核心 Props                              | 场景         |
| ----------------- | ------------- | --------------------------------------- | ------------ |
| `AnimatedContent` | 内容进退场    | `children`, `direction`, `distance`     | 通用动效容器 |
| `Antigravity`     | 反重力悬浮    | `children`                              | 创意展示     |
| `BlobCursor`      | 流体跟随光标  | `blobType`, `fillColor`                 | 全局光标     |
| `ClickSpark`      | 点击产生火花  | `sparkColor`, `sparkCount`              | 点击反馈     |
| `Crosshair`       | 十字瞄准光标  | `color`, `size`                         | 科技主题     |
| `Cubes`           | 3D 立方体     | `cubeColor`                             | 加载/背景    |
| `ElectricBorder`  | 电流流动边框  | `children`, `color`                     | 卡片高亮     |
| `FadeContent`     | 淡入淡出      | `children`, `blur`, `duration`          | 内容切换     |
| `GhostCursor`     | 幽灵拖尾光标  | `color`                                 | 光标特效     |
| `GlareHover`      | 眩光 Hover    | `children`, `glareColor`                | 卡片悬停     |
| `GradualBlur`     | 渐进模糊      | `children`, `delay`                     | 渐显进场     |
| `ImageTrail`      | 图片拖尾      | `images`, `renderImageBuffer`           | 创意画廊     |
| `LaserFlow`       | 激光流动      | `children`, `color`                     | 科技边框     |
| `LogoLoop`        | Logo 无限滚动 | `logos`, `speed`                        | 品牌墙       |
| `Magnet`          | 磁吸效果      | `children`, `padding`, `magnetStrength` | 按钮交互     |
| `MagnetLines`     | 磁力线条      | `rows`, `columns`                       | 交互背景     |
| `MetaBalls`       | 融球效果      | `color`, `cursorBallSize`               | 艺术装饰     |
| `MetallicPaint`   | 金属漆质感    | `color`, `lightPosition`                | 高端展示     |
| `Noise`           | 噪点叠加      | `patternSize`, `opacity`                | 质感层       |
| `OrbitImages`     | 轨道旋转      | `images`, `orbitRadius`, `speed`        | 团队/产品    |
| `PixelTrail`      | 像素拖尾      | `pixelSize`, `fadeDuration`             | 光标效果     |
| `PixelTransition` | 像素转场      | `firstContent`, `secondContent`         | 图片切换     |
| `Ribbons`         | 丝带飘动      | `colors`, `baseThickness`               | 装饰背景     |
| `ShapeBlur`       | 形状模糊      | `shapeColor`, `blur`                    | 抽象装饰     |
| `SplashCursor`    | 泼墨光标      | `SIM_RESOLUTION`                        | 艺术/创意    |
| `StarBorder`      | 星光边框      | `children`, `color`, `speed`            | 推荐标记     |
| `StickerPeel`     | 贴纸撕开      | `stickerContent`, `backgroundContent`   | Hover卡片    |
| `TargetCursor`    | 目标瞄准      | `size`, `color`                         | 游戏风       |

---

## 🧩 Components（35 个）

| 组件              | 描述       | 核心 Props                         | 场景       |
| ----------------- | ---------- | ---------------------------------- | ---------- |
| `AnimatedList`    | 动画列表   | `items`, `delay`                   | 通知流     |
| `BounceCards`     | 弹跳卡片组 | `images`, `containerWidth`         | 团队展示   |
| `BubbleMenu`      | 气泡菜单   | `items`                            | 工具栏     |
| `CardNav`         | 卡片导航   | `items`                            | 分类导航   |
| `CardSwap`        | 卡片翻转   | `cards`                            | A/B 对比   |
| `Carousel`        | 轮播       | `items`, `autoplay`                | 内容轮播   |
| `ChromaGrid`      | 色彩网格   | `items`, `rows`, `cols`            | 图片画廊   |
| `CircularGallery` | 环形画廊   | `items`, `radius`                  | 作品集     |
| `Counter`         | 动画计数器 | `value`, `places`                  | 数据展示   |
| `DecayCard`       | 衰变卡片   | `children`                         | 时间线     |
| `Dock`            | macOS Dock | `items`, `panelHeight`             | 底栏导航   |
| `DomeGallery`     | 穹顶画廊   | `images`                           | 沉浸画廊   |
| `ElasticSlider`   | 弹性滑块   | `leftIcon`, `rightIcon`            | 范围选择   |
| `FlowingMenu`     | 流动菜单   | `items`                            | 全屏导航   |
| `FluidGlass`      | 流体玻璃   | `children`, `containerRef`         | 玻璃容器   |
| `FlyingPosters`   | 飞行海报   | `images`                           | 产品展示   |
| `Folder`          | 文件夹     | `color`, `items`                   | 文件管理   |
| `GlassIcons`      | 玻璃图标   | `items`, `size`                    | 功能图标   |
| `GlassSurface`    | 玻璃表面   | `children`, `blur`                 | 毛玻璃     |
| `GooeyNav`        | 粘连导航   | `items`                            | Tab 导航   |
| `InfiniteMenu`    | 无限菜单   | `items`                            | 3D 菜单    |
| `Lanyard`         | 吊牌/挂绳  | `position`                         | 个人名片   |
| `MagicBento`      | Bento 网格 | `children`                         | 功能展示   |
| `Masonry`         | 瀑布流     | `data`, `columns`                  | 图片瀑布流 |
| `ModelViewer`     | 3D 查看器  | `modelPath`                        | 3D 产品    |
| `PillNav`         | 胶囊导航   | `items`, `activeIndex`             | Tab 切换   |
| `PixelCard`       | 像素卡片   | `children`, `gap`                  | 复古风     |
| `ProfileCard`     | 资料卡     | `name`, `avatar`, `handle`         | 人物展示   |
| `ReflectiveCard`  | 反射卡片   | `children`                         | 高端产品   |
| `ScrollStack`     | 滚动堆叠   | `items`, `cardHeight`              | 特性展示   |
| `SpotlightCard`   | 聚光灯卡片 | `children`, `spotlightColor`       | 功能卡片   |
| `Stack`           | 堆叠卡片   | `items`, `randomRotation`          | 通知堆叠   |
| `StaggeredMenu`   | 交错菜单   | `items`                            | 移动端菜单 |
| `Stepper`         | 步骤条     | `steps`, `currentStep`             | 表单引导   |
| `TiltedCard`      | 倾斜卡片   | `imageSrc`, `altText`, `tiltAngle` | 3D 卡片    |

---

## 🖼️ Backgrounds（35 个）

| 组件             | 描述     | 核心 Props                         | 场景      |
| ---------------- | -------- | ---------------------------------- | --------- |
| `Aurora`         | 极光渐变 | `colorStops`, `amplitude`, `speed` | 暗色 Hero |
| `Balatro`        | 扑克纹理 | `color1`, `color2`                 | 游戏风    |
| `Ballpit`        | 物理球坑 | `count`, `gravity`, `size`         | 趣味      |
| `Beams`          | 光束     | `beamWidth`, `beamColor`           | SaaS Hero |
| `ColorBends`     | 色彩弯曲 | `colors`                           | 艺术      |
| `DarkVeil`       | 暗幕     | `intensity`                        | 暗色 Hero |
| `Dither`         | 点阵抖动 | `waveColor`, `disableAnimation`    | 复古      |
| `DotGrid`        | 点阵网格 | `dotSize`, `dotColor`, `gap`       | 极简      |
| `FaultyTerminal` | 故障终端 | `glitchColors`, `speed`            | 开发者    |
| `FloatingLines`  | 浮动线条 | `lineColor`, `lineCount`           | 商务      |
| `Galaxy`         | 星系     | `starCount`, `speed`               | 太空      |
| `GradientBlinds` | 渐变百叶 | `colors`, `blindCount`             | 过渡      |
| `Grainient`      | 噪点渐变 | `colors`, `grainIntensity`         | 质感      |
| `GridDistortion` | 网格扭曲 | `grid`, `mouse`                    | 交互      |
| `GridMotion`     | 网格运动 | `items`, `gradientColor`           | 图片网格  |
| `GridScan`       | 网格扫描 | `scanColor`, `speed`               | 安全/科技 |
| `Hyperspeed`     | 超速星际 | `starCount`, `speed`               | 加载      |
| `Iridescence`    | 虹彩     | `color`, `mouseReactive`           | 高端      |
| `LetterGlitch`   | 字母故障 | `glitchColors`, `glitchSpeed`      | 科技      |
| `LightPillar`    | 光柱     | `color`, `width`                   | 聚焦      |
| `LightRays`      | 光线放射 | `rayCount`, `color`                | 发布      |
| `Lightning`      | 闪电     | `color`, `boltCount`               | 能量      |
| `LiquidChrome`   | 液态铬   | `baseColor`, `speed`               | 金属      |
| `LiquidEther`    | 液态以太 | `colors`, `speed`                  | 梦幻      |
| `Orb`            | 光球     | `hue`                              | 装饰      |
| `Particles`      | 粒子     | `particleCount`, `particleColor`   | 通用科技  |
| `PixelBlast`     | 像素爆炸 | `pixelSize`, `colors`              | 冲击      |
| `PixelSnow`      | 像素雪花 | `snowColor`, `density`             | 节日      |
| `Plasma`         | 等离子   | `colors`, `speed`                  | 科幻      |
| `Prism`          | 棱镜     | `colors`, `lightAngle`             | 色彩      |
| `PrismaticBurst` | 棱镜爆发 | `colors`, `intensity`              | 庆典      |
| `RippleGrid`     | 涟漪网格 | `rippleColor`, `speed`             | 交互      |
| `Silk`           | 丝绸     | `speed`, `scale`, `color`          | 优雅      |
| `Squares`        | 方块     | `squareSize`, `direction`, `speed` | 几何      |
| `Threads`        | 线程     | `color`, `amplitude`               | 连接      |
| `Waves`          | 波浪     | `lineColor`, `waveSpeedX`          | 分区      |
