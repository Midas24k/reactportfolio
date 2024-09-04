import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const styles = {
    contactFormStyle: {
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "slategrey",
        padding: "20px",
        margin: "200px",
        borderRadius: "10px",
    },
    textStyle: {
        color: "silver",
        fontSize: "20px",
        fontFamily: "cursive",
    }
};



function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
  
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={styles.contactFormStyle}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Company name" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Company.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="9" controlId="validationCustom04">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            Please provide a short message.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Button variant="dark" type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;