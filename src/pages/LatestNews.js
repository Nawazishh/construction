import React from "react";
import { Grid, Container } from "@mui/material";
import MapContent from "../components/MapContent";
import latestnew from "../images/latestnew.jpg";
import latestnew1 from "../images/latestnew1.jpg";
import latestnew2 from "../images/latestnew2.jpg";
import latestnew3 from "../images/latestnew3.jpg";
import latestnew4 from "../images/latestnew4.jpg";
import latestnew5 from "../images/latestnew5.jpg";

const LatestNews = () => {
  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: "3rem" }}>
        <h1 style={{ textAlign: "center" }}>Latest Industry News</h1>
        <Grid container spacing={6} style={{ marginTop: "2rem" }}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <img
                src={latestnew}
                alt="img"
                style={{ width: "100%" }}
                className="img-fluid"
              />
              <h4 style={{ paddingTop: "1rem" }}>Why is my Basement Damp ?</h4>
              <p style={{ textAlign: "justify" }}>
                Surefire sign of a wet basement is a persistent musty smell or
                condensation. If you begin to notice wet spots on the basement
                floors or walls, you probably have a basement moisture problem.
                Persistent condensation can lead to structural damage. In many
                cases, a dehumidifier can provide a solution.
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <img
                src={latestnew1}
                alt="img"
                style={{ width: "100%" }}
                className="img-fluid"
              />
              <h4 style={{ paddingTop: "1rem" }}>
                The six main types of building structures{" "}
              </h4>
              <p style={{ textAlign: "justify" }}>
                Buildings serve several societal needs – primarily as shelter
                from weather, security, living space, privacy, to store
                belongings, and to comfortably live and work. A building as a
                shelter represents a physical division of the human habitat (a
                place of comfort and safety) and the outside (a place that at
                times may be harsh and harmful).
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <img
                src={latestnew2}
                alt="img"
                style={{ width: "100%" }}
                className="img-fluid"
              />
              <h4 style={{ paddingTop: "1rem" }}>
                Choosing the Best Foundation for Soil
              </h4>
              <p style={{ textAlign: "justify" }}>
                Commonly, the selection of foundation type for a given structure
                is controlled by number of factors for example soil type, past
                site usage, adjacent construction, size of development process,
                limitations. Among these factors, types of soil play significant
                role, that why this article discuss the selection of foundation
                based on different types of soil.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* second container */}
      <Container maxWidth="md" style={{ marginTop: "2rem" }}>
        <Grid container spacing={6} style={{ marginTop: "2rem" }}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <img
                src={latestnew3}
                alt="img"
                style={{ width: "100%" }}
                className="img-fluid"
              />
              <h4 style={{ paddingTop: "1rem" }}>
                Converting a Cellar into a Living Space
              </h4>
              <p style={{ textAlign: "justify" }}>
                A basement conversion is an increasingly popular home
                improvement project. And, converting a basement could deliver
                the extra living space you need in your home while, if your home
                doesn’t already have a basement, excavating underneath it can be
                a great alternative to building out.
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <img
                src={latestnew4}
                alt="img"
                style={{ width: "100%" }}
                className="img-fluid"
              />
              <h4 style={{ paddingTop: "1rem" }}>
                Dealing with a Damp Basement
              </h4>
              <p style={{ textAlign: "justify" }}>
                First, the simplest and least costly techniques are to remove
                excessive internal moisture sources in the basement
                (humidifiers, cooking) and ventilate other sources (clothes
                dryer, bathroom). Second, if condensation in the summer is the
                problem, do not ventilate the basement directly with warm, humid
                air.
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <div style={{ boxSizing: "border-box" }}>
              <img
                src={latestnew5}
                alt="img"
                style={{ width: "100%" }}
                className="img-fluid"
              />
              <h4 style={{ paddingTop: "1rem" }}>
                How to Choose a Building Contractor
              </h4>
              <p style={{ textAlign: "justify" }}>
                Ask if there is similar completed work that they have carried
                out that you can view. Make sure you speak to the previous
                customers for their comments, were they happy with the work? Was
                it started and completed on time? Was the final bill in line
                with the estimate?
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <MapContent />
    </div>
  );
};

export default LatestNews;
