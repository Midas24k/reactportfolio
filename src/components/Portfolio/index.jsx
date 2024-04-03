import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const styles = {
  cardStyle: {},
};

function PortfolioProjects() {
    return (
        <Container> 
            <Card>
                <Row> 
                    <Col xs lg="4">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
                
        
        </Container>
    );
}

export default PortfolioProjects;
