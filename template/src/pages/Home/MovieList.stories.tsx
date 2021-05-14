import React from 'react';
import { Meta, Story } from '@storybook/react';
import { mockMovies } from '../../mocks/mockMovies';
import { MovieList } from './MovieList';

export default {
  title: 'Pages/Home',
  component: MovieList,
} as Meta;

const Template: Story = (args) => <MovieList movies={args.movies} />;

export const MovieListStory = Template.bind({});
MovieListStory.storyName = 'MovieList';
MovieListStory.args = { movies: mockMovies };
