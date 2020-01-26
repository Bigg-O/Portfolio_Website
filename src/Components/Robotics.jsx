import React from "react";
import { Card, Spinner } from "react-bootstrap";
import "./css/Robotics.css";

export default function Robotics() {
  return (
    <Card className="robotics-card">
      <Card.Body>
        <div className="spinners">
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="light" />
          <Spinner animation="border" variant="dark" />
        </div>
        <Card.Text className="content-box">Content Under Production</Card.Text>
      </Card.Body>
    </Card>
  );
}
