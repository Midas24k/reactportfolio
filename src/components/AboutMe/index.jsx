// import Figure from "react-bootstrap/Figure";
// import FigureImage from 'react-bootstrap/FigureImage'
// import FigureCaption from 'react-bootstrap/FigureCaption'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const styles = {
  figureStyle: {
    height: 350,
    width: 350,
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "2px solid black",
    marginBottom: "50px",
    

  },
};


function FigureAbout() {
    return (
      <Container style={styles.figureStyle} >
        <Row>
          <Col>
            <Image src="src/assets/RodHugh.JPG" roundedCircle />
          </Col>
        </Row>
      </Container>
    );
  }

export default FigureAbout;
