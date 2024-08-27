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
    backgroundColor: "#ffffff",
    maxWidth: "980px",
    margin: "0px auto 0px auto",
    position: "relative",

    
  },
  homeSiteStyle: {
    
  },
  nameTextStyle: {
    fontSize: "4em",
    fontFamily: "AnandaBlack",
    color: "#1f68ef",
    margin: "2%",
    lineHeight: "1.2",
  },
  lastNameTextStyle: {
    fontSize: "6em",
    fontFamily: "AnandaBlack",
    color: "#1f68ef",
    lineHeight: "1.2",
  },
  titleNameStyle: {
    fontSize: "4em",
    fontFamily: "roboto-serif",
    color: "black",
    lineHeight: "1.2",
  },
  dividerBarStyle: {
    solidBorder: 'hr.solid 2px black',
  },
  welcomeTextStyle: {
    fontSize: "2em",
    fontFamily: "roboto-serif",
    color: "black",
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
    fontFamily: "'AnandaBlack', sans-serif",
    fontSize: "60px",
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
    
    <Container style={styles.homePageStyle} className="page">
      <Row>
        <Col style={styles.col1Style}>
          <Image src="src/assets/RodHugh.JPG" alt="Rod Hughey" />
        </Col>
        <Col style={styles.col2Style}>
          <div style={styles.nameTextStyle}>Roderick</div>
          <div style={styles.lastNameTextStyle}>Hughey</div>
          <p style={styles.titleNameStyle}> FullStack Web Developer</p>
          <hr style={styles.dividerBarStyle}/>
          <p style={styles.welcomeTextStyle}> Welcome to my Portfolio </p>
        </Col>
      </Row>
    </Container>
    
    </>
  );
}

export default HomePage;
