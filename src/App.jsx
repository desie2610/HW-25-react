import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;