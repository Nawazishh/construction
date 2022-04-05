import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import {
  Container,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Form } from "react-bootstrap";
import MapContent from "../components/MapContent";
import { Fade } from "react-reveal";
import quinn from "../images/quinn.png";
import koaster from "../images/koaster.png";
import ateral from "../images/ateral.png";
import home from "../images/home.png";
import structureimg from "../images/structureimg.png";
import partner from "../images/partner.png";
import adepic from "../images/adepic.png";
import ohbpic from "../images/ohbpic.png";
import house from "../images/house.svg";
import structurall from "../images/structurall.svg";
import waterproofing from "../images/waterproofing.svg";
import foundations from "../images/foundations.svg";
import building from "../images/building.svg";
import piling from "../images/pilinglogo.svg";
import underpinning from "../images/underpinning.svg";
import vaultconversion from "../images/vaultconversion.svg";
import searchlogo from "../images/searchlogo.svg";

const Contact = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    focusOnSelect: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
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
    <div className="main-div">
      {/* form section */}
      <div className="formsection">
        <Container maxWidth="md" style={{ marginTop: "5rem" }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <h2>Work With an Accredited Building Company</h2>
                <p
                  style={{
                    textAlign: "justify",
                    lineHeight: "25px",
                    paddingTop: "1rem",
                  }}
                >
                  From the day you partner with us to carry out building
                  services, we are dedicated to delivering cost-effective
                  solutions that are designed to last. We will advise on the
                  best approach and the different options available to you,
                  helping you achieve the best results and keeping you informed
                  throughout the process. Good building contractors will always
                  determine the best method to meet the goals of the client,
                  using their expertise to make sure the build process is
                  carried out safely and effectively. With extensive experience
                  working across various construction practices including
                  development of foundations, piling with a range of our rigs
                  and structural work, our highly skilled workmanship allows us
                  to design and undertake a full build. We will work with you to
                  gain a thorough understanding of your project needs and offer
                  the ideal solution to meet these, coordinating the project
                  dealing with any issues head on and tightly following set
                  deadlines.
                </p>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  Our building contractors accomplish their duties by planning
                  activities, supervising workers and ensuring the project
                  follows local building regulations. Safety is paramount to us
                  as a building company, we ensure that the correct procedures
                  are in place on site and that Health & Safety measures are
                  followed at all times. The site manager will oversee the
                  project to ensure that not only is everyone safe, but that the
                  project is running smoothly at all stages. We do what we can
                  to cause as little disruption to any surrounding business and
                  residential properties; making considerations to allow them to
                  go about their day as normal.
                </p>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sm={12}
              style={{
                width: "100%",
              }}
            >
              <div>
                <Card>
                  <div
                    style={{
                      borderRadius: "0px",
                      backgroundImage:
                        "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                      boxSizing: "border-box",
                      padding: "0px 10px 0px 10px",
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "border-box",
                        paddingTop: "3rem",
                      }}
                    >
                      <h2 style={{ textAlign: "center" }}>
                        Get Your{" "}
                        <span style={{ color: "#88C7F4" }}>Free Quote </span>
                        Today!
                      </h2>
                      <p style={{ textAlign: "center" }}>
                        Our expert team are always on hand to offer advice and
                        recommendations for your construction project. Get in
                        touch today for a free no obligation quote or give us a
                        call on
                      </p>

                      <Form
                        style={{
                          backgroundColor: "none",
                          paddingTop: "2rem",
                          paddingBottom: "2rem",
                        }}
                      >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label> Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                            }}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                            }}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Phone No</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Phone No"
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                            }}
                          />
                        </Form.Group>
                        <div
                          style={{ paddingTop: "2rem" }}
                          className="help-content"
                        >
                          <h4> How can we help?</h4>
                          <p>
                            Let us know more about your project, we're here to
                            provide you with professional advice and a free
                            quote whenever you need us.
                          </p>
                        </div>
                        {/* for text area filed  */}
                        <Form.Group
                          style={{ paddingTop: "1rem" }}
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            rows={4}
                            style={{
                              backgroundImage:
                                "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                            }}
                          />
                        </Form.Group>
                        <div
                          className="d-grid gap-2"
                          style={{ paddingTop: "1rem" }}
                        >
                          <Button
                            variant="outline-warning"
                            size="lg"
                            style={{
                              color: "white",
                              fontSize: "20px",
                              marginTop: "1rem",
                            }}
                          >
                            Submit
                          </Button>{" "}
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          marginTop: "5rem",
          backgroundImage:
            "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
          color: "#f7f7f7",
          boxSizing: "border-box",
          paddingBottom: "5rem",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F5F5F5"
            fill-opacity="1.5"
            d="M0,0L120,10.7C240,21,480,43,720,96C960,149,1200,235,1320,277.3L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>

        <Container
          maxWidth="md"
          spacing={2}
          style={{ boxSizing: "border-box" }}
        >
          <Typography
            variant="h3"
            component="div"
            style={{ padding: "1rem 0 3rem 0", textAlign: "center" }}
          >
            <Fade>Structural</Fade>
          </Typography>
          <Slider {...settings} style={{ paddingTop: "3rem" }}>
            <div
              style={{
                boxSizing: "border-box",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
                  src={quinn}
                  alt="search-img"
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                  className="img-fluid"
                />
              </div>
            </div>
            {/* second slide content  */}
            <div className="" style={{ boxSizing: "border-box" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Full Project Managment "
                  src={koaster}
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            {/* third slide content  */}
            <div className="" style={{ boxSizing: "border-box" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Maintaining Professionlaism "
                  src={ateral}
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            {/* fourth slide content */}
            <div className="" style={{ boxSizing: "border-box" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Independant "
                  src={home}
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                  className="img-fluid"
                />
              </div>
            </div>
            {/* fifth slide content  */}
            <div className="" style={{ boxSizing: "border-box" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Responsible Unobtrusive "
                  src={structureimg}
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            {/* six slide*/}
            <div className="" style={{ boxSizing: "border-box" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Responsible Unobtrusive "
                  src={partner}
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            {/* 7th slide*/}
            <div className="" style={{ boxSizing: "border-box" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Responsible Unobtrusive "
                  src={adepic}
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            {/* 8th slide  */}
            <div className="" style={{ boxSizing: "border-box" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  alt="Responsible Unobtrusive "
                  src={ohbpic}
                  style={{
                    width: "100%",
                    height: "80px",
                    textAlign: "center",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </Slider>
        </Container>

        {/* card contianer */}
      </div>
      <div className="card-container" style={{ marginTop: "10rem" }}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link to="/basement" style={{ textDecoration: "none" }}>
                    <CardContent>
                      <img
                        src={house}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          Basements
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Basement Construction offers so much potential within
                          a project, the possiblities are endless
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link to="/structure" style={{ textDecoration: "none" }}>
                    <CardContent>
                      <img
                        src={structurall}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          Structural
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Offering a specialist structural frame construction
                          solutions,we are on hand to bring your project to life
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link to="/waterproofing" style={{ textDecoration: "none" }}>
                    <CardContent>
                      <img
                        src={waterproofing}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          WaterProofing
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Basement Construction offers so much potential within
                          a project, the possiblities are endless
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link to="/foundations" style={{ textDecoration: "none" }}>
                    <CardContent>
                      <img
                        src={foundations}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          Foundations
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Basement Construction offers so much potential within
                          a project, the possiblities are endless
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
            {/* fifth */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link to="/building" style={{ textDecoration: "none" }}>
                    <CardContent>
                      <img
                        src={building}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          Building
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Basement Construction offers so much potential within
                          a project, the possiblities are endless
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
            {/* sixth */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link to="/piling" style={{ textDecoration: "none" }}>
                    <CardContent>
                      <img
                        src={piling}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          Piling
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Basement Construction offers so much potential within
                          a project, the possiblities are endless
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
            {/* seventh */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link to="/underpipping" style={{ textDecoration: "none" }}>
                    <CardContent>
                      <img
                        src={underpinning}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          Underpinning
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Basement Construction offers so much potential within
                          a project, the possiblities are endless
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
            {/* 8th */}

            {/* 8th */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <CardContent>
                      <img
                        src={vaultconversion}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          Contact Us
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Basement Construction offers so much potential within
                          a project, the possiblities are endless
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
            {/* 9th */}
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <div className="card-Item" style={{ boxSizing: "border-box" }}>
                <Card>
                  <Link
                    to="/vaultconversion"
                    style={{ textDecoration: "none" }}
                  >
                    <CardContent>
                      <img
                        src={searchlogo}
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "100%", height: "70px" }}
                      />
                      <div
                        className="card-text"
                        style={{ textAlign: "center" }}
                      >
                        <Typography
                          variant="h5"
                          component="div"
                          style={{ paddingTop: "1rem", color: "black" }}
                        >
                          Vaulet Conversion
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ paddingTop: "1rem" }}
                        >
                          Basement Construction offers so much potential within
                          a project, the possiblities are endless
                        </Typography>
                      </div>
                      <div
                        style={{ textAlign: "center", paddingTop: "1.5rem" }}
                      >
                        <Button size="small" style={{ color: "#F3A800" }}>
                          Learn More{" "}
                          <span>
                            {" "}
                            <IoIosArrowForward />
                          </span>
                        </Button>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* map content  */}
      <MapContent />
    </div>
  );
};

export default Contact;
