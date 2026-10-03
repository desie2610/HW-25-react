import PropTypes from 'prop-types';

import MovieListItem from '../MovieListItem/MovieListItem';

function MovieList({ movies }) {
  return (
    <ul>
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