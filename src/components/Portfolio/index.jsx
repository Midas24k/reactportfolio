import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  cardStyle: {
    width: "auto",
    color: "#1f68ef",
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: "2px",
    boxShadow: "5px 5px 5px black",
    marginBottom: "50px",
    justifyContent: "center",
    textAlign: "center",
  },
    titleStyle: {
        textAlign: "center",
        marginBottom: "50px",
        color: "white",
        marginTop: "50px",
        fontSize: "3rem",
        fontFamily: "roboto-serif",
    },
    
    buttonStyle: {
        margin: "20px",
        


    },
    cardTitleStyle: {
        color: "white",
        display: "flex",
        justifyContent: "center",
        fontSize: "1.5rem",
        margin:"10px, 0px, 10px, 0px",
    }
    

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
                            <Card.Img variant="top" src="src/assets/React-Weather.png" />
                            <Card.Title style={styles.cardTitleStyle}>Weather App</Card.Title>
                            <a href="https://github.com/Midas24k/its-raining-outside" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repo</Button></a>
                            <a href="https://midas24k.github.io/its-raining-outside/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> Weather App</Button></a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img variant="top" src="src/assets/React Notetaker1.png" />
                            <Card.Title style={styles.cardTitleStyle}>Note Taker App</Card.Title>
                            <a href="https://github.com/Midas24k/the-new-world-diary" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repo</Button> </a>
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
                            <Card.Img variant="top" src="src/assets/React-ProtectyaEars.png" />
                            <Card.Title style={styles.cardTitleStyle}>ProtectyaEars</Card.Title> 
                            <a href="https://github.com/JasonArriaza/Protect-Your-Ears" target="_blank" rel="noreferrer">               
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repo</Button> </a>
                            <a href="https://jasonarriaza.github.io/Protect-Your-Ears/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark">ProtectyaEars</Button> </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img variant="top" src="src/assets/React-WinningEdge.png" />
                            <Card.Title style={styles.cardTitleStyle}>WinningEdge</Card.Title>
                            <a href="https://github.com/adamboudruh/Group-1-Winning-Edge" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repo</Button> </a>
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
                            <Card.Img variant="top" src="src/assets/React-PasswordMaker.png" />
                            <Card.Title style={styles.cardTitleStyle}>Password Maker</Card.Title>
                            <a href="https://github.com/Midas24k/MostconfusingPword" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repo</Button> </a>
                            <a href="https://midas24k.github.io/MostconfusingPword/" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark">Password Maker</Button> </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Body>
                            <Card.Img  style={styles.imageStyle}variant="top" src="src/assets/React-Horiseon.png" />
                            <Card.Title style={styles.cardTitleStyle}>Horiseon Marketing</Card.Title>
                            <a href="https://github.com/Midas24k/Horiseon-Marketing-Agency" target="_blank" rel="noreferrer">
                            <Button style={styles.buttonStyle} variant="dark"> GitHub Repo </Button> </a>
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
