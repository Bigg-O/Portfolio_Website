import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../Images/Name_Logo.png";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import "./css/Homebar.css";

import Image from "react-bootstrap/Image";

export class Homebar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" variant="dark" fixed="top">
        <Navbar.Brand className="brand" as={NavLink} to="/">
          <Image src={logo} fluid />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="mr-auto"></div>
          <Nav className="nav">
            <Nav.Link className="text-white" as={NavLink} to="/About">
              About Me
            </Nav.Link>

            <NavDropdown title="Portfolio">
              <NavDropdown.Item as={NavLink} to="/Software_Portfolio">
                Software Engineer
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Robotics_Portfolio">
                Robotics
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resume">
              <NavDropdown.Item as={NavLink} to="/Software_Resume">
                Sofeware Engineer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/Routesetting_Resume">
                Routesetting
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/Climbing_Resume">
                Rock Climbing
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="link" href="https://github.com/Bigg-O">
              GitHub
            </Nav.Link>
            <Nav.Link
              className="link"
              href="https://www.linkedin.com/in/wookeun-s/"
            >
              LinkedIn
            </Nav.Link>
            <Nav.Link className="text-white" as={NavLink} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Homebar;
