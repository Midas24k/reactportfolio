import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const styles = {
  containerStyle: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "10px solid silver",
    background: "black",
    borderRadius: "10px",
  },
};

const FigureAbout = () => {
  const [key, setKey] = useState("home");

  return (
    <Container style={styles.containerStyle}>
      <Row>
        <Col>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="AboutMe" title="AboutMe">
              <h1>Hi I'm Roderick </h1>
              <p>
                I am a full-stack web developer with a passion for creating
                beautiful, user-friendly, and functional applications.I am a
                graduate of the University of Minnesota's Full Stack Web
                Development Bootcamp. I have experience with a variety of web
                technologies and am always looking to learn more. I am a quick
                learner and a team player who is always looking to improve my
                skills.
              </p>
            </Tab>
            <Tab eventKey="skills" title="Skills">
              <p>
                I have experience with a variety of web technologies, including
                HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and
                MySQL. I am always looking to learn more and improve my skills.
              </p>
            </Tab>
            <Tab eventKey="experience" title="Experience">
              <p>
                I have experience working on a variety of projects, including
                web applications, mobile applications, and APIs. I am always
                looking to learn more and improve my skills.
              </p>
            </Tab>
            <Tab eventKey="education" title="Education">
              <p>
                I have a bachelor's degree in computer science from the
                University of California, Berkeley. I am always looking to learn
                more and improve my skills.
              </p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default FigureAbout;
