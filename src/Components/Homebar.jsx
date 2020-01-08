import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import logo from '../Images/Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";

export class Homebar extends Component {
  render() {
    return (
      <Navbar variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <Image className="logo" src={logo} fluid />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="resumes">Resumes</Nav.Link>
          <Nav.Link href="portfolio">Portfolio</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Homebar;
