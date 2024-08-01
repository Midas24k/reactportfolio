import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { Stack } from "react-bootstrap";


const styles = {
  navbarStyle: {
    display: "flex",
    flexDirection: "space-between",
    width: "100%",
  },
  navLinkStyle: {
    color: "white",
    fontSize: "1.2em",
    fontFamily: "roboto-serif",
  },
};

function NavBar() {
 
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container style={styles.navLinkStyle}>
        <Navbar.Brand href="/">
        <img src="src/assets/FullLogo_Transparent_large.png" alt="Logo"/>
        </Navbar.Brand>
        <Stack direction="horizontal" gap={5}>
          <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
          <Nav.Link onClick={() => navigate("/skills")}>Skills</Nav.Link>
          <Nav.Link onClick={() => navigate("/portfolio")}>Portfolio</Nav.Link>
          <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
        </Stack>
      </Container>
    </Navbar>
  );
}

export default NavBar;
