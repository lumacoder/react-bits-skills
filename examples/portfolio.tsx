/**
 * React Bits 作品集示例
 * 展示：设计师/开发者个人作品网站
 * 自然语言描述："优雅个人作品集，丝绸质感背景，滚动浮现文字，瀑布流画廊，底部 Dock 导航"
 */

import { Silk } from "./components/Silk";
import { ScrollFloat } from "./components/ScrollFloat";
import { ScrollReveal } from "./components/ScrollReveal";
import { Masonry } from "./components/Masonry";
import { ProfileCard } from "./components/ProfileCard";
import { Dock } from "./components/Dock";
import { SpotlightCard } from "./components/SpotlightCard";
import { GradientText } from "./components/GradientText";
import { Magnet } from "./components/Magnet";

/* ============================================
   模拟数据
   ============================================ */
const projects = [
  {
    id: 1,
    title: "品牌视觉设计",
    category: "Branding",
    image: "/projects/project-1.jpg",
    height: 400,
  },
  {
    id: 2,
    title: "电商 App 界面",
    category: "UI/UX",
    image: "/projects/project-2.jpg",
    height: 300,
  },
  {
    id: 3,
    title: "3D 产品渲染",
    category: "3D",
    image: "/projects/project-3.jpg",
    height: 500,
  },
  {
    id: 4,
    title: "官网 redesign",
    category: "Web",
    image: "/projects/project-4.jpg",
    height: 350,
  },
  {
    id: 5,
    title: "插画创作",
    category: "Illustration",
    image: "/projects/project-5.jpg",
    height: 450,
  },
  {
    id: 6,
    title: "动效设计",
    category: "Motion",
    image: "/projects/project-6.jpg",
    height: 380,
  },
];

const skills = [
  { name: "UI Design", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "Motion Design", level: 85 },
  { name: "3D Modeling", level: 75 },
  { name: "Brand Identity", level: 88 },
];

/* ============================================
   Section 1: Hero with Silk Background
   ============================================ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* 背景 */}
      <Silk
        speed={0.5}
        scale={1}
        color="#6366f1"
        className="opacity-30"
      />

      {/* 内容 */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <ScrollFloat>
          <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6">
            Creative Designer & Developer
          </p>
        </ScrollFloat>

        <ScrollReveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <GradientText
              text="创造数字体验"
              colors={["#6366f1", "#a855f7", "#ec4899"]}
              animationSpeed={3}
              className="font-bold"
            />
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            专注于用户体验设计与前端开发，
            <br />
            用代码将创意变为现实
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <Magnet padding={50} magnetStrength={50}>
            <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors">
              查看作品
            </button>
          </Magnet>
        </ScrollReveal>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm animate-bounce">
        向下滚动
      </div>
    </section>
  );
}

/* ============================================
   Section 2: About with Profile Card
   ============================================ */
function AboutSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollFloat>
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            关于我
          </h2>
        </ScrollFloat>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 个人信息卡片 */}
          <ScrollReveal direction="left">
            <ProfileCard
              name="Alex Chen"
              role="Senior Designer"
              avatar="/avatar.jpg"
              bio="5年设计与开发经验，服务过50+国内外品牌。热爱探索新技术与设计的结合点。"
              socials={{
                twitter: "#",
                github: "#",
                dribbble: "#",
              }}
            />
          </ScrollReveal>

          {/* 技能展示 */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-white mb-2">
                    <span>{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Section 3: Portfolio Gallery with Masonry
   ============================================ */
function PortfolioSection() {
  return (
    <section className="py-24 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <ScrollFloat>
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            精选作品
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            涵盖品牌设计、UI/UX、动效设计与前端开发的全栈作品
          </p>
        </ScrollFloat>

        <Masonry
          data={projects.map((p) => ({
            id: p.id,
            image: p.image,
            title: p.title,
            category: p.category,
            height: p.height,
          }))}
          columns={3}
          gap={24}
          renderItem={(item) => (
            <SpotlightCard
              className="rounded-xl overflow-hidden bg-neutral-900 group cursor-pointer"
              spotlightColor="rgba(99, 102, 241, 0.15)"
            >
              <div
                className="relative bg-neutral-800"
                style={{ height: item.height }}
              >
                {/* 图片占位 */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-white/20">
                  <span className="text-6xl">🖼️</span>
                </div>

                {/* 悬停遮罩 */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 rounded-full border border-white/30 text-white text-sm">
                    查看详情
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </SpotlightCard>
          )}
        />
      </div>
    </section>
  );
}

/* ============================================
   Section 4: Contact CTA
   ============================================ */
function ContactSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollFloat>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            有项目想法？
          </h2>
        </ScrollFloat>

        <ScrollReveal delay={0.2}>
          <p className="text-xl text-white/70 mb-10">
            让我们一起将创意变为现实
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <Magnet padding={50}>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              <span>开始合作</span>
              <span>→</span>
            </a>
          </Magnet>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ============================================
   Section 5: Footer Dock
   ============================================ */
function Footer() {
  const items = [
    { icon: "🏠", label: "首页", href: "#" },
    { icon: "💼", label: "作品", href: "#portfolio" },
    { icon: "👤", label: "关于", href: "#about" },
    { icon: "✉️", label: "联系", href: "#contact" },
  ];

  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock items={items} panelHeight={64} />
    </footer>
  );
}

/* ============================================
   Full Portfolio Export
   ============================================ */
export default function Portfolio() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
