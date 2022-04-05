import React from "react";
import { Grid, Container, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import SliderContent from "../components/SliderContent";
import FormSection from "../components/FormSection";
import MapContent from "../components/MapContent";
import basement from "../images/basement.jpg";
import basement1 from "../images/basement1.jpg";
import basement2 from "../images/basement2.jpg";
import basement3 from "../images/basement3.jpg";
import logo from "../images/logoo.png";

const Basement = () => {
  return (
    <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Enhance your property with the help of basement contractors,
                creating a functional space underneath your building. Basement
                construction in London allows us to safely transform the space
                under ground or under the original footprint of your property to
                create an additional level which is suitable for living.
                Although we predominantly undertake basement construction in
                London, we also work in surrounding areas and across the South
                East of EnglandEnhance your property with the help of basement
                contractors, creating a functional space underneath your
                building. Basement construction in London allows us to safely
                transform the space under ground or under the original footprint
                of your property to create an additional level which is suitable
                for living. Although we predominantly undertake basement
                construction in London, we also work in surrounding areas and
                across the South East of England
              </p>
              <p
                style={{
                  lineHeight: "25px",
                  textAlign: "justify",
                  paddingTop: "1rem",
                }}
              >
                Our staff are fully supported and enabled to deliver the project
                for our clients in a timely and cost effective manner. With
                every basement construction in London we undertake, a main
                project manager will be allocated depending on their
                specialisms. They will take ownership of that specific
                conversion project or under garden basement UK, ensuring that
                the entire team are working to the same high standards.
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
                Get Started with a free Quote
              </Button>{" "}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={basement}
                alt="basement"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* --------------------------2nd content items -------------------- */}
      <div style={{ marginTop: "5rem" }}>
        <Container maxWidth="md">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={basement1}
                  alt="basement"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div style={{ boxSizing: "border-box" }}>
                <h3>Discuss your Basement Construction in London Today</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  With over 35 years of experience in the construction of both
                  residential and commercial basements, our basement specialists
                  in London have built a reputation for our levels of skill and
                  care which are applied whilst planning and building our
                  clients basements. You can be assured that your project is in
                  safe hands with our basement contractors in London, resulting
                  in a dynamic and bespoke space which you can get use out of
                  for many more years to come. As experienced basement
                  contractors in London, our professional team will start by
                  discussing the best solutions for you and help turn your
                  vision into a reality. If you are interested in basement
                  construction in London, contact us today to discuss your
                  project ideas.
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* third content */}
      <div style={{ boxSizing: "border-box", marginTop: "5rem" }}>
        <Container maxWidth="md">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <h3>Working with Basement Contractors in London</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  The possibilities for basement construction in London are
                  endless, meaning you can develop your property to suit the
                  needs of your project. If you are looking into working with
                  basement specialists in London to create a games room to keep
                  the children entertained, luxury underground wine cellar or
                  even a swimming pool to splash about in, finding accredited
                  basement contractors can make all of this possible.
                </p>
                <p
                  style={{
                    lineHeight: "25px",
                    textAlign: "justify",
                    paddingTop: "1rem",
                  }}
                >
                  Our basement contractors in London can carry out basement
                  construction in existing developments to create a whole new
                  level of habitable space underneath an already multi storey
                  development, as well as residential under garden basement UK.
                  Basement construction in London can be carried out in multiple
                  ways, all of which will allow you to maximise the space you
                  already have:
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={basement2}
                  alt="basement"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* slider content component */}
      <SliderContent />
      {/* third section */}
      <Container maxWidth="md" style={{ marginTop: "5rem" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={basement3}
                alt="basement"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <h3>Sub-Basement Construction</h3>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                For larger basements, multi-layer basement construction in
                London has become increasingly popular. With property owners
                realising they can work alongside basement contractors in London
                to expand their space, it is a great way to maximise the endless
                opportunities within your existing property.
              </p>
              <p>
                With our years of experience undergoing basement construction in
                London, we can help to create useable space on multiple levels
                below your property. Not only do additional levels allow your
                property to grow to accommodate your needs, but you should even
                see the value of your property increase.
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
                Discuss with experts
              </Button>{" "}
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
      {/* --------------------------2nd content items -------------------- */}

      <MapContent />
    </div>
  );
};

export default Basement;
