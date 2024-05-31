import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const styles = {
  containerStyle: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "3px solid silver",
    background: "eggshell",
    borderRadius: "5px",
    padding: "10px",
  },
  cardStyle: {
    marginTop: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px"
  }
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
            fill
          >
            <Tab eventKey="AboutMe" title="AboutMe">
              <Card style={styles.cardStyle}>
                <CardContent>
                  <Typography variant="h4" component="div">
                    Hi I'm Roderick
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    I am a full-stack web developer with a passion for creating
                    beautiful, user-friendly, and functional applications. I have
                    experience with a variety of web technologies and am always
                    looking to learn more. I am a quick learner and a team player
                    who is always looking to improve my skills.
                  </Typography>
                </CardContent>
              </Card>
            </Tab>
            <Tab eventKey="skills" title="Skills">
              <Card style={styles.cardStyle}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    I have experience with a variety of web technologies, including
                    HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and
                    MySQL. I am always looking to learn more and improve my skills.
                  </Typography>
                </CardContent>
              </Card>
            </Tab>
            <Tab eventKey="experience" title="Experience">
              <Card style={styles.cardStyle}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    I have experience working on a variety of projects, including
                    web applications, mobile applications, and APIs. I am always
                    looking to learn more and improve my skills.
                  </Typography>
                </CardContent>
              </Card>
            </Tab>
            <Tab eventKey="education" title="Education">
              <Card style={styles.cardStyle}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    I am a graduate of the University of Minnesota's Full Stack Web
                    Development Bootcamp. I am always looking to learn more and
                    improve my skills.
                  </Typography>
                </CardContent>
              </Card>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default FigureAbout;
