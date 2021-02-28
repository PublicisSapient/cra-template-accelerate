import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

describe('<Home />', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Hello World!')).toBeTruthy();
  });
});
