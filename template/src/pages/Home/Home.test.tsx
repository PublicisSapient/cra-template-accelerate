import React from 'react';
import { render } from '../../test/test-utils';
import { Home } from './Home';

// Set API_URL in window environment
(window as any)._env_ = {
  API_URL: 'http://localhost:8080',
};

describe('<Home />', () => {
  test('renders correctly', async () => {
    const { findByTestId, findByText } = render(<Home />);
    expect(await findByText('Top 10 Movies Of All Time')).toBeTruthy();

    // expect 10 movies
    const movieTable = await findByTestId('movie-table');
    const movies = movieTable.querySelectorAll('tbody tr');
    expect(movies.length).toBe(10);
  });
});
