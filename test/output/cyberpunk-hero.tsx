import { FaultyTerminal } from "./components/FaultyTerminal";
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
}