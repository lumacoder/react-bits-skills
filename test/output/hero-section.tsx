import { Aurora } from "./components/Aurora";
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
}