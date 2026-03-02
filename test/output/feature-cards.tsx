import { SpotlightCard } from "./components/SpotlightCard";
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
}