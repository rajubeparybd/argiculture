// src/components/Marketplace/PostCard.jsx
import React from 'react';
import styled from 'styled-components';
import { FaCommentDots, FaCartPlus, FaShoppingCart } from 'react-icons/fa';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  /* Optional: Add a subtle shadow for better aesthetics */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  /* Transition for smooth scaling on hover (optional) */
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  padding: 15px;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;

const Description = styled.p`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 0.95rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 8px;
  }
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
    padding: 10px 15px;
  }
`;

const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryDarker};
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 10px 0;
    font-size: 0.85rem;
  }
`;

function PostCard({ post }) {
  return (
    <Card>
      <ImageWrapper>
        <Image src={post.image} alt={post.name} />
      </ImageWrapper>
      <Content>
        <Title>{post.name}</Title>
        <Description>
          {post.description.length > 60
            ? post.description.substring(0, 60) + '...'
            : post.description}
        </Description>
        <Price>
          Price: {post.price} per {post.unit}
        </Price>
      </Content>
      <ButtonGroup>
        <ActionButton onClick={() => alert('Message functionality coming soon!')}>
          <FaCommentDots /> Message
        </ActionButton>
        <ActionButton onClick={() => alert('Added to cart!')}>
          <FaCartPlus /> Add to Cart
        </ActionButton>
        <ActionButton onClick={() => alert('Proceeding to buy!')}>
          <FaShoppingCart /> Buy Now
        </ActionButton>
      </ButtonGroup>
    </Card>
  );
}

export default PostCard;
