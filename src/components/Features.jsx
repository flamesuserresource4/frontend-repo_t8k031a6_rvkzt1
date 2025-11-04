import { Lock, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Safety by Default',
    desc: 'Built around privacy, transparency, and responsible use guidelines.'
  },
  {
    icon: Lock,
    title: 'Security Awareness',
    desc: 'Understand common threats and learn defense-first development.'
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    desc: 'Curated articles, checklists, and patterns for ethical AI.'
  },
  {
    icon: Sparkles,
    title: 'Open Community',
    desc: 'Collaborative, inclusive, and focused on positive impact.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What you can do here</h2>
          <p className="mt-2 text-gray-600">Explore tools and content that help you build AI responsibly.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
