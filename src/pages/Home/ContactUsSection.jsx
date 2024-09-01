import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ContactUsSectionContainer = styled.section`
  padding: 80px 50px;
  background-color: #f9f9f9;
  text-align: center;
`;

const ContactUsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
`;

const ContactUsText = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const ContactButton = styled(Link)`
  // Use Link for navigation
  background-color: #27ae60;
  color: #fff;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none; // Ensure the link behaves like a button

  &:hover {
    background-color: #219150;
  }
`;

function ContactUsSection() {
  return (
    <ContactUsSectionContainer>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <ContactUsText>
        Got a question you need answered right away? We are here for you and
        your needs!
      </ContactUsText>
      <ContactButton to="/contact-us">Get In Touch</ContactButton>{" "}
      {/* Redirect to /contact-us */}
    </ContactUsSectionContainer>
  );
}

export default ContactUsSection;
