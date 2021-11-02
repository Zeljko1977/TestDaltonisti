import React from 'react';
import { Nav, NavDropdown, Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {

  

  return (
    <div>
      <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Test</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to="/register">
                <Nav.Link>
                  <i className="fas fa-user-plus"></i> Register
                </Nav.Link>
              </LinkContainer>
                <NavDropdown title='LogOut' id='username'>
                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
               <LinkContainer to="/results">
                <Nav.Link>
                  <i className="fas fa-user"></i> Rezultati
                </Nav.Link>
              </LinkContainer>
              
              {/* <LinkContainer to="/boje">
                <Nav.Link>
                  <i className="fas fa-user-plus"></i> Boje
                </Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    </div>
  )
}

export default Header;
