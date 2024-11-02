export default function MovieCard({ movie }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img
          className="w-full"
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie.Title}</div>
          <p className="text-gray-700 text-base">
            Год: {movie.Year}
          </p>
        </div>
      </div>
    );
  }