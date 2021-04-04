import React from 'react';
import { addDecorator } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../src/styles/main.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Home'],
    },
  },
};

const StoryDecorator = (Story: any) => (
  <Router>
    <Story />
  </Router>
);

addDecorator(StoryDecorator);
