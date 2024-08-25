import styled from 'styled-components';

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

const ContactButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #219150;
  }
`;

function ContactUsSection() {
  return (
    <ContactUsSectionContainer>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <ContactUsText>
        Got questions? Reach out to us! We are here to help with all your agricultural needs.
      </ContactUsText>
      <ContactButton>Get In Touch</ContactButton>
    </ContactUsSectionContainer>
  );
}

export default ContactUsSection;
