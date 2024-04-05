import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// import ErrorPage from './pages/ErrorPage';
// import HomePage from './components/HomePage';
import FigureAbout from './components/AboutMe';
import SkillsLanguages from './components/Skills';
import PortfolioProjects from './components/Portfolio';
import ContactForm from './components/Contact';

   
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Will use this later after homework is completed and graded
      // {
      //   index: true,
      //   element: <HomePage/>,
      // },
      {
        path: 'about',
        element: <FigureAbout/>,
      },
      {
        path: 'skills',
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
