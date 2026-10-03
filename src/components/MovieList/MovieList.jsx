import PropTypes from 'prop-types';

import MovieListItem from '../MovieListItem/MovieListItem';

import css from './MovieList.module.css';

function MovieList({ movies }) {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;