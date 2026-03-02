/**
 * React Bits 落地页示例
 * 展示如何组合使用多个 React Bits 组件构建完整页面
 * 变体：TypeScript + Tailwind CSS（TS-TW）
 */

import { Aurora } from "./components/Aurora";
import { BlurText } from "./components/BlurText";
import { ShinyText } from "./components/ShinyText";
import { SplitText } from "./components/SplitText";
import { SpotlightCard } from "./components/SpotlightCard";
import { CountUp } from "./components/CountUp";
import { LogoLoop } from "./components/LogoLoop";
import { ScrollFloat } from "./components/ScrollFloat";
import { Dock } from "./components/Dock";
import { GlareHover } from "./components/GlareHover";
import { Particles } from "./components/Particles";
import { StarBorder } from "./components/StarBorder";

/* ============================================
   Section 1: Hero
   背景：Aurora | 标题：BlurText | CTA：ShinyText
   ============================================ */
function HeroSection() {
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
          text="Ship Stunning Interfaces"
          delay={120}
          animateBy="words"
          className="text-5xl md:text-7xl font-bold text-white text-center"
        />
        <SplitText
          text="Production-ready animated components for React."
          delay={50}
          className="text-lg text-white/60 max-w-xl text-center"
        />
        <button className="mt-6 px-8 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-colors">
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

/* ============================================
   Section 2: Logo Carousel
   组件：LogoLoop
   ============================================ */
function LogoSection() {
  const logos = [
    { src: "/logos/company-1.svg", alt: "Company 1" },
    { src: "/logos/company-2.svg", alt: "Company 2" },
    { src: "/logos/company-3.svg", alt: "Company 3" },
    { src: "/logos/company-4.svg", alt: "Company 4" },
    { src: "/logos/company-5.svg", alt: "Company 5" },
  ];

  return (
    <section className="py-16 bg-neutral-950 border-y border-neutral-800">
      <p className="text-center text-sm text-neutral-500 mb-8 tracking-widest uppercase">
        Trusted by innovative teams
      </p>
      <LogoLoop logos={logos} speed={20} />
    </section>
  );
}

/* ============================================
   Section 3: Features
   组件：SpotlightCard + CountUp + ScrollFloat
   ============================================ */
function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "0 runtime dependencies. Tree-shakeable. Minimal bundle impact.",
    },
    {
      icon: "🎨",
      title: "Beautifully Crafted",
      desc: "Pixel-perfect components designed by top creative developers.",
    },
    {
      icon: "🔧",
      title: "Fully Customizable",
      desc: "Tweak every prop, edit the source, make it truly yours.",
    },
    {
      icon: "📱",
      title: "Responsive",
      desc: "Tested across devices. Works seamlessly on mobile and desktop.",
    },
    {
      icon: "🔒",
      title: "TypeScript Ready",
      desc: "Full type safety with strict mode. IntelliSense out of the box.",
    },
    {
      icon: "🚀",
      title: "Copy & Own",
      desc: "No vendor lock-in. Copy the code, own it forever.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <ScrollFloat>
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Why React Bits?
          </h2>
        </ScrollFloat>
        <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to build memorable interfaces, without starting
          from scratch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <SpotlightCard
              key={i}
              className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800"
              spotlightColor="rgba(58, 41, 255, 0.15)"
            >
              <span className="text-4xl">{f.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* 统计数据 */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20">
          {[
            { to: 117, label: "Components" },
            { to: 4, label: "Variants" },
            { to: 15000, label: "GitHub Stars", separator: "," },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <CountUp
                from={0}
                to={stat.to}
                separator={stat.separator}
                className="text-5xl font-bold text-white"
              />
              <p className="text-neutral-500 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Section 4: Pricing
   组件：GlareHover + StarBorder
   ============================================ */
function PricingSection() {
  const plans = [
    {
      name: "Open Source",
      price: "Free",
      desc: "110+ animated components for personal & commercial use.",
      features: [
        "110+ Components",
        "4 Code Variants",
        "Community Support",
        "MIT License",
      ],
      cta: "Browse Components",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$99",
      desc: "Premium blocks, templates, and priority support.",
      features: [
        "Everything in Free",
        "65+ Pro Components",
        "100+ Blocks",
        "5 Templates",
        "Priority Support",
      ],
      cta: "Get Lifetime Access",
      highlighted: true,
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-black">
      <Particles particleCount={40} particleColor="#ffffff" speed={0.3} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollFloat>
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Simple Pricing
          </h2>
        </ScrollFloat>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => {
            const Card = plan.highlighted ? StarBorder : "div";
            return (
              <Card key={i} className="rounded-2xl">
                <GlareHover className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 h-full">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-4xl font-bold text-white mt-4">
                    {plan.price}
                  </p>
                  <p className="text-neutral-400 mt-2 text-sm">{plan.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-neutral-300"
                      >
                        <span className="text-green-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full py-3 rounded-xl font-medium transition-colors ${
                      plan.highlighted
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-neutral-800 text-white hover:bg-neutral-700"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </GlareHover>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Section 5: CTA + Footer
   组件：Dock 导航
   ============================================ */
function CTASection() {
  return (
    <section className="py-24 px-4 bg-neutral-950 text-center">
      <ScrollFloat>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Ship?
        </h2>
      </ScrollFloat>
      <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
        Start building with React Bits today. Copy, customize, and ship.
      </p>
      <button className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
        <ShinyText text="Get Started for Free" speed={3} />
      </button>
    </section>
  );
}

function FooterDock() {
  const items = [
    { icon: "📖", label: "Docs", href: "https://reactbits.dev" },
    {
      icon: "⭐",
      label: "GitHub",
      href: "https://github.com/DavidHDev/react-bits",
    },
    { icon: "💎", label: "Pro", href: "https://pro.reactbits.dev" },
    { icon: "🐦", label: "Twitter", href: "#" },
  ];

  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock items={items} panelHeight={68} />
    </footer>
  );
}

/* ============================================
   Full Page Export
   ============================================ */
export default function LandingPage() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <LogoSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
      <FooterDock />
    </main>
  );
}
