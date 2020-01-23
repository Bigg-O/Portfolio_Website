import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ContactModal from "../Components/ContactModal";
import ContactForm from "../Components/ContactForm";
import emailjs from "emailjs-com";
import "./css/Contact.css";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      modalShow: false,
      failedModalShow: false
    };
  }

  handleSubmission = e => {
    e.preventDefault();

    const { formName, formEmail, formAbout, formText } = e.target;
    const templateParams = {
      user_name: formName.value,
      user_email: formEmail.value,
      user_about: formAbout.value,
      user_message: formText.value
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        result => {
          console.log("Success Message from email.js: ", result.text);
          this.setState({ userName: formName.value });
          this.setState({ modalShow: true });
          formName.value = "";
          formEmail.value = "";
          formAbout.value = "Software Engineering";
          formText.value = "";
        },
        error => {
          console.log("Failed Message from email.js: ", error.text);
          this.setState({ userName: formName.value });
          this.setState({ failedModalShow: true });
        }
      );
  };

  handleModalHide = () => {
    this.setState({ modalShow: false });
    this.setState({ failedModalShow: false });
  };

  render() {
    const { userName, modalShow, failedModalShow } = this.state;
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
          failedModalShow={failedModalShow}
          onModalHide={this.handleModalHide}
          userName={userName}
        />
      </>
    );
  }
}

export default Contact;
