import React from "react";
import { Container, Divider, Grid } from "@mui/material";
import { Button } from "react-bootstrap";
import Logo from "../images/logoo.png";
import construction8 from "../images/construction8.jpg";

const Structural = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      {/* ------------------ist content items ----------------- */}
      <div style={{ marginTop: "5rem" }}>
        <Container maxWidth="md">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={construction8}
                  alt="construction-img-8"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  Building plannings Our combination of knowledge, experience
                  and combined specialisms allows is to provide unbeatable
                  building services, turning our clients’ visions to life with
                  an end result that lives up to expectations. Alongside the
                  range of construction services we carry out, working with
                  4Site Construction will require no third parties since we can
                  fully manage your project from start to end
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
          <Divider style={{ paddingTop: "5rem" }}>
            <img
              src={Logo}
              alt="constuction-logo"
              style={{ height: "8rem", width: "8rem" }}
            />
          </Divider>
        </Container>
      </div>
    </div>
  );
};

export default Structural;
