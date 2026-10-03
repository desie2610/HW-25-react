import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/api';

function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (!reviews.length) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;