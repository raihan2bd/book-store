import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CategoriesPage from './pages/CategoriesPage';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/categories" element={<CategoriesPage />} />
  </Routes>
);

export default App;
