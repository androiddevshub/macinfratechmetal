import * as React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MacLogo from "./../assets/images/mac_logo.png";
import "./navbar.css";

export default function NavBar() {
  return (
    <Navbar bg="white" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo" src={MacLogo} />
          <span className="logo-text">MAC InfraTech Metal Private Ltd.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-item-home" as={Link} to="/about">
              <Button variant="outlined">About us</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/project_management">
              <Button variant="outlined">Project Management</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/why_us">
              <Button variant="outlined">Why Us</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/clients">
              <Button variant="outlined">Clients</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <Button variant="outlined">Contact Us</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
