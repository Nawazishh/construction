import React from "react";
import { Grid, Container, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import SliderContent from "../components/SliderContent";
import FormSection from "../components/FormSection";
import MapContent from "../components/MapContent";
import buildiing from "../images/buildiing.jpg";
import buildiing1 from "../images/buildiing1.jpg";
import buildiing2 from "../images/buildiing2.jpg";
import logo from "../images/logoo.png";

const Building = () => {
  return (
    <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                With over 35 years of experience as a skilled building company
                producing turnkey solutions, we are on hand to undertake build
                projects for residential, commercial and industrial properties.
                The team at 4Site Construction are here to help with your
                project from start to finish, going above and beyond to keep
                things running smoothly and advising you on the best approach
                for your project.
              </p>
              <p
                style={{
                  lineHeight: "25px",
                  textAlign: "justify",
                }}
              >
                If you are interested in partnering with an experienced building
                company, do not hesitate to contact us today to discuss your
                project in further detail. We are here to help recommend the
                best solution and can provide you with a no-obligation quote to
                help you choose the right building contractors for you.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={buildiing}
                alt="building-img"
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
                  src={buildiing1}
                  alt="building-img"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div style={{ boxSizing: "border-box" }}>
                <h3>The Role of Building Contractors</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  We take responsibility for planning, leading, executing,
                  supervising and inspecting a building construction project to
                  provide a full package when it comes to building services.
                  From new construction developments to residential extensions,
                  finding established building contractors who offer the most
                  effective solutions will ensure your completed project meets
                  the highest standards, in a cost effective and timely manner.
                </p>
                <Button
                  variant="outline-warning"
                  size="lg"
                  style={{
                    color: "black",

                    fontSize: "20px",
                    marginTop: "1rem",
                  }}
                >
                  Request a Free Pricing Estimate
                </Button>{" "}
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
                src={buildiing2}
                alt="building-img"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Building plannings Our combination of knowledge, experience and
                combined specialisms allows is to provide unbeatable building
                services, turning our clients’ visions to life with an end
                result that lives up to expectations. Alongside the range of
                construction services we carry out, working with 4Site
                Construction will require no third parties since we can fully
                manage your project from start to end:
              </p>
              <li>Establishing a project plan</li>
              <li>Project management by building contractors</li>
              <li>Supervising all on site workers</li>
              <li>Managing local building regulations</li>
              <li>Carrying out full build services</li>
              <Button
                variant="outline-warning"
                size="lg"
                style={{
                  color: "black",

                  fontSize: "20px",
                  marginTop: "2rem",
                }}
              >
                Get Expert Advice Today
              </Button>{" "}
            </div>
          </Grid>
        </Grid>
        <div style={{ boxSizing: "border-box", marginTop: "1rem" }}>
          <Divider className="mt-2">
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

export default Building;
