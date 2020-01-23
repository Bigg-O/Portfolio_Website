import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./css/ContactModal.css";

export class ContactModal extends Component {
  render() {
    const { modalShow, onModalHide, userName } = this.props;
    return (
      <Modal centered show={modalShow} onHide={onModalHide}>
        <Modal.Header>
          <Modal.Title>Thanks{" " + userName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your message has been successfully delivered.
          <br />I will get back to you within 24 hours!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onModalHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onModalHide}>
            Sweet!
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ContactModal;
