export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full py-8 px-6 bg-black border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white/50 mb-2 text-sm">Redes sociales</p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="#"
            className="text-white/50 hover:text-red-500 transition text-sm"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-white/50 hover:text-red-500 transition text-sm"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-white/50 hover:text-red-500 transition text-sm"
          >
            TikTok
          </a>
        </div>
        <p className="text-white/30 text-xs">
          © 2026 Lucas Lauriente. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
