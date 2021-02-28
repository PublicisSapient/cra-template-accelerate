import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { App } from './App';
import { Home, NotFound } from './features';

jest.mock('./features/Home/Home');
jest.mock('./features/NotFound/NotFound');

describe('<App />', () => {
  test('renders the Home page on default route', () => {
    // Arrange
    (Home as jest.Mock).mockImplementation(() => <div>HomePageMock</div>);

    // Act
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(getByText('HomePageMock')).toBeTruthy();
  });

  test('renders the Not Found page for an invalid route', () => {
    // Arrange
    (NotFound as jest.Mock).mockImplementation(() => <div>NotFoundMock</div>);

    // Act
    const { getByText } = render(
      <MemoryRouter initialEntries={['/invalid/route']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(getByText('NotFoundMock')).toBeTruthy();
  });
});
