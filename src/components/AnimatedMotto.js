import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: inline-block;
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: ${props => props.fontSize || '0.9rem'};
  letter-spacing: 1px;
`;

const glitchAnimation = keyframes`
  0% {
    transform: translateY(0);
    color: var(--color-accent-gold);
  }
  25% {
    transform: translateY(-4px);
    color: var(--color-accent-red);
  }
  50% {
    transform: translateY(0);
    color: var(--color-accent-gold);
  }
  75% {
    transform: translateY(2px);
    color: white;
  }
  100% {
    transform: translateY(0);
    color: var(--color-accent-gold);
  }
`;

const Word = styled.span`
  display: inline-block;
  animation: ${glitchAnimation} ${props => props.duration || 3}s infinite;
  animation-delay: ${props => props.index * 0.15}s;
  position: relative;
  
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    color: var(--color-accent-red);
    opacity: 0.7;
    transform: translateX(1px);
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    animation: glitch-slice 3s infinite alternate;
  }
  
  @keyframes glitch-slice {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translateX(1px);
    }
    50% {
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
      transform: translateX(-1px);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translateX(1px);
    }
  }
`;

const StaticText = styled.span`
  color: var(--color-accent-gold);
`;

const AnimatedMotto = ({ text, fontSize }) => {
  // Split the text into words
  const words = text.split(' ');
  
  return (
    <Container fontSize={fontSize}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <Word 
            index={index} 
            duration={(index % 3) + 3}
            data-text={word}
          >
            {word}
          </Word>
          {index < words.length - 1 && <StaticText> </StaticText>}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default AnimatedMotto;