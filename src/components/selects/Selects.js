import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


const images = [
  'house2 (1).jpg',
  'house3.jpg',
  'house5.jpg',
  'house4 (1).jpg',
  'house2 (1).jpg',
  'house2 (1).jpg',
  'house2 (1).jpg',
  'house4 (1).jpg',
];

const App = () => {
  return (
    <Container fluid>
      <Row>
        {images.map((image, index) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
            <img
              src={`${image}`}
              className="img-fluid pt-3"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;

