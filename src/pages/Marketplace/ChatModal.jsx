// src/components/Marketplace/ChatModal.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ChatBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
  padding: 10px;
  height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 60px;
  resize: none;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const ModalButton = styled.button`
  background-color: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.darkGray)};
  color: #fff;
  border: none;
  padding: 8px 15px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${({ primary, theme }) => (primary ? theme.colors.primaryDark : theme.colors.secondary)};
  }
`;

function ChatModal({ showChatModal, setShowChatModal, post }) {
  const [messages, setMessages] = useState([
    { sender: 'Farmer', text: 'Hello! How can I help you?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  if (!showChatModal) return null;

  return (
    <ModalBackground>
      <ModalContent>
        <ModalTitle>Chat with Farmer</ModalTitle>
        <ContactInfo>
          <p><strong>Contact Number:</strong> {post.contactNumber}</p>
        </ContactInfo>
        <ChatBox>
          {messages.map((msg, index) => (
            <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
          ))}
        </ChatBox>
        <MessageInput
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <ButtonGroup>
          <ModalButton onClick={() => setShowChatModal(false)}>Close</ModalButton>
          <ModalButton primary onClick={handleSendMessage}>Send</ModalButton>
        </ButtonGroup>
      </ModalContent>
    </ModalBackground>
  );
}

export default ChatModal;
