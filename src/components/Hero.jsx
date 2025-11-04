import { Rocket, Shield, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.15),transparent_40%)] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-200">
            <Shield size={14} />
            Privacy-first • Safety by design
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Learn, build, and explore AI—
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> responsibly</span>
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            A modern, ethical AI playground focused on education, cybersecurity awareness, and best practices. No shady tools—just helpful knowledge.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2 shadow hover:bg-gray-800 transition">
              <Rocket size={16} /> Explore Features
            </a>
            <a href="#principles" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-900 px-4 py-2 ring-1 ring-gray-200 hover:ring-gray-300 transition">
              <Terminal size={16} /> Ethical Principles
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 ring-1 ring-black/5 shadow-inner" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 bg-white/70 backdrop-blur rounded-xl ring-1 ring-black/5 shadow-lg max-w-sm text-center">
              <p className="text-sm text-gray-700">
                Ethical AI Hub promotes secure, transparent, and human-centered AI development. Start with principles, then build with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
