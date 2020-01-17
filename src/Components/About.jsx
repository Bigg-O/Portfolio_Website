import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import profile2 from "../Images/Profile_2.jpg";
import profile3 from "../Images/Profile_3.jpg";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/About.css";

export class About extends Component {
  render() {
    return (
      <Container fluid className="aboutContainer">
        <Row>
          <Col sm={5}>
            <Image className="profile" src={profile2} />
            <Image className="profile" src={profile3} />
          </Col>
          <Col as={Card} border="dark" bg="light" sm={7}>
            <h4>
              Hi I'm Wookeun Song!{" "}
              <span role="img" aria-label="flags">
                🇲🇽 🇰🇷 🇺🇸
              </span>
            </h4>
            <h5>It's pronounced [oo-gen] with hard 'g'</h5>
            <p>
              I am a Full Stack Web Developer with experience in both SQL and
              NoSQL databases using Ruby on Rails and MERN (Mongo, Express,
              React, and Node) Stack frameworks. I’ve been a passionate
              programmer since 2013 when I joined a FIRST Robotics Competition
              team. As a lead programmer of the team, I learned to code with
              other programmers and communicate with other types of engineers,
              giving me considerable experience with solving real life problems
              with code. Due to the programming team’s success that I led at
              competitions in making final rounds consecutively at FRC, it led
              me to host Nao Robot Fashion Show at Barnes & Noble Robotics Fair
              giving me an another opportunity to work with different engineers.
              In order to pursue professional software engineering career, took
              computer science courses at University of Texas at Austin giving
              me a strong data structure and low-level computer science
              background.
            </p>
            <p>
              As much as I enjoy the world of technology, I love exploring in
              the real world. I’ve gone rock climbing all over the US, Mexico,
              Thailand, and Korea to find the purest and most breath-taking
              challenging lines. Instead of just ‘being’ outdoors, I like
              ‘doing’ the outdoors. My passion in climbing took me on a wild
              rocky journey from working at Austin Bouldering Project as a
              routesetter in the biggest bouldering gym in North America, to all
              the way to competing in USA Climbing Collegiate National
              Championships and placing 5th place.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
