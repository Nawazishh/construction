import React from "react";
import { Grid, Container, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import SliderContent from "../components/SliderContent";
import FormSection from "../components/FormSection";
import MapContent from "../components/MapContent";
import waterproofingg from "../images/waterproofing.jpg";
import waterproofingg1 from "../images/waterproofing1.jpg";
import waterproofingg2 from "../images/waterproofing.jpg";
import logo from "../images/logoo.png";

const WaterProofing = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Working with a reputable waterproofing company in London to
                implement an effective solution is much simpler than you may
                think when you partner with the correct professionals. We are a
                waterproofing company accredited by Delta, Sika and other
                leading manufacturers of cavity drain membranes and other
                products which help defend your property from water ingress. As
                an experienced waterproofing company in London with over 35
                years of experience, we are on hand to recommend the best
                approach for your personal requirements and do our bit to make
                the process as smooth and efficient as possible. Our
                waterproofing in London is fully warrantied for your peace of
                mind and typically, the design is also warrantied by the
                supplier we are partnered with.
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
                Request a free pricing Estimate
              </Button>{" "}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={waterproofingg}
                alt="waterproofingg-img"
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
                  src={waterproofingg1}
                  alt="waterproofingg-img"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <h3>
                  4Site Construction: An Established Waterproofing Company
                </h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  Using an accredited waterproofing company with warranties and
                  guarantees is important to ensure you are receiving a quality
                  service. Our team of construction specialists pride ourselves
                  on offering a reliable solution using the best quality
                  materials and equipment. By adapting our approach to meet your
                  project requirements, we maintain our efficiency for an
                  effective process for both parties.
                </p>

                <p>
                  Our extensive knowledge of waterproofing in London enables our
                  team to provide efficient and effective implementation of the
                  required basement waterproofing. If we are involved early
                  enough in the process, we can liaise directly with the
                  waterproofing supplier to adopt the most efficient methodology
                  for your project. As well as offering these services in line
                  with our other offerings, we can also carry them out
                  independently, working to your needs to deliver a trustworthy
                  outcome.
                </p>
                <p>
                  Contact us today if you wish to learn more and get a
                  no-obligation quote from our team; we would love to hear from
                  you.
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
                src={waterproofingg2}
                alt="waterproofingg-img"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <h3>waterproofing floor Cavity Drain Membrane</h3>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Cavity drain membranes tend to be our main choice as a
                waterproofing company in London as we believe they provide a
                more effective alternative to the traditional cementitious
                tanking systems. Delta cavity drain membranes utilise the
                innovative design process which allows water to penetrate the
                structure but once inside, the water is held within the air gap
                and then diverted to a suitable drainage point.
              </p>
              <p>
                This type of waterproofing in London avoids the build-up of
                pressure against the wall which can be found with cementitious
                tanking. The air gap means that the building can breathe and dry
                out, making it much more effective for waterproofing in London
                across many scenarios.
              </p>
              <p>
                This basement waterproofing system avoids the build-up of
                pressure against the basement wall which is found with
                cementitious tanking. The maintenance of the air gap means that
                the building can breathe and dry out, a much more effective
                solution for basement waterproofing.
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
                Get Expert Advice today
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
      <MapContent />
      {/* --------------------------2nd content items -------------------- */}
    </div>
  );
};

export default WaterProofing;
