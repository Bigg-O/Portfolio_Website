import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../Images/Name_Logo.png";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";

import Image from "react-bootstrap/Image";

export class Homebar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
        <Link to="/">
          <Navbar.Brand>
            <Image className="name_logo" src={logo} fluid />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="links">
            <Link to="/About">About Me</Link>

            <NavDropdown title="Portfolio">
              <NavDropdown.Item as={NavLink} to={"/Software_Portfolio"}>
                Software Engineer
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/Robotics_Portfolio"}>
                Robotics
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resume">
              <NavDropdown.Item as={NavLink} to={"/Software_Resume"}>
                Sofeware Engineer
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/Routesetting_Resume"}>
                Routesetting
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/Climbing_Resume"}>
                Rock Climbing
              </NavDropdown.Item>
            </NavDropdown>

            <a href="https://github.com/Bigg-O">GitHub</a>
            <a href="https://www.linkedin.com/in/wookeun-s/">LinkedIn</a>
            <Link to="/Contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Homebar;
