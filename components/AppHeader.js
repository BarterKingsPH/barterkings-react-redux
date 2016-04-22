import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel, Form, Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap'

class AppHeader extends Component {

  render() {
    let logoStyle = {
      width: '120px',
      height: '60px'
    };

    let navStyle = {
      'marginTop': '20px'
    }

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
              <img style={logoStyle} src="http://localhost:8002/images/logo-main.png"/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem> <Button bsStyle="success">Barter Now</Button> </NavItem>
            <NavItem>
              <Form inline>
                <FormGroup>
                  <FormControl type="text" placeholder="Search Items" />
                  <Button bsStyle="default">Go</Button>
                </FormGroup>
              </Form>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="#">Login</NavItem>
            <NavItem href="#">Register</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

export default AppHeader
