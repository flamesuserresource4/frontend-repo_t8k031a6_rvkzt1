export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Ethical AI Hub. Built for learning and safety.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-900 transition" href="#principles">Principles</a>
          <a className="hover:text-gray-900 transition" href="#features">Features</a>
          <a className="hover:text-gray-900 transition" href="#cta">Get Started</a>
        </div>
      </div>
    </footer>
  );
}
