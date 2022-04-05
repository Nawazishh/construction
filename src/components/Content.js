import React from "react";
import { Container, Grid } from "@mui/material";
import { Button } from "react-bootstrap";
import construction6 from "../images/construction6.jpg";
import construction7 from "../images/construction7.jpg";

const Content = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                With over 35 years of experience as a skilled building company
                producing turnkey solutions, we are on hand to undertake build
                projects for residential, commercial and industrial properties.
                The team at 4Site Construction are here to help with your
                project from start to finish, going above and beyond to keep
                things running smoothly and advising you on the best approach
                for your project.
              </p>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
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
                src={construction6}
                alt="construction-img-7"
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
                  src={construction7}
                  alt="construction-img-2"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
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
                    marginTop: "2rem",
                  }}
                >
                  Request a Free Pricing Estimate
                </Button>{" "}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Content;
