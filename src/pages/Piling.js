import React from "react";
import { Grid, Container, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import SliderContent from "../components/SliderContent";
import FormSection from "../components/FormSection";
import MapContent from "../components/MapContent";
import piliing from "../images/piling.jpg";
import piliing1 from "../images/piling1.jpg";

import piliing2 from "../images/piling2.jpg";

import piliing3 from "../images/piling3.jpg";

import logo from "../images/logoo.png";

const Piling = () => {
  return (
    <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                4Site Construction are an experienced piling contractor in
                London with an extensive range of piling rigs. By ensuring that
                we can choose the right piling rig and piling technique required
                for your project, we can mobilise quickly to help you move
                closer to the next phase of your project.
              </p>
              <p
                style={{
                  lineHeight: "25px",
                  textAlign: "justify",
                }}
              >
                We thrive on the type of projects that another piling contractor
                in London may walk away from, specialising in restricted access
                piling with rigs ranging from 1.5t to 15t. We offer piles
                ranging from 150mm in diameter to 750mm and in addition to
                piling, we are also able to install ground beams and capping
                beams which link the piles to create a construction platform.
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
                Plan Your Project
              </Button>{" "}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={piliing}
                alt="piling"
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
                  src={piliing1}
                  alt="piling"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div style={{ boxSizing: "border-box" }}>
                <h3>
                  Contact an Experienced Piling Contractor in London Today
                </h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  We are always available to offer the best advice on the piling
                  services available and whether ground beams or capping beams
                  will be required for your project. If you would like to find
                  out more information from our
                </p>

                <p>
                  accredited construction specialists and piling contractor in
                  London or you’re looking to get a quote for your job, don’t
                  hesitate to contact our construction specialists at 4Site
                  Construction.
                </p>
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
                src={piliing2}
                alt="piling"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <h3>Mini Piling</h3>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Over the years, 4Site Construction have become recognised for
                delivering the near impossible in comparison to other mini
                piling contractors in London. We specialise in the provision of
                mini piled systems, offering a mini piling service utilising
                piling rigs from 1.5 to 15 tonnes. On the majority of occasions,
                these do not require piling mats or specialist provisions.
              </p>
              <p>
                Our mini piling equipment can be used for work inside buildings
                and in locations where restricted access piling services are
                needed. These occasions could include scenarios where headroom
                is an issue and the use of larger piling systems would be
                impossible.
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
                Request Free Quotes
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
                <h3>CFA Piling</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  Continuous Flight Auger (CFA) piling involves drilling
                  downwards with a hollow auger. Once the required depth has
                  been reached, concrete is injected through the auger as it is
                  pulled up and out of the hole. In doing so, a continuous
                  reinforced concrete pile is formed, which stops at ground
                  level as the auger reaches the surface. CFA piling is an
                  efficient technique if carried out by a trustworthy CFA piling
                  contractor in London, being used with most ground conditions
                  and having the advantage of causing very little disturbance to
                  surrounding areas.
                </p>
                <h3 style={{ marginTop: "2rem" }}>Open Bore Piling</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  The open bore piling method allows for a greater range of
                  sizes and depths of pile. All of the rigs at our disposal are
                  extremely high powered which make them ideal for dealing with
                  most ground conditions. Our bored piling machines are capable
                  of installing pile from 150mm to 750mm to a maximum depth of
                  30 metres and once the required depth is reached, a
                  reinforcing steel cage can then be installed and the pile
                  concreted.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={piliing3}
                  alt="piling"
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

export default Piling;
