import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

const token = import.meta.env.VITE_TMDB_TOKEN;

console.log('TOKEN EXISTS:', Boolean(token));
console.log('TOKEN LENGTH:', token?.length);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    accept: 'application/json',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await api.get('/trending/movie/day');
  return data.results;
};

export const searchMovies = async query => {
  const { data } = await api.get('/search/movie', {
    params: { query },
  });

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await api.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await api.get(`/movie/${movieId}/reviews`);
  return data.results;
};