import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const laserScan = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const etchReveal = keyframes`
  from {
    opacity: 0;
    text-shadow: none;
  }
  to {
    opacity: 1;
    text-shadow: 
      0 0 5px var(--color-accent-gold),
      0 0 10px var(--color-accent-gold),
      0 0 15px var(--color-accent-gold);
  }
`;

const waferGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(212, 175, 55, 0.3),
      inset 0 0 20px rgba(212, 175, 55, 0.1);
  }
  50% {
    box-shadow: 
      0 0 40px rgba(212, 175, 55, 0.5),
      inset 0 0 30px rgba(212, 175, 55, 0.2);
  }
`;

const redHighlight = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
`;

const WaferContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 1rem auto;
  border-radius: 50%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at center, #1a1a1a 0%, #0d0d0d 100%);
  border: 3px solid var(--color-accent-gold);
  animation: ${waferGlow} 3s ease-in-out infinite;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    border-radius: 50%;
    background: 
      repeating-conic-gradient(
        from 0deg at center,
        transparent 0deg,
        rgba(212, 175, 55, 0.05) 1deg,
        transparent 2deg
      );
    pointer-events: none;
  }
`;

const LaserBeam = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 0, 0, 0.8) 45%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 0, 0, 0.8) 55%,
    transparent 100%
  );
  transform: translateY(-50%);
  animation: ${laserScan} 2s ease-in-out;
  box-shadow: 
    0 0 15px rgba(255, 0, 0, 0.8),
    0 0 30px rgba(255, 0, 0, 0.4);
  z-index: 3;
`;

const NameContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-mono);
  font-size: 3.3rem;
  font-weight: bold;
  color: var(--color-accent-gold);
  text-align: center;
  z-index: 2;
  white-space: nowrap;
  text-shadow: 
    0 0 10px var(--color-accent-gold),
    0 0 20px var(--color-accent-gold),
    0 0 30px var(--color-accent-gold);
`;

const NameLetter = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${etchReveal} 0.5s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  position: relative;
  margin-right: ${props => props.letter === ' ' ? '0.75rem' : '0.3rem'};
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(212, 175, 55, 0.2) 50%,
      transparent 70%
    );
    opacity: 0;
    animation: ${etchReveal} 0.3s ease-out forwards;
    animation-delay: ${props => props.$delay + 0.2}s;
  }
`;

const RedHighlightLayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-mono);
  font-size: 3.3rem;
  font-weight: bold;
  color: rgba(255, 0, 0, 0.8);
  text-align: center;
  z-index: 1;
  white-space: nowrap;
  text-shadow: 
    0 0 5px rgba(255, 0, 0, 0.8),
    0 0 10px rgba(255, 0, 0, 0.6),
    0 0 15px rgba(255, 0, 0, 0.4);
  filter: blur(0.5px);
`;

const RedHighlightLetter = styled.span`
  display: inline-block;
  opacity: 0;
  animation: ${redHighlight} 0.8s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  position: relative;
  margin-right: ${props => props.letter === ' ' ? '0.75rem' : '0.3rem'};
`;

const ProcessingText = styled.div`
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--color-accent-gold);
  opacity: 0.7;
  text-align: center;
`;

const StatusIndicator = styled.div`
  position: absolute;
  top: -40px;
  right: -40px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${props => props.active ? 'var(--color-accent-red)' : 'var(--color-accent-gold)'};
  box-shadow: 0 0 15px ${props => props.active ? 'var(--color-accent-red)' : 'var(--color-accent-gold)'};
  animation: ${props => props.active ? 'pulse 1s ease-in-out infinite' : 'none'};
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

function LithographyName({ name = "SHERMAN WONG" }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showLaser, setShowLaser] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      try {
        // Start processing
        setIsProcessing(true);
        
        // Wait a moment, then show laser
        await new Promise(resolve => setTimeout(resolve, 500));
        setShowLaser(true);
        
        // Laser scanning duration
        await new Promise(resolve => setTimeout(resolve, 2000));
        setShowLaser(false);
        
        // Processing complete
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsProcessing(false);
        setIsComplete(true);
      } catch (error) {
        console.error('LithographyName animation error:', error);
        setIsProcessing(false);
        setIsComplete(true);
      }
    };

    sequence();
  }, []);

  if (!name) {
    return <div>Loading...</div>;
  }

  // Process the name to add proper spacing
  const processName = (name) => {
    // Split by space to separate first and last name
    const nameParts = name.split(' ');
    // Join with extra spaces for better separation
    return nameParts.join('   ');
  };

  const processedName = processName(name);
  const letters = processedName.split('');
  const baseDelay = 2.5;

  return (
    <WaferContainer>
      <StatusIndicator active={isProcessing} />
      
      {showLaser && <LaserBeam />}
      
      <RedHighlightLayer>
        {letters.map((letter, index) => (
          <RedHighlightLetter 
            key={`red-${index}`} 
            $delay={baseDelay + (index * 0.1) + 0.3}
            letter={letter}
          >
            {letter}
          </RedHighlightLetter>
        ))}
      </RedHighlightLayer>
      
      <NameContainer>
        {letters.map((letter, index) => (
          <NameLetter 
            key={index} 
            $delay={baseDelay + (index * 0.1)}
            letter={letter}
          >
            {letter}
          </NameLetter>
        ))}
      </NameContainer>
      
      <ProcessingText>
        {isProcessing && "LITHOGRAPHY IN PROGRESS..."}
        {isComplete && "ETCHING COMPLETE"}
        {!isProcessing && !isComplete && "INITIALIZING..."}
      </ProcessingText>
    </WaferContainer>
  );
}

export default LithographyName;