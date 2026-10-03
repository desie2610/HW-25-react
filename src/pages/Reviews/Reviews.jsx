import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/api';

import styles from './Reviews.module.css';

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
    return (
      <p className={styles.empty}>
        We don't have any reviews for this movie.
      </p>
    );
  }

  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Reviews</h2>

      <ul className={styles.list}>
        {reviews.map(review => (
          <li className={styles.item} key={review.id}>
            <h3 className={styles.author}>
              Author: {review.author}
            </h3>

            <p className={styles.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Reviews;