import React from "react";
import {
  Grid,
  Container,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import SliderContent from "../components/SliderContent";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import MapContent from "../components/MapContent";
import { Bounce } from "react-reveal";
import structurall from "../images/structurall.svg";
import waterproofing from "../images/waterproofing.svg";
import foundations from "../images/foundations.svg";
import piling from "../images/pilinglogo.svg";
import underpinning from "../images/underpinning.svg";
import vaultconversion from "../images/vaultconversion.svg";
import basement from "../images/basements.svg";
import styled from "styled-components";
import construction20 from "../images/construction20.jpg";
import logo from "../images/logoo.png";
const P = styled.p`
  line-height: 27px;
  text-align: center;
  font-size: 16px;
  font-family: sans-serif;
  text-align: justify;
`;
const HP = styled.h2`
  line-height: 30px;
  font-family: sans-serif;
`;

const About = () => {
  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: "5rem" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <HP>Where it all Began</HP>

              <P>
                After working in construction for over 30 years, it was clear
                that we were ready to take our skills to the next level. In
                2006, 4Site Construction was born and we have not looked back
                since establishing our very own construction company in London.
                Beginning our journey as a small groundworks and basement
                contractor, we became locally known as the ‘under London
                specialists’ and mainly worked solely across the south-east of
                England.
              </P>
              <P>
                Although lot of our work is still carried out locally to our
                base in the south, we offer our services across the entire
                country. We have worked as far as Glasgow and as wide as the
                peripheries of Cardiff; we are happy to help wherever we can, no
                job is too big or too small.
              </P>
              <P>
                Thanks to the support of our clients, we expanded our offerings
                to become an established multi-disciplined construction company
                in London. We have always wanted to go above and beyond with the
                service we provide, so we expanded our activities to specialise
                in ground works of all kinds. Being repeatedly called upon for
                jobs of all kinds gave us the push we needed to expand the 4Site
                Construction operations, offering turn-key solutions to all of
                our clients.
              </P>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <img
                src={construction20}
                alt="construction18"
                className="img-fluid"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* slider content component  */}
      <SliderContent />
      {/* row section */}
      <Container maxWidth="md" style={{ marginTop: "10rem" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <img
                src="https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg"
                alt="construction-img-1"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <HP> Where it all Began</HP>

              <P>
                After working in construction for over 30 years, it was clear
                that we were ready to take our skills to the next level. In
                2006, 4Site Construction was born and we have not looked back
                since establishing our very own construction company in London.
                Beginning our journey as a small groundworks and basement
                contractor, we became locally known as the ‘under London
                specialists’ and mainly worked solely across the south-east of
                England.
              </P>
              <P>
                Although lot of our work is still carried out locally to our
                base in the south, we offer our services across the entire
                country. We have worked as far as Glasgow and as wide as the
                peripheries of Cardiff; we are happy to help wherever we can, no
                job is too big or too small.
              </P>
            </div>
          </Grid>
        </Grid>
        {/* company logo */}
        <Divider style={{ marginTop: "1rem" }}>
          <img
            src={logo}
            alt="constuction-logo"
            style={{ height: "8rem", width: "8rem" }}
          />
        </Divider>
      </Container>
      {/* another */}
      <Container maxWidth="md" style={{ marginTop: "5rem" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6}>
            <div>
              <HP> The Team Behind 4Site Construction</HP>

              <P>
                After working in construction for over 30 years, it was clear
                that we were ready to take our skills to the next level. In
                2006, 4Site Construction was born and we have not looked back
                since establishing our very own construction company in London.
                Beginning our journey as a small groundworks and basement
                contractor, we became locally known as the ‘under London
                specialists’ and mainly worked solely across the south-east of
                England.
              </P>

              <P>
                Thanks to the support of our clients, we expanded our offerings
                to become an established multi-disciplined construction company
                in London. We have always wanted to go above and beyond with the
                service we provide, so we expanded our activities to specialise
                in ground works of all kinds. Being repeatedly called upon for
                jobs of all kinds gave us the push we needed to expand the 4Site
                Construction operations, offering turn-key solutions to all of
                our clients.
              </P>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className="acordian-embed">
              <Bounce bottom cascade delay={100} duration={4000}>
                <Accordion
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                    boxSizing: "border-box",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdOutlineDownloadForOffline
                        style={{ color: "orange", fontSize: "35px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img
                      src={basement}
                      alt="logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h3 style={{ fontFamily: "sans", paddingLeft: "1rem" }}>
                      Basement
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      A basement is often an overlooked part of the home, with
                      many home owners underestimating the potential of a
                      basement conversion or extension. Get in touch to discuss
                      how you can convert your unused basement into a living
                      space for everyone to enjoy, whether you choose an office
                      space, home gym or children’s play room, the opportunities
                      are limitless.
                    </p>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                    marginTop: "0.5rem",
                    boxSizing: "border-box",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdOutlineDownloadForOffline
                        style={{ color: "orange", fontSize: "35px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img
                      src={structurall}
                      alt="logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h3 style={{ fontFamily: "sans", paddingLeft: "1rem" }}>
                      Structural
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Offering a wide range of structural work to improve the
                      condition of your property, the 4Site Construction team
                      are on hand suggest the best approach to improve the
                      safety and structure of your property. From domestic
                      households to commercial businesses, we regularly
                      undertake projects with requirements of all kinds.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                    marginTop: "0.5rem",
                    boxSizing: "border-box",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdOutlineDownloadForOffline
                        style={{ color: "orange", fontSize: "35px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img
                      src={waterproofing}
                      alt="logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h3 style={{ fontFamily: "sans", paddingLeft: "1rem" }}>
                      WaterProofing
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Transforming your basement is much easier than you may
                      think. Effective waterproofing avoids common water
                      drainage issues often faced in the basement and is even
                      recommended if you are not planning on using the basement.
                      We offer both cementitious tanking and cavity drain
                      membrane systems, contact us to decide on the right
                      approach for your property
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                    marginTop: "0.5rem",
                    boxSizing: "border-box",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdOutlineDownloadForOffline
                        style={{ color: "orange", fontSize: "35px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img
                      src={foundations}
                      alt="logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h3 style={{ fontFamily: "sans", paddingLeft: "1rem" }}>
                      Foundations
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Professionally implemented basement foundations are
                      essential for a long-lasting solution which will remain
                      for many years to come. The type of foundations will
                      depend on numerous factors, such as the soil, moisture
                      levels and your budget so we offer a wide variety of
                      basement foundation solutions to suit jobs of all kinds.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                    marginTop: "0.5rem",
                    boxSizing: "border-box",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdOutlineDownloadForOffline
                        style={{ color: "orange", fontSize: "35px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img
                      src={piling}
                      alt="logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h3 style={{ fontFamily: "sans", paddingLeft: "1rem" }}>
                      Piliing
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      We have access to an extensive range of piling rigs, able
                      to carry out jobs of different kinds in a safe and
                      effective manner. From open bore piling which allows for
                      powerful piling on most ground conditions to mini piling
                      equipment which is used where space is restricted, get in
                      touch to discuss which piling method that would be the
                      most effective for your project.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                    marginTop: "0.5rem",
                    boxSizing: "border-box",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdOutlineDownloadForOffline
                        style={{ color: "orange", fontSize: "35px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img
                      src={underpinning}
                      alt="logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h3 style={{ fontFamily: "sans", paddingLeft: "1rem" }}>
                      UnderPinning
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      Strengthening the foundations of a property is integral
                      when undertaking a basement conversion, skipping the
                      underpinning process will leave your home at risk of
                      damage or even collapse. The 4Site Construction team have
                      years of experience carrying out safe excavations in line
                      with the necessary regulations, providing an effective
                      solution at an affordable price.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                    marginTop: "0.5rem",
                    boxSizing: "border-box",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdOutlineDownloadForOffline
                        style={{ color: "orange", fontSize: "35px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <img
                      src={vaultconversion}
                      alt="logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h3 style={{ fontFamily: "sans", paddingLeft: "1rem" }}>
                      Vaulet Conversion
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      An effective vault conversion will maximise the potential
                      of your home, adding value to your property and giving
                      your family a larger space to enjoy. Spaces of all sizes
                      can be transformed into a luxury habitable area without
                      the need for a costly extension. We provide all necessary
                      equipment and materials to make the process smooth sailing
                      for you.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </Bounce>
            </div>
          </Grid>
        </Grid>
      </Container>
      <MapContent />
    </div>
  );
};
export default About;
