import styled from 'styled-components';

const ChatBotContainer = styled.div`
  padding: 80px 50px;
  background-color: #ffffff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #27ae60;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 40px auto;
`;

const InfoText = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

function ChatBot() {
  return (
    <ChatBotContainer>
      <Title>ChatBot</Title>
      <Description>
        Get instant answers to your agricultural queries by chatting with our AI-powered ChatBot. Whether you need help with crop diseases or general farming advice, we are here to assist you.
      </Description>
      <InfoText>Stay tuned for more updates and features.</InfoText>
    </ChatBotContainer>
  );
}

export default ChatBot;
