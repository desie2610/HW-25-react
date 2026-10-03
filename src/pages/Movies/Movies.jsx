import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import { searchMovies } from '../../services/api';

import MovieList from '../../components/MovieList/MovieList';

import styles from './Movies.module.css';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const value = form.elements.query.value.trim();

    if (!value) {
      return;
    }

    setSearchParams({ query: value });
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="query"
          defaultValue={query}
          placeholder="Search movies..."
          autoComplete="off"
        />

        <button className={styles.button} type="submit">
          Search
        </button>
      </form>

      <MovieList movies={movies} />
    </main>
  );
}

export default Movies;