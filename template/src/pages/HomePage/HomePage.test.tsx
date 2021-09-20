import React from 'react';
import { render } from '../../test/test-utils';
import { HomePage } from './HomePage';

describe('<Home />', () => {
  test('renders correctly', async () => {
    const { findByTestId, findByText } = render(<HomePage />);
    expect(await findByText('Top 10 Movies Of All Time')).toBeTruthy();

    // expect 10 movies
    const movieTable = await findByTestId('movie-table');
    const movies = movieTable.querySelectorAll('tbody tr');
    expect(movies.length).toBe(10);
  });
});
