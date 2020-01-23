import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import profile from "../Images/Contact_Profile.jpg";
import Image from "react-bootstrap/Image";
import "./css/Contact.css";

export class Contact extends Component {
  render() {
    return (
      <Container className="form-box">
        <Row className="from-row">
          <Col>
            <Card className="info">
              <Row>
                <Col>
                  <Card.Img src={profile} />
                </Col>
                <Col>
                  <Card.Text>
                    Wookeun Song
                    <br />
                    wookeun.s@gmail.com
                    <br />
                    (512)-701-0704
                  </Card.Text>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col className="form-col" sm="6">
            <Form>
              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                  Name:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="name" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formGridState">
                <Form.Label column sm={2}>
                  About
                </Form.Label>
                <Col sm={10}>
                  <Form.Control as="select">
                    <option>Software Engineering</option>
                    <option>Routesetting</option>
                    <option>Rock Climbing</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button variant="success" type="submit">
                    Contact!
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
