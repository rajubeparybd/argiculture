import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaRobot } from 'react-icons/fa';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 160px); /* Adjust height to accommodate navbar and footer */
  background-color: #f0f0f0;
  padding: 60px 20px 60px 20px; /* Increased padding at the top */
`;

const ChatTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const ChatWindow = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Message = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  align-items: center;
`;

const MessageBubble = styled.div`
  max-width: 60%;
  padding: 15px;
  background-color: ${({ isUser }) => (isUser ? '#27ae60' : '#f5f5f5')};
  color: ${({ isUser }) => (isUser ? '#ffffff' : '#333333')};
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-left: ${({ isUser }) => (isUser ? '0' : '10px')};
`;

const AIIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: #f1c40f; /* Background color for the AI icon */
  border-radius: 50%;
  margin-right: 10px;
`;

const ColorfulAIIcon = styled(FaRobot)`
  font-size: 20px;
  color: #ffffff; /* White icon on a colorful background */
`;

const InputArea = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
`;

const SendButton = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #27ae60;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #1e8449;
  }
`;

function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatWindowRef = useRef(null);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = { text: inputValue, isUser: true };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue('');
      simulateBotResponse(newMessage.text);
    }
  };

  const simulateBotResponse = (userMessage) => {
    setTimeout(() => {
      const botResponse = { text: `You said: ${userMessage}`, isUser: false };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  return (
    <ChatContainer>
      <ChatTitle>Chat with Our AI Assistant</ChatTitle>
      <ChatWindow ref={chatWindowRef}>
        {messages.map((message, index) => (
          <Message key={index} isUser={message.isUser}>
            {!message.isUser && (
              <AIIconWrapper>
                <ColorfulAIIcon />
              </AIIconWrapper>
            )}
            <MessageBubble isUser={message.isUser}>{message.text}</MessageBubble>
          </Message>
        ))}
      </ChatWindow>
      <InputArea>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </InputArea>
    </ChatContainer>
  );
}

export default ChatBotPage;
