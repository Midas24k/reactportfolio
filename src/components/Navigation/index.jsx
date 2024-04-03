import { Link } from 'react-router-dom';



function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;