import { useEffect, useState } from 'react';

import { getTrendingMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';

import css from './Home.module.css';

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
    <main className={css.home}>
      <div className={css.header}>
        <span className={css.line}></span>

        <h1 className={css.title}>Trending today</h1>

        <span className={css.line}></span>
      </div>

      <MovieList movies={movies} />
    </main>
  );
}

export default Home;