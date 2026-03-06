export default function ShowCard({ show }) {
  return (
    <div
      className={`group relative p-8 border rounded-lg transition duration-300 ${
        show.soldOut
          ? "border-zinc-700 bg-zinc-900/30 cursor-not-allowed opacity-75"
          : "border-zinc-800 hover:border-red-500 cursor-pointer hover:bg-zinc-900/50"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-red-500 font-bold text-sm mb-2">// {show.date}</p>
          <h3 className="text-2xl font-black">{show.venue}</h3>
        </div>
        <div className="text-right">
          {show.soldOut ? (
            <p className="text-red-600 font-bold text-lg">SOLD OUT</p>
          ) : (
            <p className="text-white/50 text-lg font-semibold">{show.time}</p>
          )}
        </div>
      </div>
      {!show.soldOut && (
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-transparent w-0 group-hover:w-full transition-all duration-300 rounded-full"></div>
      )}
    </div>
  );
}
