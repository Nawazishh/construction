import React from "react";
import { Grid, Container, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import SliderContent from "../components/SliderContent";
import FormSection from "../components/FormSection";
import MapContent from "../components/MapContent";
import structure from "../images/structure.jpg";
import structure1 from "../images/structure1.jpg";
import structure2 from "../images/structure2.jpg";
import structure3 from "../images/structure3.jpg";
import structure4 from "../images/structure4.jpg";
import logo from "../images/logoo.png";

const Structure = () => {
  return (
    <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Offering a specialist structural frame construction solution, we
                are on hand to bring your project to life. Although we carry out
                a lot of our structural frame construction in and around London
                and the South East, we regularly undertake structural work
                across the UK.
              </p>
              <p
                style={{
                  lineHeight: "25px",
                  textAlign: "justify",
                  paddingTop: "1rem",
                }}
              >
                Having worked with a whole range of clients, all with different
                requirements, we can draw on our wealth of experience and use
                our knowledge to professionally undertake your project. In the
                past, we have also been tasked with adding whole floors on top
                of existing buildings and developments to create superstructures
                for offices or residential spaces to amplify the value of the
                area available to you.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={structure}
                alt="structure"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* --------------------------2nd content items -------------------- */}
      <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
        <Container maxWidth="md">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={structure1}
                  alt="structure"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div style={{ boxSizing: "border-box" }}>
                <h3>Structural Frame Construction</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  4Site Construction is an established team who have been
                  providing a wide range of clients with quality structural work
                  for over 15 years. We work with all of our clients to ensure
                  their goals are reached, closely aligning with the client and
                  the professional design team for project efficiency. In
                  addition to this, we are experienced in carrying out the
                  design and build aspects of a project which enables us to
                  manage the whole process from start to finish.
                </p>
                <p>
                  If you’re interested in having a structural contractor assess
                  the requirements of your property, contact us today to speak
                  to one of the team. We are always more than happy to discuss
                  any queries or concerns you may have about structural work and
                  can provide you with a quick turnaround quote with absolutely
                  no obligations.
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
                src={structure2}
                alt="structure"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <h3>steel frames RC Frame</h3>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                From flat developments to car parks, RC frames use reinforced
                concrete structures and advanced machinery to undertake complex
                more complex projects. Often RC frames are used for restricted
                areas.
              </p>
              <h3>steel Frame</h3>
              <p>
                Steel frames are a very high strength yet low weight way to form
                the structure of a building. Most commonly steel frames are used
                to span over large distances such as high rise properties,
                industrial warehousing and other superstructures.
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
                Request Your Free Quote
              </Button>{" "}
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* --------------------------2nd content items -------------------- */}
      <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
        <Container maxWidth="md">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <h3>ICF (Insulated Concrete Form)</h3>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  This method is unique in the sense that it requires on site
                  building; concrete is poured into a hollow frame which is then
                  reinforced with steel. ICF is a popular choice for residential
                  developments as it energy efficient and provides a great layer
                  of insulation.
                </p>
                <h3>Concrete Frame</h3>
                <p>
                  Typically used on concrete foundations, concrete frames
                  consist of a network of beams which form the structure of a
                  building. Concrete frames are a particularly heavyweight
                  option which are used to support the weight of floors, roofs
                  and walls.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={structure3}
                  alt="structure"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container
        maxWidth="md"
        style={{ marginTop: "5rem", boxSizing: "border-box" }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={structure4}
                alt="structure"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <h3>Structural Openings</h3>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Structural openings are often necessary to support the wall
                surrounding any new openings. This helps with the stability of
                the property and the support of the structure above.
              </p>
              <h3>Portal Frames</h3>
              <p>
                This method is most often used on low structures such as
                industrial units and retail properties. Portal frames use
                columns which are connected together and are popular for large
                areas.
              </p>
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
    </div>
  );
};

export default Structure;
