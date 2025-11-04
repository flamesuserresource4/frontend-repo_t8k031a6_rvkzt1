import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
            <Shield size={18} />
          </div>
          <span className="font-semibold tracking-tight">Ethical AI Hub</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#principles" className="hover:text-gray-900 transition">Principles</a>
          <a href="#cta" className="hover:text-gray-900 transition">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
