import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const styles = {
  navbarStyle: {
    display: "flex",
    flexDirection: "space-between",
    
  },

};

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={styles.navbarStyle}>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Endless Possibilities</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Misc" id="basic-nav-dropdown">
              <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Resume">
                Resume Download
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Navbar>
    
  );
}

export default NavBar;