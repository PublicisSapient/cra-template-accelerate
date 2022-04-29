import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary, Loading } from '../src/components';
import { EnvProvider } from '../src/contexts';
import '../src/styles/main.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Home'],
    },
  },
};

// Start mock service worker
const { worker } = require('../src/mocks/browser');
worker.start();
worker.printHandlers();

export const decorators = [
  (Story: any) => (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <EnvProvider>
          <Router>
            <Story />
          </Router>
        </EnvProvider>
      </ErrorBoundary>
    </Suspense>
  ),
];
