import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function MovieListItem({ movie }) {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link>
    </li>
  );
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieListItem;