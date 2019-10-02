import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import Avatar from "./Avatar";

export default class Navigationbar extends Component {


  render() {

    return (

      // <Spinner animation="grow" variant="success" />
      <Navbar style={{ backgroundColor: '#ffffff' }} expand="lg">
        <Navbar.Brand href="#home" ><img
          src={require('./assets/logo.svg')}
          width="200"
          height="100"

          alt="React Bootstrap logo"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center"  >
          <Nav >
            <Nav.Item>
              <Nav.Link href="/" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>

            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/AudioPlayerPage">AudioPlayer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/BookView">Library</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="link-2">About App</Nav.Link>
            </Nav.Item>





          </Nav>

          <Navbar.Brand className="mr-2" > <Avatar /></Navbar.Brand>
          <NavDropdown title="Name" id="basic-nav-dropdown">
            <NavDropdown.Item href="/login" onClick={this.props.signout}>SignOut</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>

      </Navbar>

    )

  }
}