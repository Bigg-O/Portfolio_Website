import React, { Component } from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";
import "./css/ProjectCard.css";

export class ProjectCard extends Component {
  render() {
    const {
      name,
      photo_url,
      used_technology,
      description,
      date,
      app_url,
      repository_url
    } = this.props.project;

    return (
      <Card>
        <Card.Header as="h5">
          <Card.Link className="header" href={app_url}>
            {name}
          </Card.Link>
        </Card.Header>
        <Card.Img as={Card.Link} href={app_url} variant="top" src={photo_url} />
        <Card.Text>{description}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>{used_technology}</ListGroup.Item>
          <Card.Link href="#"></Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </ListGroup>
        <Card.Footer>
          <small className="text-muted">{date}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default ProjectCard;
