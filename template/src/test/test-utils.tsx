import React, { ReactElement, Suspense } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { ErrorBoundary, Loading } from '../components';
import { EnvContext } from '../contexts';
import { EnvVar } from '../utils';

// -----------------------------------------------------------------------------
// This file re-exports everything from React Testing Library and then overrides
// its render method. In tests that require global context providers, import
// this file instead of React Testing Library.
//
// For further details, see:
// https://testing-library.com/docs/react-testing-library/setup/#custom-render
// -----------------------------------------------------------------------------

const envVariables = {
  [EnvVar.API_URL]: 'http://localhost:8080',
};

const mockEnv = {
  get: (varName: string, defaultValue?: string): string => {
    let value = envVariables[varName] || defaultValue;
    return value ? value : '';
  },
};

const MockEnvProvider: React.FC = ({ children }) => {
  return <EnvContext.Provider value={mockEnv}>{children}</EnvContext.Provider>;
};

const AllProviders: React.FC = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <MockEnvProvider>
          <Router>{children}</Router>
        </MockEnvProvider>
      </ErrorBoundary>
    </Suspense>
  );
};

/**
 * Custom render method that includes global context providers
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
