
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const styles = {
  figureStyle: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "wrap",
    textAlign: "center",
    border: "15px double black",
    borderRadius: "10px",
    marginBottom: "100px",
    marginTop: "100px",
  },
  imageStyle: {
    height: 350,
    width: 350,
    marginLeft: "50px",
    marginTop: "50px",
   
  },
  introStyle: {
    textShadow: "1px 1px 30px black",
    textAlign: "center",
    fontSize: "40px",
    color:"silver",
    marginTop: "50px",

  },
  textStyle: {
    textAlign: "left",
    margin: "50px",
    fontSize: "20px",
    textShadow: "1px 1px 15px black",
    font: "italic"

  }
};


function FigureAbout() {
    return (
      <Container style={styles.figureStyle} >
        <Row>
          <Col>
            <Image src="src/assets/RodHugh.JPG" style={styles.imageStyle} roundedCircle />
          </Col>
          <Col>
            <h2 style={styles.introStyle}>Hi, I am Roderick Hughey</h2>
            <p style={styles.textStyle}>
              " I am a Full Stack Web Developer with a background in the
              hospitality industry. I have a passion for creating and solving
              problems. I am a graduate of the University of Minnesota's Full Stack
              Web Development Bootcamp. I have experience with HTML, CSS,
              JavaScript, React, Node.js, Express.js, MongoDB, MySQL, Handlebars, and
              MERN. I am a quick learner and always looking to expand my
              knowledge. I am excited to bring my skills to a company or venture that
              values hard work and creativity ".
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

export default FigureAbout;
