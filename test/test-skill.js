#!/usr/bin/env node

/**
 * React Bits UI Skill 测试脚本
 *
 * 用法:
 *   node test-skill.js              # 运行所有测试
 *   node test-skill.js --prompt     # 测试 Prompt 生成
 *   node test-skill.js --mapping    # 测试组件映射
 *   node test-skill.js --example    # 生成示例代码
 *
 * 在 Antigravity 中测试:
 *   直接复制生成的 prompt 到 Antigravity 中验证
 */

const fs = require('fs');
const path = require('path');

// 测试配置
const TEST_CONFIG = {
  skillPath: path.resolve(__dirname, '..'),
  outputDir: path.resolve(__dirname, 'output'),
};

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logHeader(title) {
  console.log('\n' + '='.repeat(60));
  log(title, 'bright');
  console.log('='.repeat(60));
}

// 测试 1: 验证 Skill 文件结构
function testSkillStructure() {
  logHeader('测试 1: Skill 文件结构验证');

  const requiredFiles = [
    'SKILL.md',
    'README.md',
    'resources/component-catalog.md',
    'resources/natural-language-guide.md',
    'resources/quick-start.md',
    'examples/landing-page.tsx',
  ];

  let passed = 0;
  let failed = 0;

  for (const file of requiredFiles) {
    const filePath = path.join(TEST_CONFIG.skillPath, file);
    if (fs.existsSync(filePath)) {
      log(`✓ ${file}`, 'green');
      passed++;
    } else {
      log(`✗ ${file} (缺失)`, 'red');
      failed++;
    }
  }

  console.log(`\n结果: ${passed} 通过, ${failed} 失败`);
  return failed === 0;
}

// 测试 2: Prompt 生成测试
function testPromptGeneration() {
  logHeader('测试 2: Prompt 生成测试');

  const testCases = [
    {
      name: '科技感 SaaS 落地页',
      description: '生成一个 SaaS 产品落地页，科技感强，有动画效果',
      expectedComponents: ['Aurora', 'BlurText', 'SpotlightCard', 'Dock'],
    },
    {
      name: '数据大屏',
      description: '做一个数据可视化大屏，深色主题，粒子背景，数字滚动',
      expectedComponents: ['Particles', 'CountUp', 'SpotlightCard'],
    },
    {
      name: '赛博朋克风格',
      description: '赛博朋克风格的个人主页，故障风文字，终端背景',
      expectedComponents: ['FaultyTerminal', 'GlitchText', 'PixelCard'],
    },
    {
      name: '作品集网站',
      description: '设计师作品集，优雅风格，瀑布流展示作品',
      expectedComponents: ['Silk', 'Masonry', 'ProfileCard'],
    },
    {
      name: '自然语言描述',
      description: '鼠标放上去有聚光灯效果的卡片，展示产品功能',
      expectedComponents: ['SpotlightCard'],
    },
  ];

  console.log('以下 Prompt 可用于测试 Antigravity 的组件匹配能力:\n');

  testCases.forEach((testCase, index) => {
    log(`${index + 1}. ${testCase.name}`, 'cyan');
    console.log(`   Prompt: "${testCase.description}"`);
    log(`   期望组件: ${testCase.expectedComponents.join(', ')}`, 'yellow');
    console.log();
  });

  // 生成测试文件
  const outputContent = testCases.map(tc => `
# ${tc.name}
Prompt: ${tc.description}
期望组件: ${tc.expectedComponents.join(', ')}

---
`).join('\n');

  const outputPath = path.join(TEST_CONFIG.outputDir, 'test-prompts.md');
  ensureDir(TEST_CONFIG.outputDir);
  fs.writeFileSync(outputPath, outputContent);
  log(`已生成测试 Prompt 文件: ${outputPath}`, 'green');

  return true;
}

// 测试 3: 组件映射验证
function testComponentMapping() {
  logHeader('测试 3: 组件映射验证');

  const mappingTests = [
    { keyword: '极光背景', component: 'Aurora' },
    { keyword: '粒子效果', component: 'Particles' },
    { keyword: '文字模糊淡入', component: 'BlurText' },
    { keyword: '解密动画', component: 'DecryptedText' },
    { keyword: '故障风', component: 'GlitchText' },
    { keyword: '光泽文字', component: 'ShinyText' },
    { keyword: '数字滚动', component: 'CountUp' },
    { keyword: '聚光灯卡片', component: 'SpotlightCard' },
    { keyword: '3D倾斜', component: 'TiltedCard' },
    { keyword: '玻璃效果', component: 'GlassSurface' },
    { keyword: 'macOS导航', component: 'Dock' },
    { keyword: '瀑布流', component: 'Masonry' },
    { keyword: '轮播', component: 'Carousel' },
  ];

  console.log('自然语言关键词 → 组件映射:\n');

  mappingTests.forEach(test => {
    log(`  "${test.keyword}"`, 'cyan');
    console.log(`    ↓`);
    log(`    ${test.component}`, 'green');
    console.log();
  });

  return true;
}

