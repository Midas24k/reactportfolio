import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  cardStyle: {
    width: "100%",
    color: "silver",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: "2px",
    boxShadow: "5px 5px 5px black",
    marginBottom: "50px"
  },
    titleStyle: {
        textAlign: "center",
        marginBottom: "50px",
        color: "silver",
        marginTop: "50px",
        fontSize: "35px",
        fontFamily: "cursive"
    },
    imageStyle: {
       
        width: "100%"
    },
    buttonStyle: {
        margin: "20px",
        
    },
    

};

function PortfolioProjects() {
    return (
        <Container className="" > 
            
            <Row className="justify-content-md-center">
                <Col md lg="12" style={styles.titleStyle}>
                    <h1>Portfolio</h1>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img style={styles.imageStyle} variant="top" src="src/assets/React-Weather.png" />
                            <Card.Title>Weather App</Card.Title>
                            <a href="https://github.com/Midas24k/its-raining-outside" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repository</Button></a>
                            <a href="https://midas24k.github.io/its-raining-outside/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> Weather App</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img style={styles.imageStyle} variant="top" src="src/assets/React Notetaker1.png" />
                            <Card.Title>Note Taker App</Card.Title>
                            <a href="https://github.com/Midas24k/the-new-world-diary" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repository</Button> </a>
                            <a href="https://the-note-taker-777-3d391e8df5a5.herokuapp.com/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark">Note Taker</Button> </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img style={styles.imageStyle} variant="top" src="src/assets/React-ProtectyaEars.png" />
                            <Card.Title>ProtectyaEars</Card.Title> 
                            <a href="https://github.com/JasonArriaza/Protect-Your-Ears" target="_blank" rel="noreferrer">               
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repository</Button> </a>
                            <a href="https://jasonarriaza.github.io/Protect-Your-Ears/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark">ProtectyaEars</Button> </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img style={styles.imageStyle} variant="top" src="src/assets/React-WinningEdge.png" />
                            <Card.Title>WinningEdge</Card.Title>
                            <a href="https://github.com/adamboudruh/Group-1-Winning-Edge" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repository</Button> </a>
                            <a href="https://pacific-shelf-77218-ba08c8175600.herokuapp.com/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark">WinningEdge</Button> </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img style={styles.imageStyle} variant="top" src="src/assets/React-PasswordMaker.png" />
                            <Card.Title>Password Maker</Card.Title>
                            <a href="https://github.com/Midas24k/MostconfusingPword" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repository</Button> </a>
                            <a href="https://midas24k.github.io/MostconfusingPword/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark">Password Maker</Button> </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img  style={styles.imageStyle}variant="top" src="src/assets/React-Horiseon.png" />
                            <Card.Title>Horiseon Marketing</Card.Title>
                            <a href="https://github.com/Midas24k/Horiseon-Marketing-Agency" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repository </Button> </a>
                            <a href="https://midas24k.github.io/Horiseon-Marketing-Agency/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> Horiseon Marketing </Button> </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default PortfolioProjects;
