import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Fotter.css";
import { Container, Grid } from "@mui/material";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
        marginTop: "3rem",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F5F5F5"
          fill-opacity="2.2"
          d="M0,288L120,256C240,224,480,160,720,112C960,64,1200,32,1320,16L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <h2 style={{ color: "white" }}>Need Help With</h2>
              <h2 style={{ color: "blue" }}>Anything?</h2>
              <p style={{ color: "white" }}>
                Don't hesitate to call us or get in touch with us through our
                social media platforms below.
              </p>
              <div>
                <span style={{ color: "blue" }}>
                  {" "}
                  <BsInstagram style={{ fontSize: "2rem", color: "black" }} />
                </span>
                <span style={{ paddingLeft: "10px" }}>
                  {" "}
                  <FiFacebook style={{ fontSize: "2rem", color: "black" }} />
                </span>
                <span style={{ paddingLeft: "10px", color: "white" }}>
                  {" "}
                  <FaLinkedinIn style={{ fontSize: "2rem", color: "black" }} />
                </span>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <h4 style={{ color: "white ", padding: "5px" }}>Services</h4>
              <div
                style={{
                  color: "whitesmoke",
                  padding: "5px",
                }}
              >
                <h6>
                  <Link
                    to="/basement"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Basement
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/structure"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Structure
                  </Link>
                </h6>

                <h6>
                  <Link
                    to="/waterproofing"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    WaterProofing
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/foundations"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Foundations
                  </Link>
                </h6>

                <h6>
                  <Link
                    to="/building"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Building
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/piling"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Piling
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/underpipping"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    UnderPipping
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/vauletconversion"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Vaulet Conversion
                  </Link>
                </h6>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ color: "white ", boxSizing: "border-box" }}>
              <h4
                style={{
                  padding: "5px",
                  textAlign: "justify",
                  alignItems: "center",
                }}
              >
                Pages
              </h4>
              <div
                style={{
                  padding: "5px",
                }}
                className="dis-in-line"
              >
                <h6>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home{" "}
                  </Link>
                </h6>

                <h6>
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    Projects
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {" "}
                    About Us
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/latestnews"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Latest News
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Contact Us
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/stratford"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Stratford
                  </Link>
                </h6>

                <h6>
                  <Link
                    to="/construction"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Construction
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/companies"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Companies
                  </Link>
                </h6>
                <h6>
                  <Link
                    to="/notitle"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    #1237 (no title)
                  </Link>
                </h6>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <h4 style={{ color: "white" }}>Contact Us</h4>
              <div
                style={{
                  color: "whitesmoke",
                }}
              >
                <h6>Rayne, Braintree, CM77 6SR</h6>
                <h6>Tel: 01376 311 133</h6>
                <h6>Fast response: 07889 273 789</h6>
                <h6>Email: info@4siteconstruction.co.uk</h6>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
