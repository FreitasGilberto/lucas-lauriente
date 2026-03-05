export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <div className="text-lg md:text-2xl font-bold">// Comediante</div>
        <div className="flex gap-4 md:gap-8 text-sm md:text-base">
          <a href="#shows" className="hover:text-red-500 transition">
            Shows
          </a>
          <a href="#about" className="hover:text-red-500 transition">
            Sobre mí
          </a>
          <a href="#contact" className="hover:text-red-500 transition">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
