import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { Fade } from "react-reveal";
import userlogo from "../images/user.svg";
import arrows from "../images/arrows.svg";
import tick from "../images/tick.svg";
import ticksetting from "../images/ticksetting.svg";
import searchlogo from "../images/searchlogo.svg";
// import "./Fotter.css";
import "./Header.css";
const SliderContent = () => {
  const settings = {
    dots: true,
    arrows: false,
    focusOnSelect: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        marginTop: "5rem",
        backgroundColor: "#070022",
        backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",

        boxSizing: "border-box",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="whitesmoke"
          fill-opacity="1.5"
          d="M0,0L120,10.7C240,21,480,43,720,96C960,149,1200,235,1320,277.3L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <Container maxWidth="md" spacing={2} style={{ boxSizing: "border-box" }}>
        <h4 style={{ textAlign: "center", paddingTop: "1rem", color: "white" }}>
          Enhance Your Property With Reliable Construction Services
        </h4>
        <h3 style={{ textAlign: "center", paddingTop: "1rem", color: "white" }}>
          <Fade top big cascade duration={2000}>
            Why Choose 4Site Construction?
          </Fade>
        </h3>
        <Slider {...settings} style={{ paddingTop: "3rem" }}>
          <Fade left big cascade duration={2000}>
            <div
              className="ist-slide-content"
              style={{
                boxSizing: "border-box",
                borderLeft: "1px solid white",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={searchlogo}
                  alt="search-img"
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                  }}
                />
              </div>
              <h3 style={{ textAlign: "center", padding: "20px" }}>
                Upmost Attention to details
              </h3>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                Practicality, safety, longevity and aesthetics are never
                overlooked by our professional team.
              </p>
            </div>
          </Fade>
          {/* second slide content  */}
          <Fade left big cascade duration={2000}>
            <div
              className="nd-slide-content"
              style={{ boxSizing: "border-box" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Full Project Managment "
                  class=""
                  src={ticksetting}
                  style={{ width: "100%", height: "80px", textAlign: "center" }}
                />
              </div>
              <h3
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                Upmost Attention to details
              </h3>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                Practicality, safety, longevity and aesthetics are never
                overlooked by our professional team.
              </p>
            </div>
          </Fade>
          {/* third slide content  */}

          <Fade left big cascade duration={2000}>
            <div
              className="rd-slide-content"
              style={{ boxSizing: "border-box" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Maintaining Professionlaism "
                  class=""
                  src={arrows}
                  style={{ width: "100%", height: "80px", textAlign: "center" }}
                />
              </div>
              <h3 style={{ textAlign: "center", padding: "20px" }}>
                Upmost Attention to details
              </h3>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                Practicality, safety, longevity and aesthetics are never
                overlooked by our professional team.
              </p>
            </div>
          </Fade>
          {/* fourth slide content */}
          <Fade left big cascade duration={2000}>
            <div
              className="th-slide-content"
              style={{ boxSizing: "border-box" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Independant "
                  src={tick}
                  style={{ width: "100%", height: "80px", textAlign: "center" }}
                />
              </div>
              <h3 style={{ textAlign: "center", padding: "20px" }}>
                Upmost Attention to details
              </h3>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                Practicality, safety, longevity and aesthetics are never
                overlooked by our professional team.
              </p>
            </div>
          </Fade>
          {/* fifth slide content  */}
          <Fade left big cascade duration={2000}>
            <div
              className="te-slide-content"
              style={{ boxSizing: "border-box" }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Responsible Unobtrusive "
                  class=""
                  src={userlogo}
                  style={{ width: "100%", height: "80px", textAlign: "center" }}
                />
              </div>
              <h3 style={{ textAlign: "center", padding: "20px" }}>
                Upmost Attention to details
              </h3>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                Practicality, safety, longevity and aesthetics are never
                overlooked by our professional team.
              </p>
            </div>
          </Fade>
        </Slider>
      </Container>
    </div>
  );
};
export default SliderContent;
