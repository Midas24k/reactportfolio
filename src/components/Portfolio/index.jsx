import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  cardStyle: {
    width: "30rem",
    height: "20rem",
    color: "silver",
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: "2px",
    boxShadow: "5px 5px 5px black",
    marginTop:"60px",
    marginLeft:"80px"
  },
    titleStyle: {
        textAlign: "center",
        marginBottom: "50px",
        marginTop: "200px",
        color: "silver",
        fontSize: "40px",
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
                        <Card.Img variant="top" src="src/assets/React-Weather.png" />
                        <Card.Body>
                        <Card.Title>Weather App</Card.Title>
                        <Card.Text>
                         
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Img variant="top" src="src/assets/React Notetaker1.png" />
                        <Card.Body>
                        <Card.Title>Note Taker App</Card.Title>
                        <Card.Text>
                         
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Img variant="top" src="src/assets/React-ProtectyaEars.png" />
                        <Card.Body>
                        <Card.Title>ProtectyaEars</Card.Title>
                        <Card.Text>
                         
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Img variant="top" src="src/assets/React-WinningEdge.png" />
                        <Card.Body>
                        <Card.Title>WinningEdge</Card.Title>
                        <Card.Text>
                         
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Img variant="top" src="src/assets/React-PasswordMaker.png" />
                        <Card.Body>
                        <Card.Title>Password Maker</Card.Title>
                        <Card.Text>
                         
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card style={styles.cardStyle}>
                        <Card.Img variant="top" src="src/assets/React-Horiseon.png" />
                        <Card.Body>
                        <Card.Title>Horiseon Marketing</Card.Title>
                        <Card.Text>
                         
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

         
        </Container>
    );
}

export default PortfolioProjects;
