import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
  background-color: ${props => props.$scrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 0.8rem;
  }
`;

const Logo = styled(Link)`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  
  &:hover {
    color: var(--color-accent-gold);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(10px);
    width: 80%;
    max-width: 280px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
    z-index: 1;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    width: 85%;
    max-width: 250px;
    padding: 1.5rem 0.8rem;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  font-family: var(--font-mono);
  color: ${props => props.$active ? 'var(--color-accent-gold)' : 'var(--color-text)'};
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-accent-gold);
    transform: scaleX(${props => props.$active ? '1' : '0'});
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  &:hover {
    color: var(--color-accent-gold);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 0;
    width: 100%;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
  display: ${props => props.$isOpen ? 'block' : 'none'};
`;

const GlitchLogo = styled.span`
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: 'SW';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
  
  &::before {
    left: 2px;
    text-shadow: -1px 0 var(--color-accent-red);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }
  
  &::after {
    left: -2px;
    text-shadow: -1px 0 var(--color-accent-gold);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <NavContainer $scrolled={scrolled}>
      <NavInner>
        <Logo to="/">
          <GlitchLogo>SW</GlitchLogo> / SHERMAN WONG
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isOpen ? '×' : '☰'}
        </MenuButton>
        
        <NavLinks $isOpen={isOpen}>
          <NavLink to="/" $active={location.pathname === '/'}>
            Home
          </NavLink>
          <NavLink to="/about" $active={location.pathname === '/about'}>
            About
          </NavLink>
          <NavLink to="/mosfet" $active={location.pathname === '/mosfet'}>
            MOSFET
          </NavLink>
          <NavLink to="/circuit" $active={location.pathname === '/circuit'}>
            Circuit
          </NavLink>
          <NavLink to="/research" $active={location.pathname === '/research'}>
            Research
          </NavLink>
          <NavLink to="/contact" $active={location.pathname === '/contact'}>
            Contact
          </NavLink>
        </NavLinks>
        
        <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      </NavInner>
    </NavContainer>
  );
};

export default Navbar;