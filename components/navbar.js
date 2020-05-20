import React from "react";
import { Link } from "react-router-dom";
import { Slide, Fade } from "react-reveal";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../css/navbar.css";
import Logo from "../media/logo.png";

export default function Navi() {
  const [state, setState] = React.useState({
    show: false,
    hideNav: false,
  });

  const handleMouseOver = () => {
    setState({
      show: true,
    });
  };

  const handleMouseOff = () => {
    setState({
      show: false,
    });
  };

  return (
    <Slide down>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              draggable={false}
              src={Logo}
              className="navbar-brand"
              alt="logo.png"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="#link">About</Nav.Link>
            </Link>
            <NavDropdown
              show={state.show}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseOff}
              title="More..."
              id="basic-nav-dropdown"
            >
              <Fade>
                <Link to="/tutorials">
                  <NavDropdown.Item href="#products">Products</NavDropdown.Item>
                </Link>
              </Fade>
              <Fade>
                <Link to="/gallery">
                  <NavDropdown.Item href="#gallery">
                    The Gallery
                  </NavDropdown.Item>
                </Link>
              </Fade>
              <Fade>
                <Link to="/products">
                  <NavDropdown.Item href="#Tutorials">
                    Tutorials
                  </NavDropdown.Item>
                </Link>
              </Fade>
              <NavDropdown.Divider />
              <Fade>
                <Link to="/social">
                  <NavDropdown.Item href="#social">Social</NavDropdown.Item>
                </Link>
              </Fade>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Slide>
  );
}
