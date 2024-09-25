import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HashLink as RouterLink } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBarContainer = styled.div`
  background-color: ${({ isTransparent }) => (isTransparent ? 'transparent' : '#ffffff')};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const LogoText = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #27ae60;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: ${({ isTransparent }) => (isTransparent ? '#ffffff' : '#333')};
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  transition: left 0.3s ease-in-out;
  z-index: 1001; /* Ensure it appears above other elements */
`;

const MobileNavLink = styled(RouterLink)`
  color: #333;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px 20px;
  width: 100%;
  text-align: left;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
    color: #27ae60;
    transform: translateX(10px);
  }

  &:active {
    background-color: #e0e0e0;
    transform: translateX(0);
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 28px;
  cursor: pointer;
  color: #333;
`;

const NavLink = styled(RouterLink)`
  color: ${({ isTransparent }) => (isTransparent ? '#ffffff' : '#333')};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

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
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Close mobile menu when window is resized to desktop size
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavBarContainer isTransparent={isTransparent && !isMobileMenuOpen}>
      <TopBar>
        <LogoText>Agro AI</LogoText>
        <NavLinks>
          <NavLink to="/#home" isTransparent={isTransparent}>
            Home
          </NavLink>
          <NavLink to="/#services" isTransparent={isTransparent}>
            Services
          </NavLink>
          <NavLink to="/#about" isTransparent={isTransparent}>
            About
          </NavLink>
          <NavLink to="/#contact" isTransparent={isTransparent}>
            Contact
          </NavLink>
        </NavLinks>
        <MobileMenuIcon onClick={toggleMobileMenu} isTransparent={isTransparent}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
      </TopBar>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseIcon onClick={toggleMobileMenu}>
          <FaTimes />
        </CloseIcon>
        <MobileNavLink to="/#home" onClick={toggleMobileMenu}>
          Home
        </MobileNavLink>
        <MobileNavLink to="/#services" onClick={toggleMobileMenu}>
          Services
        </MobileNavLink>
        <MobileNavLink to="/#about" onClick={toggleMobileMenu}>
          About
        </MobileNavLink>
        <MobileNavLink to="/#contact" onClick={toggleMobileMenu}>
          Contact
        </MobileNavLink>
      </MobileMenu>
    </NavBarContainer>
  );
}

export default NavBar;
