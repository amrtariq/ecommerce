import React from 'react'
import {Navbar, Container, Nav, Form, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
function Header() {
  return (
    <header>
    <Navbar bg='dark' variant='dark' expand="lg">
      <Container fluid>

        <LinkContainer to='/'>
          <Navbar.Brand>Resin</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link><i className='fas fa-user'></i> Login</Nav.Link>
            </LinkContainer>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header
