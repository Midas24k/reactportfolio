import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import FigureAbout from './components/AboutMe';



function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Outlet/>
      <FigureAbout/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;