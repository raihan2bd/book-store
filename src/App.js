import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/UI/Layout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import './App.css';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </Layout>
);

export default App;
