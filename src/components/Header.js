import React from "react";
import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import Logo from "../images/logoo.png";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-img">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <img
                src={Logo}
                alt="logo"
                style={{ width: "8rem", height: "7rem" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto mx-4 text-center">
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item className="dropdown-content">
                  <Link to="/foundations" style={{ textDecoration: "none" }}>
                    Foundations
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/waterproofing" style={{ textDecoration: "none" }}>
                    WaterProofing
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/basement" style={{ textDecoration: "none" }}>
                    Basement
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/structure" style={{ textDecoration: "none" }}>
                    Structural
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/underpipping " style={{ textDecoration: "none" }}>
                    UnderPipping
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/piling" style={{ textDecoration: "none" }}>
                    Piling
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/vauletconversion"
                    style={{ textDecoration: "none" }}
                  >
                    Vault Converison
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/building" style={{ textDecoration: "none" }}>
                    Building
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="nav-linkk">
                <Link
                  to="/projects"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                </Link>
              </Nav.Link>

              <Nav.Link className="nav-linkk">
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-linkk">
                <Link
                  to="/latestnews"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Latest News
                </Link>
              </Nav.Link>
              <Nav.Link className="nav-linkk">
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className=" text-center">
              <Nav.Link href="#deets">
                <Button
                  variant="outline-warning"
                  size="lg"
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Get Free Quotes
                </Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Container>
          <h1 style={{ paddingTop: "9rem", fontSize: "50px", color: "white" }}>
            Building Services
          </h1>

          <h5
            style={{
              color: "white",
              paddingTop: "20px",
            }}
          >
            <span style={{ backgroundColor: "#1075ED" }}>
              If you are interested in partnering with an experienced building
              <br />
              company, contact us to discuss your project needs.
            </span>
          </h5>
          <hr style={{ width: "70%", color: "white", height: "1px" }} />

          <div>
            <Button
              variant="outline-warning"
              size="lg"
              style={{ marginTop: "20px", color: "#1075ED", fontSize: "25px" }}
            >
              Get in Touch Now
            </Button>{" "}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
