import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import logo from "../Images/Name_Logo.png";
import { NavLink } from "react-router-dom";
import SoftwareResume from "../PDF/SoftwareResume.pdf";
import RoutesettingResume from "../PDF/RoutesettingResume.pdf";
import ClimbingResume from "../PDF/ClimbingResume.pdf";
import LinkIcon from "../Images/link_icon.png";
import "./css/Homebar.css";

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
              About
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
              <NavDropdown.Item href={SoftwareResume} target="_blank">
                Software Engineer <Image src={LinkIcon} className="link-icon" />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={RoutesettingResume} target="_blank">
                Routesetting <Image src={LinkIcon} className="link-icon" />
              </NavDropdown.Item>
              <NavDropdown.Item href={ClimbingResume} target="_blank">
                Rock Climbing <Image src={LinkIcon} className="link-icon" />
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              className="link"
              href="https://www.8a.nu/user/wookeun-song"
              target="_blank"
            >
              8a.nu
            </Nav.Link>
            <Nav.Link
              className="link"
              href="https://github.com/Bigg-O"
              target="_blank"
            >
              GitHub
            </Nav.Link>
            <Nav.Link
              className="link"
              href="https://www.linkedin.com/in/wookeun-s/"
              target="_blank"
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
