import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import './styles/App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import ShopPage from './pages/ShopPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
      <Route path="*" element={<NotFoundPage message="404 Not Found"/>} />
    </Route>
      
  )
);

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App;