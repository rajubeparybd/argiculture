import styled from 'styled-components';

const ContactUsContainer = styled.div`
  padding: 50px;
  padding-top: 100px;  // Add top padding to create space between navbar and cards
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const InfoCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 20px;
`;

const InfoCard = styled.div`
  background-color: ${props => props.bgColor || '#fff'};
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  text-align: center;
  min-width: 250px;
`;

const InfoCardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const InfoCardText = styled.p`
  font-size: 16px;
`;

const MapAndFormContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

const MapSection = styled.div`
  flex: 1;
  min-width: 300px;
  iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 10px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 300px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #27ae60;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  min-width: 120px;
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #219150;
  }
`;

function ContactUsPage() {
  return (
    <ContactUsContainer>
      <InfoCardsContainer>
        <InfoCard bgColor="#27ae60">
          <InfoCardTitle>About</InfoCardTitle>
          <InfoCardText>
            Lorem ipsum is simply the text used by typesetting and web design. Neque porro quisquam est.
          </InfoCardText>
        </InfoCard>
        <InfoCard bgColor="#f1c40f">
          <InfoCardTitle>Contact Info</InfoCardTitle>
          <InfoCardText>
            +1 (234) 555-0123 <br />
            email@example.com <br />
            Mon-Fri: 9:00 am - 6:00 pm
          </InfoCardText>
        </InfoCard>
        <InfoCard bgColor="#e67e22">
          <InfoCardTitle>Address</InfoCardTitle>
          <InfoCardText>
            456 Central Road, Golden Street, New York <br />
            United States of America
          </InfoCardText>
        </InfoCard>
      </InfoCardsContainer>
      <MapAndFormContainer>
        <MapSection>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48351.20274640604!2d-0.13556838164659784!3d51.50767871089981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3339e45f3d%3A0xd19d91f58c6c1d45!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1614088778474!5m2!1sen!2suk"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </MapSection>
        <FormSection>
          <Subtitle>Contact Us</Subtitle>
          <Title>Write a Message</Title>
          <Form>
            <InputRow>
              <Input type="text" placeholder="Name" required />
              <Input type="email" placeholder="Email Address" required />
            </InputRow>
            <TextArea placeholder="Write a Message" required />
            <SubmitButton type="submit">Send a Message</SubmitButton>
          </Form>
        </FormSection>
      </MapAndFormContainer>
    </ContactUsContainer>
  );
}

export default ContactUsPage;
