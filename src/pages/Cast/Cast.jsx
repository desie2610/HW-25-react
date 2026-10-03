import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getMovieCredits } from '../../services/api';

function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              width="100"
            />
          )}

          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;