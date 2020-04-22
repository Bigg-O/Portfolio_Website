import React, { Component } from "react";
import { Image, Container, Card, Row, Col } from "react-bootstrap";
import profile from "../Images/Profile.jpg";
import profile2 from "../Images/Profile_2.jpg";
import profile3 from "../Images/Profile_3.jpg";
import profile4 from "../Images/Profile_4.jpg";

import "./css/About.css";

export class About extends Component {
  render() {
    return (
      <Container fluid className="aboutContainer">
        <Row className="about-row">
          <Col sm={5}>
            <Image src={profile2} />
            <Image src={profile3} />
            <Image src={profile} />
            <Image src={profile4} />
          </Col>
          <Col as={Card} border="dark" bg="light" sm={7}>
            <h4>
              Hi I'm Wookeun Oscar Song!{" "}
              <span role="img" aria-label="flags">
                🇲🇽 🇰🇷 🇺🇸
              </span>
            </h4>
            <h5>It's pronounced [oo-geun] with hard 'g'</h5>
            <p className="aboutMe">
              Conceived: México, Born: Korea, Babyhood: México City, Childhood:
              Korea, Young-Adulthood - Present: Austin, TX
              <br />
            </p>
            <p className="aboutMe">
              I am a software developer with robotics software engineering and full stack web development experiences. I've used both SQL and
              NoSQL databases using Ruby on Rails and MERN (Mongo, Express,
              React, and Node) Stack frameworks. I’ve been a passionate
              developer since 2013 when I joined a FIRST Robotics Competition
              team. As a lead robotics software/electrical engineer of the team, I learned to code with
              other software engineers and communicate with other types of engineers,
              giving me considerable experience with solving real life problems
              with code. Due to the programming team’s success that I led at
              competitions in making final rounds consecutively at FRC, it led
              me to be a leader at Nao Robot Fashion Show at Barnes & Noble
              Robotics Fair, giving me an another opportunity to lead teams of
              engineers. In order to pursue a professional software engineering
              career, took computer science major courses at the University of Texas
              at Austin, setting me up with a strong fundamental computer science background. After the course of
              learning most up to date, web development frameworks, currently
              building solo projects as a freelance web developer!
            </p>
            <p className="aboutMe">
              As much as I enjoy the world of technology, I love exploring the
              real world. I’ve gone rock climbing all over the world including US, Mexico,
              Thailand, and Korea to find the purest and the most breath-taking
              challenging lines out there. Instead of just ‘being’ outdoors, I like to be
              ‘doing’ the outdoors. My passion in climbing took me on a wild
              rocky journey from working at Austin Bouldering Project as a
              routesetter in the biggest bouldering gym in North America, to all
              the way to competing in USA Climbing Collegiate National
              Championships and placing 5th place.
            </p>
            <p className="aboutMe">
              One may say it’s an obsession or others may say it’s a passion. Do
              I mind what it is? Nope. I just want to keep doing what's fun and
              hopefully be that one person who is going to be known for being
              the best at what I do.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
