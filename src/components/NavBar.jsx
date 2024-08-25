import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`;

const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #27ae60;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: #333;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  position: relative;

  &:hover {
    color: #27ae60;
  }

  &:hover::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #27ae60;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // User is scrolling down
      setIsVisible(false);
    } else {
      // User is scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <NavBarContainer isVisible={isVisible}>
      <TopBar>
        <LogoText>AgriHelper</LogoText>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Contact</NavLink>
        </NavLinks>
      </TopBar>
    </NavBarContainer>
  );
}

export default NavBar;
