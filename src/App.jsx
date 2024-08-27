import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';





function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;