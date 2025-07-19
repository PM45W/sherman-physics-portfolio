import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ConstructionContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: var(--color-bg);
  position: relative;
  overflow: hidden;
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 0;
`;

const Content = styled.div`
  text-align: center;
  z-index: 1;
  position: relative;
  max-width: 600px;
`;

const Title = styled.h1`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 8vw, 4rem);
  margin-bottom: 2rem;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 10vw, 2.5rem);
  }
`;

const Subtitle = styled.h2`
  font-family: var(--font-sans);
  font-size: clamp(1rem, 4vw, 1.5rem);
  margin-bottom: 2rem;
  color: var(--color-text);
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 5vw, 1.2rem);
  }
`;

const ConstructionIcon = styled.div`
  font-size: clamp(3rem, 15vw, 6rem);
  margin-bottom: 2rem;
  animation: rotate 4s linear infinite;
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 4px;
  background-color: var(--color-gray-light);
  border-radius: 2px;
  margin: 2rem auto;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 75%;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    animation: progress 3s ease-in-out infinite;
  }
  
  @keyframes progress {
    0%, 100% {
      width: 25%;
    }
    50% {
      width: 75%;
    }
  }
  
  @media (max-width: 768px) {
    width: 250px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
  }
`;

const Status = styled.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-accent-gold);
  margin-bottom: 2rem;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--color-text);
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    color: var(--color-bg);
    background: var(--color-accent-gold);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.7s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.8rem;
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: var(--color-accent-gold);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0;
    }
    50% {
      transform: translateY(-100px) translateX(50px);
      opacity: 1;
    }
  }
`;

const UnderConstruction = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 6,
  }));

  return (
    <ConstructionContainer>
      <GridBackground />
      <ParticleContainer>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            style={{ left: `${particle.left}%` }}
            $delay={particle.delay}
          />
        ))}
      </ParticleContainer>
      
      <Content>
        <ConstructionIcon>⚙️</ConstructionIcon>
        <Title className="glitch" data-text="UNDER CONSTRUCTION">
          UNDER CONSTRUCTION
        </Title>
        <Subtitle>Quantum Engineering in Progress</Subtitle>
        <ProgressBar />
        <Status>BUILDING THE FUTURE... 75% COMPLETE</Status>
        <Description>
          This section is currently being developed with cutting-edge quantum algorithms 
          and advanced semiconductor physics. Our team of electron whisperers is working 
          tirelessly to bring you the next generation of interactive physics simulations.
        </Description>
        <BackButton to="/">← Back to Home</BackButton>
      </Content>
    </ConstructionContainer>
  );
};

export default UnderConstruction; 