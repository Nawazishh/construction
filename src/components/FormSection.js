import React from "react";
import { Grid, Container, Card } from "@mui/material";
import emailjs from "emailjs-com";
import { Form, Button } from "react-bootstrap";
const FormSection = () => {
  const sentEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rnm4tbh",
        "template_nwvodxd",
        e.target,
        "svO1Lew-Ms0KyQqTu"
      )
      .then((res) => {
        console.log(res.status, res.text);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ marginTop: "3rem" }}>
      <Container maxWidth="md">
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
                From the day you partner with us to carry out building services,
                we are dedicated to delivering cost-effective solutions that are
                designed to last. We will advise on the best approach and the
                different options available to you, helping you achieve the best
                results and keeping you informed throughout the process. Good
                building contractors will always determine the best method to
                meet the goals of the client, using their expertise to make sure
                the build process is carried out safely and effectively. With
                extensive experience working across various construction
                practices including development of foundations, piling with a
                range of our rigs and structural work, our highly skilled
                workmanship allows us to design and undertake a full build. We
                will work with you to gain a thorough understanding of your
                project needs and offer the ideal solution to meet these,
                coordinating the project dealing with any issues head on and
                tightly following set deadlines.
              </p>
              <p style={{ lineHeight: "25px", textAlign: "justify" }}>
                Our building contractors accomplish their duties by planning
                activities, supervising workers and ensuring the project follows
                local building regulations. Safety is paramount to us as a
                building company, we ensure that the correct procedures are in
                place on site and that Health & Safety measures are followed at
                all times. The site manager will oversee the project to ensure
                that not only is everyone safe, but that the project is running
                smoothly at all stages. We do what we can to cause as little
                disruption to any surrounding business and residential
                properties; making considerations to allow them to go about
                their day as normal.
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
            <Card>
              <div
                style={{
                  boxSizing: "border-box",
                  padding: "0px 10px 0px 10px",
                  backgroundImage:
                    "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
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
                    recommendations for your construction project. Get in touch
                    today for a free no obligation quote or give us a call on
                  </p>

                  <Form
                    style={{
                      backgroundColor: "none",
                      paddingTop: "2rem",
                      paddingBottom: "2rem",
                    }}
                    onSubmit={sentEmail}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                          borderRadius: "50px",
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        name="user_email"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                          borderRadius: "50px",
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Phone No</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="Enter Phone No"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #d7d2cc 0%, #304352 100%)",
                          borderRadius: "50px",
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
                        provide you with professional advice and a free quote
                        whenever you need us.
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
                        name="message"
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
                        type="submit"
                        value="send"
                        variant="outline-light"
                        size="lg"
                        style={{
                          color: "black",
                          fontSize: "20px",
                          marginTop: "1rem",
                          textDecoration: "none",
                          borderRadius: "50px",
                        }}
                      >
                        Submit
                      </Button>{" "}
                    </div>
                  </Form>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FormSection;
