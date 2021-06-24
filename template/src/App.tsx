import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
