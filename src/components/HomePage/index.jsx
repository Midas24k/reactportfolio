import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const styles = {
  homePageStyle: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
    overflow: "visible",
    
  },
  homeSiteStyle: {
    margin: "20px",
  },
  nameTextStyle: {
    fontSize: "60px",
    fontFamily: "roboto serif",
    color: "white",
    margin: "2%",
    lineHeight: "1.2",
  },
  lastNameTextStyle: {
    fontSize: "200px",
    fontFamily: "pacifico",
    color: "white",
    lineHeight: "1.2",
  },
  col1Style: {
    marginTop: "80px",
  },
  col2Style: {
    marginTop: "150px",
    marginLeft: "100px",
    paddingBottom: "50px",
  },
  cloudTextStyle: {
    fontFamily: "'Pacifico', cursive",
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/clouds.jpg)',
    backgroundSize: 'auto',
    backgroundAttachment: 'unset',
    backgroundPosition: '0%',
    width: '80%',
    margin: '8%',
    fontSize: '140px',
    animation: 'clouds-moving infinite 220s linear',
    textAlign: 'center',
    lineHeight: '1.2',
  },
  attributeStyle: {
    position: 'relative',
    fontSize: '26px',
    textAlign: 'center',
  },
};

export function HomePage() {
  return (
    <>
    
    <Container style={styles.homePageStyle} className="homePage">
      <Row>
        <Col style={styles.col1Style}>
          <Image src="src/assets/RodHugh.JPG" alt="Rod Hughey" roundedCircle />
        </Col>
        <Col style={styles.col2Style}>
          <div style={styles.nameTextStyle}>Roderick</div>
          <div style={styles.cloudTextStyle}> Hughey</div>
          <p> FullStack Web Developer</p>
        </Col>
      </Row>
    </Container>
    <style>
        {`
          @keyframes clouds-moving {
            0% {
              background-position: 0%;
            }
            50% {
              background-position: 100%;
            }
            100% {
              background-position: 0%;
            }
          }
        `}
      </style>
    </>
  );
}

export default HomePage;
