import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Home } from '../../features';

export default {
  title: 'Home/Home',
  component: Home,
} as Meta;

const Template: Story = (args) => <Home />;

export const HomeStory = Template.bind({});
HomeStory.storyName = 'Home';
HomeStory.args = {};
