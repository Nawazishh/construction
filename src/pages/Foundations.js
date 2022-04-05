import React from "react";
import { Grid, Container, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import SliderContent from "../components/SliderContent";
import FormSection from "../components/FormSection";
import MapContent from "../components/MapContent";
import foundation from "../images/foundation.jpg";
import foundation1 from "../images/foundation1.jpg";
import foundation2 from "../images/foundation2.jpg";
import foundation3 from "../images/foundation3.jpg";
import logo from "../images/logoo.png";

const Foundations = () => {
  return (
    <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Foundations are an integral part of a project, requiring a high
                level of precision. As established foundation construction
                specialists, 4Site Construction are on hand to carry out
                effective foundation construction in London as advised by the
                professional design team. The requirements of each project vary,
                depending on numerous factors which include the type of soil and
                levels of moisture. We will liaise directly with the
                environmental consultant and professional design team so we are
                ready to hit the ground running with the requirements for your
                project, establishing the best type of method for foundation
                wall construction.
              </p>
              <h3>Get in Touch With Foundation Wall Contractors</h3>
              <p
                style={{
                  lineHeight: "25px",
                  textAlign: "justify",
                  paddingTop: "1rem",
                }}
              >
                The team at 4Site Construction have over 35 years of experience
                dealing with foundation construction in London for a wide
                variety of projects, making us a highly skilled company. We are
                used to being proactive and are on hand to help problem solve
                should the need arise, being able to provide the ideal solution
                for your project. Contact us today to speak to one of our team
                for expert advice and a speedy no-obligation quote for
                foundation construction in London.
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
                Contact Us for expert advice today
              </Button>{" "}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={foundation}
                alt="foundation-img"
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
                  src={foundation1}
                  alt="foundation-img"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <h3>Ground Beams</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  Ground beams offer an alternative to other types of foundation
                  construction in London and are typically built from reinforced
                  concrete which is constructed at foundation level. Their
                  primary purpose is to support walls where the soil below is
                  weak. Typically ground beams are often quick to implement
                  which can speed up the construction process whilst providing
                  an effective solution during the construction stage.
                </p>
                <h3>Pile Caps</h3>
                <p>
                  A pile cap is used to distribute the weight of a building,
                  creating stable foundations where the ground below is soft or
                  unbalanced. Pile caps consist of a large concrete mat that
                  will sit above the piles to carry the load of the structure
                  being built above.
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
                src={foundation2}
                alt="foundation-img"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <h3>strip foundation Strip Foundations</h3>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                This form of foundation construction in London is the most
                popular and consists of a continuous strip of concrete
                supporting load-bearing walls. There are typically two kinds of
                strip foundations:
              </p>
              <li>Deep strip foundations</li>
              <p>
                Deep strip foundations are used where the building foundations
                need to be at a lower level. The process consists of digging a
                deep trench to reach the soil which can then be used to
                undertake deep strip foundations. After this, the strip
                foundations are dug and poured before a wall is built up to
                ground level.
              </p>
              <li>Wide strip foundations</li>
              <p
                style={{
                  lineHeight: "25px",
                  textAlign: "justify",
                  paddingTop: "1rem",
                }}
              >
                If the soil is soft or cannot bear a heavy load, wide strip
                foundations will be recommended. The wide strip foundations
                spread the load over a larger area and are reinforced with steel
                to reduce the loading per m².
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
                Discuss your project requirements
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
              <div>
                <h3>Raft Foundations</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  Raft foundations are suitable for weak soils but also
                  expensive soils including peat and clays. They hold the weight
                  of a building above the soil, avoiding the risk of expensive
                  foundation repairs in the future.Wide strip foundations
                  wouldn’t work in this scenario as they would not spread far
                  enough and the soil would not be able to withhold the
                  foundations. This option is also much more cost-effective than
                  having to pour and reinforce a concrete slab.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={foundation3}
                  alt="foundation-img"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
          </Grid>
          <div style={{ boxSizing: "border-box" }}>
            <Divider className="mt-4 mb-5">
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

export default Foundations;
