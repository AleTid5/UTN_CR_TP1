import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export default function index() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6}>
          <Row>
            <Col xs={12}>
              <h1>¿Porque nos gusta esto?</h1>
            </Col>
            <Col xs={12}>
              <h5>
                Elegimos Rick&Morty porque es la unica API que tenía fotos y era
                muy simple de utilizar.
              </h5>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={12}>
              <h1>¿Quienes somos?</h1>
            </Col>
            <Col xs={12}>
              <ListGroup variant="flush">
                <ListGroup.Item>Semhan, Santiago</ListGroup.Item>
                <ListGroup.Item>Macias, Mariano</ListGroup.Item>
                <ListGroup.Item>Fariña, Ximena</ListGroup.Item>
                <ListGroup.Item>Tidele, Alejandro</ListGroup.Item>
                <ListGroup.Item>Zambrano, Cesar</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
