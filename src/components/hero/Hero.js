import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroStyles.css';

const Hero = () => {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col className="h-100 d-flex align-items-center justify-content-center">
          <div style={{ width: '100vw',
      height: '100vh',
      position: 'relative',
      backgroundImage: 'url(./architect.jpg)',
      backgroundRepeat:'no-repeat', backgroundPosition: 'center', 
      backgroundSize: 'cover',textAlign:'center'}}>
           <div className="hero-content">
             <p className="strongg hero-text">BR</p>
            <p className="hero-text">Architects</p>
           </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
