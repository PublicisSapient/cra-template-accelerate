import React from 'react';
import { render, screen } from '../../test/test-utils';
import { HomePage } from './HomePage';

describe('<Home />', () => {
  test('renders correctly', async () => {
    render(<HomePage />);
    expect(await screen.findByText('Top 10 Movies Of All Time')).toBeTruthy();

    // expect 10 movies
    const movieTable = await screen.findByTestId('movie-table');
    const movies = movieTable.querySelectorAll('tbody tr');
    expect(movies.length).toBe(10);
  });
});
