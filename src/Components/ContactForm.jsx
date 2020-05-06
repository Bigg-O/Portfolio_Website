import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

export class ContactForm extends Component {
  render() {
    const { onSubmission } = this.props;
    return (
      <Form onSubmit={onSubmission}>
        <Form.Group as={Row} controlId="formName">
          <Form.Label column md={2}>
            Name:
          </Form.Label>
          <Col md={10}>
            <Form.Control required type="name" placeholder="Name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formEmail">
          <Form.Label column md={2}>
            Email:
          </Form.Label>
          <Col md={10}>
            <Form.Control required type="email" placeholder="Email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formAbout">
          <Form.Label column md={2}>
            About
          </Form.Label>
          <Col md={10}>
            <Form.Control as="select">
              <option>Software Development</option>
              <option>Routesetting</option>
              <option>Rock Climbing</option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formText">
          <Form.Label column md={2}>
            Text:
          </Form.Label>
          <Col md={10}>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Hey Wookeun, I'd like to connect!"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="button">
          <Col md={{ span: 10, offset: 2 }}>
            <Button variant="success" type="submit">
              Contact!
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default ContactForm;
