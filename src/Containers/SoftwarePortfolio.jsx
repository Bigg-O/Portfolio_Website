import React, { Component } from "react";
import "./css/SoftwarePortfolio.css";
import Container from "react-bootstrap/Container";
import ProjectCard from "../Components/ProjectCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class SoftwarePortfolio extends Component {
  constructor() {
    super();
    this.state = require("../json/SoftwareProjects.json");
  }

  render() {
    const { projects } = this.state;
    return (
      <Container fluid>
        <Row >
          {projects.map(project => (
            <Col md={4} key={project.name}>
              <ProjectCard key={project.name} project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default SoftwarePortfolio;