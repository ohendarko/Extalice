import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import './styles/App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import ShopPage from './pages/ShopPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Route>
  )
);

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App;