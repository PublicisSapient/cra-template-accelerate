import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { EnvProvider } from '../src/contexts';
import '../src/styles/main.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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

const StoryDecorator = (Story: any) => (
  <EnvProvider>
    <Router>
      <Story />
    </Router>
  </EnvProvider>
);

addDecorator(StoryDecorator);
