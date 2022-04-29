import React, { ReactElement, Suspense } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary, Loading } from '../components';
import { EnvProvider } from '../contexts';

// -----------------------------------------------------------------------------
// This file re-exports everything from React Testing Library and then overrides
// its render method. In tests that require global context providers, import
// this file instead of React Testing Library.
//
// For further details, see:
// https://testing-library.com/docs/react-testing-library/setup/#custom-render
// -----------------------------------------------------------------------------

interface AllProvidersProps {
  children?: React.ReactNode;
}

function AllProviders({ children }: AllProvidersProps) {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <EnvProvider>
          <Router>{children}</Router>
        </EnvProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

/**
 * Custom render method that includes global context providers
 */
type CustomRenderOptions = {
  initialRoute?: string;
  renderOptions?: Omit<RenderOptions, 'wrapper'>;
};

function customRender(ui: ReactElement, options?: CustomRenderOptions) {
  const opts = options || {};
  const { initialRoute, renderOptions } = opts;

  if (initialRoute) {
    window.history.pushState({}, 'Initial Route', initialRoute);
  }

  return render(ui, { wrapper: AllProviders, ...renderOptions });
}

export * from '@testing-library/react';
export { customRender as render, userEvent };
