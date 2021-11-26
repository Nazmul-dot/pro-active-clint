import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../image/logo3.jpg";
const Header = () => {
  const {  user, logout } = useAuth();
  // console.log(user);
  // console.log(isLoading);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              {!user.email ? (
                <>
                  {" "}
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Sing up
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Navbar.Text className="mx-md-2 mx-0">
                    Signed in as: <a href="#login">{user.displayName}</a>
                  </Navbar.Text>
                  <Nav.Link>
                    <button
                      onClick={logout}
                      className="rounded-pill border-0 bg-danger text-white px-3 py-1"
                    >
                      logout
                    </button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
