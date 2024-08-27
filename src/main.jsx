import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/screen_layout_large.css';
import './css/screen_layout_medium.css';
import './css/screen_layout_small.css';



// import ErrorPage from './pages/ErrorPage';
import HomePage from './components/HomePage';
import FigureAbout from './components/AboutMe';
import SkillsLanguages from './components/Skills';
import PortfolioProjects from './components/Portfolio';
import ContactForm from './components/Contact';


   
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'about',
        element: <FigureAbout/>,
      },
      {
        path: 'services',
        element: <SkillsLanguages />,
      },
      {
        path: 'portfolio',
        element: <PortfolioProjects />,
      },
      {
        path: 'contact',
        element: <ContactForm/>,
      },
   
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
