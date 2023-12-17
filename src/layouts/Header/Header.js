import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

import images from "~/assets/images";
import styles from "./Header.module.scss";
import paths from "~/routes/paths/paths";

Header.propTypes = {};

function Header(props) {
  return (
    <Navbar expand="lg" bg="body-light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"} className={clsx(styles.logo)}>
          <img src={images.logo} alt="Home" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="fs-5">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={paths.home}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={paths.adminPanel}>
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to={paths.test}>
              Test
            </Nav.Link>
            <NavDropdown title="Customer">
              <NavDropdown.Item as={Link} to={paths.shipment}>
                Shipment
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={paths.trackingShipment}>
                Tracking
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Staff">
              <NavDropdown.Item as={Link} to={paths.addTracking}>
                Handle shipment
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
