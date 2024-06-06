import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoHome } from "react-icons/io5";
import { GrUserNew } from "react-icons/gr";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Navbar expand="md" className="bg-primary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-light">
              <Link className="nav-link" to="/">
                <IoHome />
                Home
              </Link>
              <Link className="nav-link" to="/signin">
                <FaSignInAlt />
                Signin
              </Link>
              <Link className="nav-link" to="/signup">
                <GrUserNew />
                SignUp
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
