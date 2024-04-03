import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import FigureAbout from './components/AboutMe';
import SkillsLanguages from './components/Skills';
import PortfolioProjects from './components/Portfolio';
import ContactForm from './components/Contact';


function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Outlet/>
      <FigureAbout/>
      <SkillsLanguages/>
      <PortfolioProjects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;