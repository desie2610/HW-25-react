import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>

      <MovieList movies={movies} />
    </main>
  );
}

export default Home;