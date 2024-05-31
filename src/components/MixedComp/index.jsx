import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '@mui/material';
import { Card } from '@mui/material';

const MixedComponent = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card variant="outlined" style={{ padding: '20px', marginTop: '20px' }}>
            <h3>Mixed Bootstrap and Material-UI</h3>
            <p>This card uses Material-UI for its styling.</p>
            <Button variant="contained" color="primary">
              Material-UI Button
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MixedComponent;