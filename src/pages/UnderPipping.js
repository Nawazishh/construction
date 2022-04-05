import React from "react";
import { Grid, Container, Divider } from "@mui/material";
import { Button } from "react-bootstrap";
import SliderContent from "../components/SliderContent";
import FormSection from "../components/FormSection";
import MapContent from "../components/MapContent";
import underpipping from "../images/underpipping.jpg";
import underpipping1 from "../images/underpipping1.jpg";
import underpipping2 from "../images/underpipping2.jpg";
import logo from "../images/logoo.png";

const UnderPipping = () => {
  return (
    <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
      {/* ------------------ist content items ----------------- */}
      <Container maxWidth="md">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Being an integral part of the basement construction process,
                underpinning in London is required to strengthen the building
                foundations, generally by extending the footings downwards.
              </p>
              <p
                style={{
                  lineHeight: "25px",
                  textAlign: "justify",
                  paddingTop: "1rem",
                }}
              >
                As a highly skilled team of construction specialists with vast
                experience as an underpinning company in London, you can be safe
                in the knowledge that your 4Site excavation will be completed to
                the highest standards. We work in line with all necessary and
                appropriate regulations to not only ensure that your basement
                conversion is safe, but our underpinning contractors in London
                create solutions that can withstand the test of time.
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
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={underpipping}
                alt="underpipping"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* --------------------------2nd content items -------------------- */}

      {/* slider content component */}
      <SliderContent />
      {/* third section */}
      <Container maxWidth="md" style={{ marginTop: "5rem" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div>
              <img
                src={underpipping1}
                alt="underpipping"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <div style={{ boxSizing: "border-box" }}>
              <h3>
                When does my property need underpinning contractors in London?
              </h3>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                If the appropriate measures are not executed properly, this
                could lead to a serious threat to your home and result in
                further damage or even collapse, which would put you at high
                risk. Keep an eye out for signs that you will need to have your
                property inspected by a structural engineer or a chartered
                surveyor, which can be done by our team of underpinning
                contractors in London at 4Site Construction.
              </p>
              <p>
                The key warning signs of subsidence to look out for include
                cracks in floors, ceilings, joints, floors and walls, stuck
                doors and windows and sloping ceilings, floors and walls. If you
                notice any of these signs, then it is a strong indicator that
                your property needs underpinning in London.
              </p>
              <p
                style={{
                  lineHeight: "25px",
                  textAlign: "justify",
                }}
              >
                We can conduct a survey to determine whether your property does
                need underpinning in London, which will then be carried out by
                our specialist team. Although finding a reputable underpinning
                company in London can be expensive, our underpinning contractors
                in London keep prices as affordable as possible so you don’t
                have to break the bank.
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
                Get in Touch for Expert Advice
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
              <div style={{ boxSizing: "border-box" }}>
                <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                  By securing your property early, you can avoid compromising
                  the structural integrity of the entire property and the safety
                  of you and the people you live with. The longer you leave the
                  foundations unattended, the more they will worsen, leading to
                  further damages and costs of an underpinning company in London
                  will rise.
                </p>
                <p style={{ textAlign: "justify" }}>
                  To establish whether your property has been underpinned
                  previously, you can speak to your Chartered Surveyor. The
                  report will have all structural issues highlighted and it will
                  determine if your property has been underpinned or if you need
                  to contact underpinning contractors in London.
                </p>
                <p style={{ textAlign: "justify" }}>
                  It is vital that underpinning in London is carried out
                  correctly by experienced contractors to avoid putting you and
                  the property in danger. As a specialist underpinning company
                  in London, we can answer any questions you may have
                  surrounding this service, so you can be sure that we are the
                  right team for the job.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sm={12}>
              <div>
                <img
                  src={underpipping2}
                  alt="underpipping"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
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
      </div>
      <MapContent />
    </div>
  );
};

export default UnderPipping;
