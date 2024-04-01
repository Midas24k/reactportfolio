import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// import ErrorPage from './pages/ErrorPage';
import HomePage from './components/HomePage';
// import PortfolioPage from './pages/PortfolioPage';
import AboutCard from './components/Card';
// import ContactPage from './pages/ContactPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutCard />,
      },
      // {
      //   path: 'portfolio',
      //   element: <PortfolioPage />,
      // },
      // {
      //   path: 'contact',
      //   element: < ContactPage />,
      // },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
