import styled from 'styled-components';
import logo from '../assets/images/logo.png'; // Replace with the actual logo path

const FooterContainer = styled.footer`
  background-color: #232323;
  color: white;
  padding: 50px 100px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoSection = styled.div`
  max-width: 250px;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #27ae60;
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
`;

const LinksSection = styled.div`
  max-width: 200px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 14px;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #27ae60;
  }
`;

const ContactSection = styled.div`
  max-width: 250px;
`;

const ContactItem = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const ContactForm = styled.form`
  display: flex;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
`;

const SubmitButton = styled.button`
  background-color: #27ae60;
  border: none;
  padding: 10px;
  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #219150;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid #444;
  padding-top: 20px;
  font-size: 12px;
  color: #888;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

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
            <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-pinterest"></i></SocialIcon>
            <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
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
        <p>&copy; All Copyright 2024</p>
        <FooterBottomLinks>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