// 测试 4: 生成示例代码
function generateExamples() {
  logHeader('测试 4: 生成示例代码');

  const examples = [
    {
      name: 'hero-section',
      title: 'Hero 首屏示例',
      code: `import { Aurora } from "./components/Aurora";
import { BlurText } from "./components/BlurText";
import { ShinyText } from "./components/ShinyText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 px-4">
        <BlurText
          text="Build Something Amazing"
          delay={150}
          animateBy="words"
          className="text-5xl md:text-7xl font-bold text-white text-center"
        />
        <button className="mt-4 px-8 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition">
          <ShinyText text="Get Started →" speed={3} className="text-white font-medium" />
        </button>
      </div>
    </section>
  );
}`,
    },
    {
      name: 'feature-cards',
      title: '特性卡片示例',
      code: `import { SpotlightCard } from "./components/SpotlightCard";
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
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-neutral-400">{f.desc}</p>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-16 flex justify-center gap-16">
          <div className="text-center">
            <CountUp from={0} to={117} className="text-4xl font-bold text-white" />
            <p className="text-neutral-500 mt-1">Components</p>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    },
    {
      name: 'cyberpunk-hero',
      title: '赛博朋克 Hero',
      code: `import { FaultyTerminal } from "./components/FaultyTerminal";
import { GlitchText } from "./components/GlitchText";
import { LaserFlow } from "./components/LaserFlow";

export default function CyberpunkHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <FaultyTerminal
        glitchColors={["#00ff00", "#ff00ff", "#00ffff"]}
        speed={0.5}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-6 px-4">
        <GlitchText
          text="CYBERPUNK 2077"
          speed={2}
          className="text-6xl md:text-8xl font-bold text-white"
        />
        <LaserFlow className="w-64 h-1">
          <div className="px-8 py-3 bg-transparent" />
        </LaserFlow>
      </div>
    </section>
  );
}`,
    },
  ];

  ensureDir(TEST_CONFIG.outputDir);

  examples.forEach(example => {
    const filePath = path.join(TEST_CONFIG.outputDir, `${example.name}.tsx`);
    fs.writeFileSync(filePath, example.code);
    log(`✓ 生成: ${example.title} -> ${filePath}`, 'green');
  });

  console.log(`\n共生成 ${examples.length} 个示例文件`);
  return true;
}

// 测试 5: Antigravity 集成测试
function testAntigravityIntegration() {
  logHeader('测试 5: Antigravity 集成检查');

  const checks = [
    {
      name: 'Gemini 配置目录',
      path: '~/.gemini',
      exists: () => {
        try {
          const home = require('os').homedir();
          return fs.existsSync(path.join(home, '.gemini'));
        } catch {
          return false;
        }
      },
    },
    {
      name: 'Skills 目录',
      path: '~/.gemini/skills',
      exists: () => {
        try {
          const home = require('os').homedir();
          return fs.existsSync(path.join(home, '.gemini', 'skills'));
        } catch {
          return false;
        }
      },
    },
    {
      name: '本 Skill 已安装',
      path: '~/.gemini/skills/reactbits-ui-skills',
      exists: () => {
        try {
          const home = require('os').homedir();
          return fs.existsSync(path.join(home, '.gemini', 'skills', 'reactbits-ui-skills'));
        } catch {
          return false;
        }
      },
    },
  ];

  console.log('Antigravity 环境检查:\n');

  checks.forEach(check => {
    const exists = check.exists();
    const icon = exists ? '✓' : '✗';
    const color = exists ? 'green' : 'yellow';
    log(`${icon} ${check.name}`, color);
    console.log(`   路径: ${check.path}`);
    if (!exists) {
      console.log(`   提示: 需要安装或配置`);
    }
    console.log();
  });

  // 输出安装建议
  console.log('安装建议:\n');
  console.log('1. 确保 Antigravity 已安装:');
  console.log('   npm install -g @google/gemini-cli\n');
  console.log('2. 安装本 Skill:');
  console.log('   mkdir -p ~/.gemini/skills');
  console.log('   cd ~/.gemini/skills');
  console.log('   git clone https://github.com/lumacoder/reactbits-ui-skills.git\n');
  console.log('3. 验证安装:');
  console.log('   ls ~/.gemini/skills/reactbits-ui-skills/SKILL.md\n');

  return true;
}

// 测试 6: 生成测试报告
function generateReport() {
  logHeader('测试 6: 生成测试报告');

  const report = `# React Bits UI Skill 测试报告

生成时间: ${new Date().toLocaleString()}

## 测试摘要

- Skill 路径: ${TEST_CONFIG.skillPath}
- 输出目录: ${TEST_CONFIG.outputDir}

## 文件结构

${generateFileTree(TEST_CONFIG.skillPath)}

## 快速测试 Prompts

1. "帮我做一个科技感的数据大屏，粒子背景，解密标题"
2. "生成赛博朋克风格个人主页，故障风文字"
3. "做一个 SaaS 落地页，极光背景，聚光灯卡片"
4. "鼠标放上去有光效的卡片组件"
5. "数字从0开始滚动的动画效果"

## 验证方法

1. 在 Antigravity 中输入上述 Prompt
2. 检查 AI 是否正确识别组件名称
3. 检查生成的代码是否包含正确的 import 语句
4. 检查代码是否为有效的 TSX 语法

## 预期行为

- 输入 "极光背景" → 生成 Aurora 组件代码
- 输入 "文字模糊淡入" → 生成 BlurText 组件代码
- 输入 "鼠标光效卡片" → 生成 SpotlightCard 组件代码
- 输入 "数字滚动" → 生成 CountUp 组件代码
`;

  const reportPath = path.join(TEST_CONFIG.outputDir, 'test-report.md');
  ensureDir(TEST_CONFIG.outputDir);
  fs.writeFileSync(reportPath, report);
  log(`已生成测试报告: ${reportPath}`, 'green');

  return true;
}

// 辅助函数
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function generateFileTree(dir, prefix = '') {
  const items = fs.readdirSync(dir);
  let result = '';

  items.forEach((item, index) => {
    if (item.startsWith('.') || item === 'node_modules') return;

    const itemPath = path.join(dir, item);
    const isLast = index === items.length - 1;
    const itemPrefix = isLast ? '└── ' : '├── ';
    const childPrefix = isLast ? '    ' : '│   ';

    result += `${prefix}${itemPrefix}${item}\n`;

    if (fs.statSync(itemPath).isDirectory()) {
      result += generateFileTree(itemPath, prefix + childPrefix);
    }
  });

  return result;
}

// 主函数
function main() {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║     React Bits UI Skill 测试工具                          ║
║     用于验证 Skill 功能和生成测试用例                      ║
╚════════════════════════════════════════════════════════════╝
`);

  const args = process.argv.slice(2);
  const flags = {
    structure: args.includes('--structure') || args.length === 0,
    prompt: args.includes('--prompt') || args.length === 0,
    mapping: args.includes('--mapping') || args.length === 0,
    example: args.includes('--example') || args.length === 0,
    antigravity: args.includes('--antigravity') || args.length === 0,
    report: args.includes('--report') || args.length === 0,
    help: args.includes('--help') || args.includes('-h'),
  };

  if (flags.help) {
    console.log(`
用法: node test-skill.js [选项]

选项:
  --structure     测试 Skill 文件结构
  --prompt        生成测试 Prompts
  --mapping       测试组件映射
  --example       生成示例代码
  --antigravity   检查 Antigravity 集成
  --report        生成测试报告
  --help, -h      显示帮助

示例:
  node test-skill.js              # 运行所有测试
  node test-skill.js --prompt     # 仅生成测试 Prompts
  node test-skill.js --example    # 仅生成示例代码
`);
    return;
  }

  let allPassed = true;

  if (flags.structure) {
    allPassed = testSkillStructure() && allPassed;
  }

  if (flags.prompt) {
    allPassed = testPromptGeneration() && allPassed;
  }

  if (flags.mapping) {
    allPassed = testComponentMapping() && allPassed;
  }

  if (flags.example) {
    allPassed = generateExamples() && allPassed;
  }

  if (flags.antigravity) {
    allPassed = testAntigravityIntegration() && allPassed;
  }

  if (flags.report) {
    allPassed = generateReport() && allPassed;
  }

  // 总结
  console.log('\n' + '='.repeat(60));
  if (allPassed) {
    log('所有测试完成 ✓', 'green');
  } else {
    log('部分测试失败 ✗', 'red');
  }
  console.log('='.repeat(60));
  console.log(`\n输出目录: ${TEST_CONFIG.outputDir}`);
  console.log('\n下一步:');
  console.log('1. 查看生成的测试文件');
  console.log('2. 在 Antigravity 中使用测试 Prompts');
  console.log('3. 验证生成的代码是否符合预期');
}

main();
