import { useEffect, useState } from 'react';
import { useEnv } from '../../contexts';
import { EnvVar } from '../../utils';
import { Movie } from './Movie';

/**
 * Hook to fetch movies
 */
export const useMovies = () => {
  const env = useEnv();
  const apiUrl = env.get(EnvVar.API_URL);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | undefined>();
  const [movies, setMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/top-10-movies`);

        if (!response.ok) {
          const message = `Error: ${response.status}`;
          throw new Error(message);
        }

        const movies = await response.json();
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [apiUrl]);
  return { isLoading, isError, error, movies };
};
