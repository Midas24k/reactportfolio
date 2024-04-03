import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const styles = {
  navbarStyle: {
    display: "flex",
    flexDirection: "space-between",
    width: "100%",
  },
};

function NavBar() {
  return (
    
      <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
        <Container>
          <Row className="d-flex flex-row">
            <Col>
              <Navbar.Brand href="#home">Endless Possibilities</Navbar.Brand>
            </Col>
          </Row>
          <Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end" activeKey="/home">
                
                  <Nav.Link href="#home">Home</Nav.Link>
               
                <Nav.Link href="#About">About</Nav.Link>
                <NavDropdown title="Misc" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
                  <NavDropdown.Item href="#portfolio">
                    Portfolio
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#Resume">
                    Resume Download
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    
  );
}

export default NavBar;
