import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function Principles() {
  const principles = [
    {
      title: 'Do No Harm',
      text: 'Avoid building or sharing tools intended for fraud, exploitation, or privacy invasion.'
    },
    {
      title: 'Respect Privacy',
      text: 'Minimize data collection, anonymize when possible, and obtain informed consent.'
    },
    {
      title: 'Be Transparent',
      text: 'Communicate capabilities and limitations clearly to users and stakeholders.'
    },
    {
      title: 'Security First',
      text: 'Follow best practices, threat-model early, and ship secure defaults.'
    }
  ];

  return (
    <section id="principles" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Ethical Principles</h2>
          <p className="mt-2 text-gray-600">Four simple rules to guide responsible AI development.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-10 text-white shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold">Ready to explore ethical AI?</h3>
          <p className="mt-2 text-white/90 max-w-2xl">Start learning best practices, experiment with safe prompts, and share knowledge with a community focused on positive impact.</p>
          <div className="mt-6">
            <a href="#features" className="inline-block rounded-lg bg-white text-gray-900 px-4 py-2 font-medium shadow hover:opacity-95 transition">Start Learning</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Principles />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
