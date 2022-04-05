import React from "react";
import { Container } from "react-bootstrap";
import { Divider } from "@mui/material";
import map from "../images/map.png";
const MapContent = () => {
  return (
    <div>
      <Container
        className="bg-img-map"
        style={{
          position: "relative",
          zIndex: "1",
          top: "10rem",
          backgroundImage: `url(${map})`,
          height: "80vh",
        }}
      >
        <div
          style={{
            height: "400px",
            width: "350px",
            backgroundColor: "white",
            position: "absolute",
            left: "50px",
            top: "50px",
            textAlign: "center",
          }}
        >
          <div style={{ paddingTop: "2rem" }}>
            <h4>Our Offices</h4>

            <div style={{ textAlign: "center" }}>
              <Divider
                style={{
                  width: "20%",
                  height: "0.2rem",
                  backgroundColor: "#4A5A65",
                  position: "absolute",
                  left: "9rem",
                }}
              />
            </div>
            <h5 style={{ color: "#F1A821", paddingTop: "1rem" }}>
              map content
            </h5>
            <h6>Rayne, Braintree, CM77 6SR</h6>
            <h5 style={{ color: "#F1A821", paddingTop: "1.5rem" }}>
              LONDON OFFICE
            </h5>
            <h6>Rayne, Braintree, CM77 6SR</h6>
            <h6 style={{ paddingTop: "1rem" }}>Phone: 01376 311 133</h6>
            <h6 style={{ paddingTop: "1rem" }}>
              Email: info@4siteconstruction.co.uk
            </h6>
            <h5 style={{ paddingTop: "1rem" }}>Contact Us</h5>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MapContent;
