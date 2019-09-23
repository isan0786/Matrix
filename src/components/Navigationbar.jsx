import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Search from './Search'
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
        <Navbar.Collapse className="justify-content-center" >
          <Nav >
            <Nav.Item>
              <Nav.Link href="/home" >Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>

          </Nav>
          <Search />
        </Navbar.Collapse>
      </Navbar>
    )
  }
}