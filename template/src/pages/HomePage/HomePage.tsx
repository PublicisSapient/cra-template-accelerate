import React from 'react';
import { Loading } from '../../components';
import { StringUtils } from '../../utils';
import { MovieList } from './MovieList';
import { useMovies } from './useMovies';

export const HomePage = () => {
  const { isLoading, isError, error, movies } = useMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <main>
        <h1>{StringUtils.errorToString(error)}</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Top 10 Movies Of All Time</h1>
      <MovieList movies={movies} />
    </main>
  );
};
