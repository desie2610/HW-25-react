import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from '../../services/api';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';

import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  const backLink = location.state?.from ?? '/movies';

  if (!movie) {
    return <Loader />;
  }

  return (
    <main className={styles.container}>
      <Link className={styles.backLink} to={backLink}>
        ← Go back
      </Link>

      <MovieDetails movie={movie} />

      <section className={styles.additional}>
        <h2>Additional information</h2>

        <div className={styles.links}>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
      </section>

      <Outlet />
    </main>
  );
}

export default MovieDetailsPage;
