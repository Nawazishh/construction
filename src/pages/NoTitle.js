import React from "react";
import { Container } from "@mui/material";
import MapContent from "../components/MapContent";

const NoTitle = () => {
  return (
    <div style={{ marginTop: "5rem", boxSizing: "border-box" }}>
      <Container maxWidth="md">
        <h3>Why Choose 4Site Construction?</h3>
        <p style={{ paddingTop: "0.3rem", textAlign: "justify" }}>
          Since we began, our top priority has been to nurture our client
          relationships. Working with clients across the United Kingdom, we have
          fostered quality customer service with our proactive approach.
        </p>
        <p style={{ paddingTop: "0.1rem", textAlign: "justify" }}>
          We have worked with a range of clients, from private clients to
          developers and public sector clients. Our experience provides us with
          the appreciation and adaptability for different goals and deliverable
          you may be looking for. We work alongside you to achieve your
          requirements for construction in the most efficient way.
        </p>
        <p style={{ paddingTop: "0.1rem", textAlign: "justify" }}>
          4Site Construction is one of the leading construction companies in
          Croydon. When you choose us, see us as a branch of your team. Indeed,
          our ethos is to closely align ourselves with our clients’ culture and
          consultant teams as an in-house building contractor. We keep our
          client relationships are the centre of operations, priding ourselves
          on our ability to nurture client relationships; and we continue to do
          so as we expand. For every one of our customers, we offer a time and
          cost-efficient solution. The reassures you of the clear communication
          and transparency that will come from this way of working.
        </p>
        <h3>Construction Companies in Croydon: Available Services</h3>
        <p style={{ textAlign: "justify" }}>
          Have a comprehensive team with a wide variety of specialisms means we
          can offer our clients a full service, including quantity surveyors,
          architects, structural contractors, basement construction specialists,
          piling contractors and more. We are one of the leading construction
          companies in Croydon, and our team consists of over 40 employees as
          well as a further team of specialist professionals. Having a wide
          range of expertise provides you with the trust and reassurance that
          you will receive high quality and professional work when you choose
          us. Each project under our books is centrally managed in house by us
          to ensure it runs smoothly and efficiently. Our services also include:
        </p>
        <div>
          <li style={{ lineHeight: "30px" }}>
            Waterproofing – effective waterproofing avoids common water drainage
            issues often faced in the basement and is even recommended if you
            are not planning on using the basement.
          </li>
          <li style={{ lineHeight: "30px" }}>
            Foundations – Professionally implemented basement foundations are
            essential for a long-lasting solution which will remain for many
            years to come.
          </li>
          <li style={{ lineHeight: "30px" }}>
            Underpinning – It is crucial to strengthen the foundations of a
            property when undertaking a basement conversion, skipping the
            underpinning process will leave your home at risk of damage or even
            collapse.
          </li>
          <li style={{ lineHeight: "30px" }}>
            Vault conversions – refurbing your home? An effective vault
            conversion will maximise the potential of your home, adding value to
            your property and giving your family a larger and more trendy space
            to enjoy.
          </li>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h3>Accredited & Approved Construction Companies in Croydon</h3>
          <p>
            Training and skill development is an integral part of any business,
            but especially in the construction industry. All our staff members
            are qualified in their areas of expertise where required, ensuring
            they meet the highest industry standards when carrying out their
            work.
          </p>
          <p>
            As experts in the field of construction, we remain up to date with
            industry-standard qualifications and continually stay on top of the
            latest equipment and processes. We are fully health and safety
            accredited and are part of the Considerate Contractors scheme.
          </p>
          <h3>4Site Construction: Contact Construction Companies in Croydon</h3>
          <p>
            Our clear client focused approach to work makes us one of the
            leading construction companies in Croydon that can’t be beaten on
            quality or professionalism. To speak to one of our team today, get
            in touch for recommendations for your unique needs or a
            no-obligation quote.
          </p>
        </div>
      </Container>
      <MapContent />
    </div>
  );
};

export default NoTitle;
