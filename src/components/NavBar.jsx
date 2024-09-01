import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HashLink as RouterLink } from 'react-router-hash-link';

const NavBarContainer = styled.div`
  background-color: ${({ isTransparent }) => (isTransparent ? 'rgba(255, 255, 255, 0)' : '#ffffff')};
  box-shadow: ${({ isTransparent }) => (isTransparent ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.1)')};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`;

const LogoText = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #27ae60;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled.a`
  color: ${({ isTransparent }) => (isTransparent ? '#ffffff' : '#333')};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ isTransparent }) => (isTransparent ? '#27ae60' : '#27ae60')};
  }

  &:hover::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ isTransparent }) => (isTransparent ? '#27ae60' : '#27ae60')};
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;

function NavBar() {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      if (window.scrollY > heroBottom - 100) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    }

    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // User is scrolling down and has scrolled more than 100px
      setIsVisible(false);
    } else {
      // User is scrolling up or is near the top of the page
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
    <NavBarContainer isTransparent={isTransparent} isVisible={isVisible}>
      <TopBar>
        <LogoText>AgriHelper</LogoText>
        <NavLinks>
          <RouterLink to="/#home">
            <NavLink isTransparent={isTransparent}>Home</NavLink>
          </RouterLink>
          <RouterLink to="/#services">
            <NavLink isTransparent={isTransparent}>Services</NavLink>
          </RouterLink>
          <RouterLink to="/#about">
            <NavLink isTransparent={isTransparent}>About</NavLink>
          </RouterLink>
          <RouterLink to="/#contact">
            <NavLink isTransparent={isTransparent}>Contact</NavLink>
          </RouterLink>
        </NavLinks>
      </TopBar>
    </NavBarContainer>
  );
}

export default NavBar;
