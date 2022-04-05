import React from "react";
import { Grid, Container, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import SliderContent from "../components/SliderContent";
import FormSection from "../components/FormSection";
import MapContent from "../components/MapContent";
import vaulerconversion from "../images/vauletconversion.jpg";
import vaulerconversion1 from "../images/vauletconversion1.jpg";
import vaulerconversion2 from "../images/vauletconversion2.jpg";
import logo from "../images/logoo.png";

const VauletConversion = () => {
  return (
    <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                As well as giving you a lovely new space to relax, work or
                socialise in, the additional living space created through a
                cellar conversion in London can increase the value of your
                property down the line. Just a few of the benefits of a good
                quality London cellar conversion include:
              </p>
              <li>Added value if the day comes to sell the property.</li>
              <li>
                Additional habitable space within your home to enjoy day-to-day.
              </li>
              <li>A waterproofed cellar to prevent damp/ water damage.</li>
              <li>Expert craftmanship from the 4Site Construction team.</li>
              <Button
                variant="outline-warning"
                size="lg"
                style={{
                  color: "black",

                  fontSize: "20px",
                  marginTop: "2rem",
                }}
              >
                Kick Start Your Project Today
              </Button>{" "}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={vaulerconversion}
                alt="vaulerconversion-img"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* --------------------------2nd content items -------------------- */}

      {/* slider content component */}
      <SliderContent />
      {/* third section */}
      <Container maxWidth="md" style={{ marginTop: "5rem" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={vaulerconversion1}
                alt="vaulerconversion-img"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <h3>Maximise Your Space With a London Cellar Converison</h3>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                However small your vaulted cellar may be, don’t underestimate
                the potential of a cellar conversion in London. Cellars and
                basements are often neglected areas within a home, seen as damp,
                dark and impractical, but a London cellar conversion can really
                maximise your homes full potential and provide your family with
                additional living space to enjoy. Find out how we can turn a
                small, unused space into a beautifully designed extension of
                your home.
              </p>
              <Button
                variant="outline-warning"
                size="lg"
                style={{
                  color: "black",
                  fontSize: "20px",
                  marginTop: "2rem",
                }}
              >
                Get a Free Converison Quote
              </Button>{" "}
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* --------------------------2nd content items -------------------- */}
      <div style={{ marginTop: "5rem" }}>
        <Container maxWidth="md">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div style={{ boxSizing: "border-box" }}>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  Many homeowners are concerned that their vaulted cellar has
                  issues with water drainage. Although it may seem like a
                  daunting project to deal with, being reluctant to consider a
                  cellar refurbishment loses the potential of a lovely addition
                  to your home.
                </p>
                <p style={{ textAlign: "justify" }}>
                  We see so much more potential than an underground storage
                  area; London cellar conversions can transform small spaces
                  into stylish, cosy areas for you and your family to finally
                  enjoy every day. To name just some of the opportunities a
                  cellar conversion in London can open up, a guest bedroom,
                  additional bathroom or office space can be implemented into
                  your home without the need for an extension.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={vaulerconversion2}
                  alt="vaulerconversion-img"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
          </Grid>
          <div style={{ boxSizing: "border-box" }}>
            <Divider className="mt-5">
              <img
                src={logo}
                alt="constuction-logo"
                style={{ height: "8rem", width: "8rem" }}
              />
            </Divider>
          </div>

          <FormSection />
        </Container>
      </div>
      <MapContent />
    </div>
  );
};

export default VauletConversion;
