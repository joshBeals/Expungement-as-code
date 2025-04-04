/**
 * Joshua Alele-Beals
 * joshbeals22@gmail.com
 * github.com/joshBeals
 */
import React from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Row>
          <Col>
            <Alert variant="primary">
              <Alert.Heading>Expungement as Code</Alert.Heading>
              <p>
                  Aww yeah, you successfully read this important alert message. Why do programmers prefer dark mode? 
              </p>
              <hr />
              <p className="mb-0">
                  Because light attracts bugs!
              </p>
            </Alert>
            <Row>
              <Col lg={6} md={6}>
                <Button className="w-100" size="lg" variant="outline-success" href="/alloy-generator">Create Model</Button>
              </Col>
              <Col lg={6} md={6}>
                <Button className="w-100" size="lg" variant="outline-danger" href="/scenario">Expungement Checker</Button>
              </Col>
              <Col lg={6} md={6} className="mt-3">
                <Button className="w-100" size="lg" variant="outline-primary" href="/underspecified-scenario">Underspecified Scenarios</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
