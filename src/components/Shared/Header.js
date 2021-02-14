import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { useDispatch } from 'react-redux'
import { logoutUser } from '../Store/actions/authActions'



const Header = (props) => {

  const dispatch = useDispatch()
  const { isAuth } = props.auth
  const history = useHistory()

  const handleLogout = () => {
    dispatch(logoutUser())
      .then(() => {
      history.push('/')
    })
  }

    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Redux App</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/add-post">
                  <Nav.Link>Add Post</Nav.Link>
                </LinkContainer>
                {isAuth ? (
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
}

export default Header