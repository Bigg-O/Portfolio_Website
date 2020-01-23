import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./css/ContactModal.css";

export class ContactModal extends Component {
  render() {
    const { modalShow, failedModalShow, onModalHide, userName } = this.props;
    if (modalShow)
      return (
        <Modal centered show={modalShow} onHide={onModalHide}>
          <Modal.Header>
            <Modal.Title>Thx,{" " + userName}</Modal.Title>
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
    else
      return (
        <Modal centered show={failedModalShow} onHide={onModalHide}>
          <Modal.Header>
            <Modal.Title>Sorry,{" " + userName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your message delivery has failed.
            <br />
            Please contact directly to my other contacts, Thx!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onModalHide}>
              Close
            </Button>
            <Button variant="primary" onClick={onModalHide}>
              Okay...
            </Button>
          </Modal.Footer>
        </Modal>
      );
  }
}

export default ContactModal;
