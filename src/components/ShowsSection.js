import ShowCard from "./ShowCard";

export default function ShowsSection({ shows }) {
  return (
    <section
      id="shows"
      className="w-full py-32 px-6 bg-black border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Próximos Shows
          </h2>
          <div className="w-16 h-1 bg-red-500"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>

        <div className="text-center">
          <button className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 font-semibold rounded-lg cursor-pointer">
            Comprar entradas
          </button>
        </div>
      </div>
    </section>
  );
}
