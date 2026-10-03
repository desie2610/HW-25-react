import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from '../../services/api';

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

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <Link to={location.state?.from ?? '/movies'}>
        Go back
      </Link>

      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300"
        />

        <div>
          <h1>{movie.title}</h1>

          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>

          <h2>Overview</h2>
          <p>{movie.overview}</p>

          <h2>Genres</h2>

          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h2>Additional information</h2>

        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <Outlet />
    </main>
  );
}

export default MovieDetailsPage;