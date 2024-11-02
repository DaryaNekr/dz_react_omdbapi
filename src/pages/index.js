import { useState, useEffect } from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`);
      const data = await res.json();


      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Произошла ошибка при поиске фильмов.");
      setMovies([]);
    }

    setLoading(false);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <form onSubmit={handleSearch} className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Введите название фильма..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 p-2 rounded-l w-2/3"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-r"
          >
            Поиск
          </button>
        </form>

        {loading && <p className="text-center">Загрузка...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="flex flex-wrap justify-center">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}