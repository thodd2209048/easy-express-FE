import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

import images from "~/assets/images";
import styles from "./Header.module.scss";
import routes from "~/config/routes/routes";

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
            <Nav.Link as={Link} to={routes.home}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={routes.adminPanel}>
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to={routes.test}>
              Test
            </Nav.Link>
            <NavDropdown title="Customer">
              <NavDropdown.Item as={Link} to={routes.shipment}>
                Shipment
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={routes.trackingShipment}>
                Tracking
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Staff">
              <NavDropdown.Item as={Link} to={routes.addTracking}>
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
