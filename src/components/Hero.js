import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/lucas-lauriente-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/lucas-lauriente.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-5xl">
          <h1 className="text-5xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white/40 to-white/20 drop-shadow-2xl leading-tight">
            Lucas Lauriente.
          </h1>
          <p className="text-xl md:text-2xl text-white/70">Página no oficial</p>

          <Link
            href="#shows"
            className="inline-block mt-8 px-10 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black transition duration-300 font-semibold rounded-lg"
          >
            Ver mis shows
          </Link>
        </div>
      </div>
    </section>
  );
}
