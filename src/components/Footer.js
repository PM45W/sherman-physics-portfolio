import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(10, 10, 10, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  &:first-child {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding-right: 2rem;
    
    @media (max-width: 768px) {
      border-right: none;
      padding-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 2rem;
    }
  }
`;

const FooterLogo = styled(Link)`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  &:hover {
    color: var(--color-accent-gold);
  }
`;

const FooterDescription = styled.p`
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: var(--color-text);
    text-decoration: none;
    transition: all 0.3s ease;
    opacity: 0.7;
    display: flex;
    align-items: center;
    
    &:hover {
      color: var(--color-accent-gold);
      opacity: 1;
      transform: translateX(5px);
    }
    
    span {
      margin-right: 0.5rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(26, 26, 26, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  color: var(--color-text);
  text-decoration: none;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  opacity: 0.7;
  font-size: 0.9rem;
`;

const FooterMotto = styled.p`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 0.9rem;
  letter-spacing: 1px;
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

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const mottos = [
    "φ = (1+√5)/2 ... THE GOLDEN RATIO ENCRYPTS NATURE'S SECRETS",
    "∇²ψ + (2m/ℏ²)(E-V)ψ = 0 ... REALITY SOLVES ITSELF IN COMPLEX SPACE",
    "01010111 01100001 01101011 01101001 01101110 01100111 ... CONSCIOUSNESS.EXE LOADING",
    "kT ≈ 26meV @ 300K ... THERMAL NOISE CARRIES HIDDEN MESSAGES",
    "μ = qτ/m* ... MOBILITY IS THE KEY TO TRANSCENDENCE",
    "Ψ|OBSERVER⟩ ⊗ |OBSERVED⟩ = |ENTANGLED_REALITY⟩"
  ];
  
  const randomMotto = mottos[Math.floor(Math.random() * mottos.length)];
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/">
            <GlitchLogo>SW</GlitchLogo> / SHERMAN WONG
          </FooterLogo>
          <FooterDescription>
            Physics researcher specializing in semiconductor device physics, 
            quantum mechanics, and materials science. Developing interactive 
            tools to make complex physics concepts accessible and engaging.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="#" title="LinkedIn">
              💼
            </SocialLink>
            <SocialLink href="#" title="ResearchGate">
              🔬
            </SocialLink>
            <SocialLink href="#" title="GitHub">
              💻
            </SocialLink>
            <SocialLink href="#" title="Email">
              📧
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/">
                <span>▹</span> Home
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/about">
                <span>▹</span> About
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/mosfet">
                <span>▹</span> MOSFET Simulator
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/circuit">
                <span>▹</span> Circuit Builder
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/research">
                <span>▹</span> Research
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/contact">
                <span>▹</span> Contact
              </Link>
            </FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Research Areas</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/research">
                <span>▹</span> Semiconductor Physics
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/research">
                <span>▹</span> Quantum Mechanics
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/research">
                <span>▹</span> Device Modeling
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/research">
                <span>▹</span> Materials Science
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/research">
                <span>▹</span> Computational Physics
              </Link>
            </FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>© {currentYear} Sherman Wong. All rights reserved.</Copyright>
        <FooterMotto>{randomMotto}</FooterMotto>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;