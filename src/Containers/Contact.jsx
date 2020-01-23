import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ContactModal from "../Components/ContactModal";
import ContactForm from "../Components/ContactForm";
import "./css/Contact.css";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      modalShow: false
    };
  }

  handleSubmission = e => {
    e.preventDefault();
    this.setState({userName: e.target.formName.value})
    this.setState({ modalShow: true });

    //resetting input fields
    e.target.formName.value = "";
    e.target.formEmail.value = "";
    e.target.formText.value = "";
  };

  handleModalHide = () => {
    this.setState({ modalShow: false });
  };

  render() {
    const { modalShow, userName } = this.state;
    return (
      <>
        <Container className="form-box">
          <Row className="from-row">
            <Col md="5">
              <Card className="info">
                <Card.Text as="h5">
                  Wookeun Song
                  <br />
                  wookeun.s@gmail.com
                  <br />
                  (512)-701-0704
                </Card.Text>
              </Card>
            </Col>

            <Col className="form-col" md="7">
              <ContactForm onSubmission={this.handleSubmission} />
            </Col>
          </Row>
        </Container>

        <ContactModal
          modalShow={modalShow}
          onModalHide={this.handleModalHide}
          userName={userName}
        />
      </>
    );
  }
}

export default Contact;
