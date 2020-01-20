import React, { Component } from "react";
import Card from "react-bootstrap/card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
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
        <Card.Header as="h5">{name}</Card.Header>
        <Card.Img variant="top" src={photo_url} />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Used Techs: </ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{date}</small>
        </Card.Footer>
      </Card>
    );
  }
}

export default ProjectCard;
