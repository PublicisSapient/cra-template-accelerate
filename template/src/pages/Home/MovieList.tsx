import React from 'react';
import { Movie } from './Movie';

export interface MovieListProps {
  movies: Array<Movie>;
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
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
  );
};
