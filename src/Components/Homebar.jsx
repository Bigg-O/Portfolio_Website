import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../Images/Name_Logo.png";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

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
            <Link to="/">About Me</Link>
            <NavDropdown title="Portfolio">
              <Link to="/">
                <NavDropdown.Item>Sofeware Engineer</NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>Robotics</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Resume">
              <Link to="/">
                <NavDropdown.Item>Sofeware Engineer</NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>Routesetting</NavDropdown.Item>
              </Link>
              <Link to="/">
                <NavDropdown.Item>Rock Climbing</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Link to="/">GitHub</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Homebar;
