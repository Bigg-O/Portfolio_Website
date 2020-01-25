import React from "react";
import "./css/Welcome.css";
import Container from "react-bootstrap/Container";

export default function Welcome() {
  return (
    <Container className="hello-box" as="h1">
      Hello, World!
    </Container>
  );
}
