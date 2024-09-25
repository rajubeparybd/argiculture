// src/pages/Services/MyPosts.jsx
import React from 'react';
import styled from 'styled-components';
import PostCard from '../../pages/Marketplace/PostCard';
import dummyPosts from '../../data/dummyPosts';

const Container = styled.div`
  padding: 100px 20px 40px;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

function MyPosts() {
  const userPosts = dummyPosts.filter((post) => post.isUser);

  return (
    <Container>
      <h2>My Posts</h2>
      <PostsGrid>
        {userPosts.length > 0 ? (
          userPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>You have not created any posts yet.</p>
        )}
      </PostsGrid>
    </Container>
  );
}

export default MyPosts;
