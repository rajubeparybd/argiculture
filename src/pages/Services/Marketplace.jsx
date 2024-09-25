// src/pages/Services/Marketplace.jsx
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import CreatePostModal from '../../pages/Marketplace/CreatePostModal';
import PostCard from '../../pages/Marketplace/PostCard';
import { useNavigate } from 'react-router-dom';
import dummyPosts from '../../data/dummyPosts';

const Container = styled.div`
  padding: 100px 20px 40px; /* Added top padding */
`;
const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

function Marketplace() {
  const [posts, setPosts] = useState(dummyPosts);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Container>
      <Header>
        <HeaderButton onClick={() => setShowModal(true)}>Create Post</HeaderButton>
        <HeaderButton onClick={() => navigate('/services/my-posts')}>My Posts</HeaderButton>
      </Header>
      <CreatePostModal showModal={showModal} setShowModal={setShowModal} addPost={addPost} />
      <PostsGrid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsGrid>
    </Container>
  );
}

export default Marketplace;
