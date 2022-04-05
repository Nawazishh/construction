import React from "react";
import { Grid, Container } from "@mui/material";
import "./project.css";
import MapContent from "../components/MapContent";
import construction9 from "../images/construction9.jpg";
import construction10 from "../images/construction10.jpg";
import construction11 from "../images/construction11.jpg";
import construction13 from "../images/construction13.jpg";
import construction14 from "../images/construction14.jpg";
import construction15 from "../images/construction15.jpg";
import construction16 from "../images/construction16.jpg";
import construction17 from "../images/construction17.jpg";
import "../components/Header.css";

const Projects = () => {
  return (
    <div>
      <div style={{ marginTop: "5rem" }}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="container">
                <img
                  src={construction9}
                  alt="construction9"
                  className="image "
                />
                <div className="overlay">
                  <div className="text">
                    Hello World this is gona be overlay effect that am using for
                    the long time ago{" "}
                  </div>
                </div>
              </div>
            </Grid>
            {/* second */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="container">
                <img
                  src={construction10}
                  alt="construction10"
                  className="image "
                />

                <div className="overlay">
                  <div className="text">
                    Hello World this is gona be overlay effect that am using for
                    the long time ago{" "}
                  </div>
                </div>
              </div>
            </Grid>
            {/* third */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="container">
                <img
                  src={construction11}
                  alt="construction11"
                  className=" image"
                />
                <div className="overlay">
                  <div className="text">
                    Hello World this is gona be overlay effect that am using for
                    the long time ago{" "}
                  </div>
                </div>
              </div>
            </Grid>
            {/* fourth */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="container">
                <img
                  src={construction13}
                  alt="construction13"
                  className="image "
                />
                <div className="overlay">
                  <div className="text">
                    Hello World this is gona be overlay effect that am using for
                    the long time ago{" "}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        {/* second section */}
        <Container maxWidth="md" style={{ marginTop: "2rem" }}>
          <Grid container spacing={2}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="container">
                <img
                  src={construction14}
                  alt="construction14"
                  className="image "
                />
                <div className="overlay">
                  <div className="text">
                    Hello World this is gona be overlay effect that am using for
                    the long time ago{" "}
                  </div>
                </div>
              </div>
            </Grid>
            {/* second */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="container">
                <img
                  src={construction15}
                  alt="construction15"
                  className="image "
                />

                <div className="overlay">
                  <div className="text">
                    Hello World this is gona be overlay effect that am using for
                    the long time ago{" "}
                  </div>
                </div>
              </div>
            </Grid>
            {/* third */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="container">
                <img
                  src={construction16}
                  alt="construction16"
                  className=" image"
                />
                <div className="overlay">
                  <div className="text">
                    Hello World this is gona be overlay effect that am using for
                    the long time ago{" "}
                  </div>
                </div>
              </div>
            </Grid>
            {/* fourth */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="container">
                <img
                  src={construction17}
                  alt="construction17"
                  className=" image"
                />
                <div className="overlay">
                  <div className="text">
                    Hello World this is gona be overlay effect that am using for
                    the long time ago{" "}
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        {/* map content */}
        <MapContent />
      </div>
    </div>
  );
};

export default Projects;
