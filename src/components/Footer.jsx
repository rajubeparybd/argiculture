// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png'; // Replace with the actual logo path
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa'; // Importing specific icons

// Styled Components

const FooterContainer = styled.footer`
  background-color: #232323;
  color: white;
  padding: 50px 100px;

  @media (max-width: 768px) {
    padding: 30px 20px; /* Reduced padding for mobile */
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  align-items: flex-start;

  @media (max-width: 768px) {
    justify-content: center; /* Center align items on mobile */
  }
`;

const Section = styled.div`
  flex: 1 1 25%; /* Grow, shrink, basis */
  margin: 10px;

  @media (max-width: 1024px) {
    flex: 1 1 30%; /* Adjust basis for medium screens */
  }

  @media (max-width: 768px) {
    flex: 1 1 45%; /* Adjust basis for small screens */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* Full width on very small screens */
    text-align: center;
  }
`;

const LogoSection = styled(Section)`
  max-width: 250px;

  @media (max-width: 768px) {
    max-width: none;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 120px; /* Smaller logo on mobile */
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    width: 100px; /* Even smaller logo on very small screens */
    margin-bottom: 10px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 13px; /* Slightly smaller font */
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Even smaller font */
    margin-bottom: 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center; /* Center icons on mobile */
  }

  @media (max-width: 480px) {
    gap: 8px; /* Smaller gaps on very small screens */
  }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #27ae60;
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Slightly smaller icons */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Even smaller icons */
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: #27ae60;
    position: absolute;
    bottom: -10px;
    left: 0;
  }

  @media (max-width: 768px) {
    text-align: center; /* Center titles on mobile */

    &::after {
      left: 50%;
      transform: translateX(-50%); /* Center underline */
    }
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Slightly smaller font */
    margin-bottom: 15px;
  }
`;

const LinksSection = styled(Section)`
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: none;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const LinkItem = styled.li`
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    margin-bottom: 6px;
  }
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #27ae60;
  }

  @media (max-width: 768px) {
    color: white;
  }
`;

const ContactSection = styled(Section)`
  max-width: 250px;

  @media (max-width: 768px) {
    max-width: none;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const ContactItem = styled.p`
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const SubmitButton = styled.button`
  background-color: #27ae60;
  border: none;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #219150;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    border-radius: 5px;
    padding: 10px 0;
    font-size: 14px;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid #444;
  padding-top: 20px;
  font-size: 12px;
  color: #888;

  @media (max-width: 768px) {
    margin-top: 30px;
    padding-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const FooterBottomLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 15px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }

  a {
    color: #888;
    text-decoration: none;
    font-size: 12px;
    transition: color 0.3s;

    &:hover {
      color: #27ae60;
    }

    @media (max-width: 768px) {
      font-size: 11px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

// Footer Component

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Logo src={logo} alt="Agro AI Logo" />
          <Description>
            Your Smile, Our Success
          </Description>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Facebook">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Pinterest">
              <FaPinterestP />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
        </LogoSection>

        <LinksSection>
          <SectionTitle>Explore</SectionTitle>
          <LinkList>
            <LinkItem><FooterLink href="#">About</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Services</FooterLink></LinkItem>
            <LinkItem><FooterLink href="#">Contact</FooterLink></LinkItem>
          </LinkList>
        </LinksSection>

        <ContactSection>
          <SectionTitle>Contact</SectionTitle>
          <ContactItem>📞 +880151-8377354</ContactItem>
          <ContactItem>✉️ mahinshikder01@gmail.com</ContactItem>
          <ContactItem>📍 26, Gendaria, Dhaka-1204 </ContactItem>
          <ContactForm>
            <EmailInput type="email" placeholder="Your Email Address" />
            <SubmitButton type="submit">📧</SubmitButton>
          </ContactForm>
        </ContactSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; All Rights Reserved 2024</p>
        <FooterBottomLinks>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
