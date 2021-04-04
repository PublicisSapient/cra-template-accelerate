import React from 'react';
import { Loading } from '../../components';
import { StringUtils } from '../../utils';
import { useMovies } from './useMovies';

export const Home = () => {
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
      <table data-testid="movie-table">
        <thead>
          <tr>
            <th className="text-center">Rank</th>
            <th>Name</th>
            <th className="text-center">Year</th>
            <th className="text-center">Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.name}>
              <td className="text-center">{index + 1}</td>
              <td>{movie.name}</td>
              <td className="text-center">{movie.year}</td>
              <td className="text-center">{movie.rating.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
