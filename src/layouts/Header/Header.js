import React, { useEffect, useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

import images from "~/assets/images";
import styles from "./Header.module.scss";
import paths from "~/routes/paths/paths";
import customerPaths from "~/features/customer/routes/paths/paths";

Header.propTypes = {};

function Header(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const shadowNavBar = { "shadow-sm": isScrolled || isToggle };

  return (
    <>
      <div className={clsx(styles.placeholder)}></div>
      <div
        className={clsx(
          styles.wrapper,
          "container-fluid fixed-top",
          shadowNavBar
        )}
      >
        <Navbar expand="lg" bg="body-light" data-bs-theme="light">
          <Container className="">
            <Navbar.Brand as={NavLink} to={"/"} className={clsx(styles.logo)}>
              <img src={images.logo} alt="Home" />
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={() => setIsToggle(!isToggle)}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav" className="fs-5 ">
              <Nav className="me-auto " onSelect={() => setIsToggle(true)}>
                <Nav.Link as={Link} to={paths.home}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={paths.trackingShipment}>
                  Tracking
                </Nav.Link>
                <Nav.Link as={Link} to={paths.adminPanel}>
                  Admin
                </Nav.Link>
                <Nav.Link as={Link} to={paths.test}>
                  Test
                </Nav.Link>
                <NavDropdown title="Customer">
                  <NavDropdown.Item as={Link} to={customerPaths.createShipment}>
                    New shipment
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to={customerPaths.createPickUpOrder}
                  >
                    New pick up order
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
      </div>
    </>
  );
}

export default Header;
