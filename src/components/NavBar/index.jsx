import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { Stack } from "react-bootstrap";


const styles = {
  navbarStyle: {
    display: "flex",
    flexDirection: "space-between",
    width: "100%",
  },
};

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary "
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Row className="d-flex flex-row">
          <Col>
            <Navbar.Brand href="#home"> <img src="src/assets/FullLogo_Transparent large.png" alt="" />
            </Navbar.Brand>
          </Col>
        </Row>
        <Row>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" activeKey="/home">
              <Stack direction="horizontal" gap={3}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
                <NavDropdown title="Misc" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate("/portfolio")}>
                    Portfolio
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/skills")}>
                    Skills
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/contact")}>
                    Contact
                  </NavDropdown.Item>
                </NavDropdown>
              </Stack>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
