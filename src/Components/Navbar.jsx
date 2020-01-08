import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import logo from '../Images/Logo.png'

export class Navbar extends Component {
  render() {
    return (
      <Navbar variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <Image className="logo" src={logo} fluid />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#Resumes">Resumes</Nav.Link>
          <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navbar;
