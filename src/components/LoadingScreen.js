import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
    background-size: 30px 30px;
    animation: gridMove 20s linear infinite;
  }
  
  @keyframes gridMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(30px, 30px);
    }
  }
`;

const LoadingText = styled.div`
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin-bottom: 2rem;
  color: var(--color-text);
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    animation: shimmer 2s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
  }
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 4px;
  background-color: var(--color-gray-light);
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    transition: width 0.3s ease;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 250px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
  }
`;

const LoadingStatus = styled.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  margin-top: 1rem;
  color: var(--color-text);
  opacity: 0.7;
  z-index: 1;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Motto = styled.div`
  position: absolute;
  bottom: 2rem;
  font-family: var(--font-mono);
  font-style: italic;
  color: var(--color-accent-gold);
  opacity: 0.7;
  text-align: center;
  max-width: 80%;
  z-index: 1;
  animation: pulse 2s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
    bottom: 1rem;
  }
`;

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  
  const mottos = [
    "01010111 01100001 01101011 01101001 01101110 01100111...", // "Waking..." in binary
    "DECRYPTING QUANTUM ENTANGLEMENTS...",
    "INITIALIZING SCHRÖDINGER PROTOCOLS...",
    "LOADING PARALLEL UNIVERSES... 42%",
    "CALIBRATING HEISENBERG COMPENSATORS...",
    "BOOTSTRAPPING REALITY.EXE...",
    "ψ = Σ αₙ|n⟩ ... SUPERPOSITION LOADING..."
  ];
  
  const [motto] = useState(mottos[Math.floor(Math.random() * mottos.length)]);
  
  useEffect(() => {
    const statuses = [
      'Initializing...',
      'Loading quantum states...',
      'Calculating wave functions...',
      'Simulating electron transport...',
      'Optimizing circuit parameters...',
      'Calibrating MOSFET models...',
      'Ready!'
    ];
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress >= 100) {
        clearInterval(interval);
        return;
      }
      
      const increment = Math.floor(Math.random() * 10) + 1;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);
      
      const statusIndex = Math.floor((currentProgress / 100) * (statuses.length - 1));
      setStatus(statuses[statusIndex]);
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <LoadingContainer>
      <LoadingText className="glitch" data-text="SHERMAN WONG">SHERMAN WONG</LoadingText>
      <LoadingBar progress={progress} />
      <LoadingStatus>{status}</LoadingStatus>
      <Motto>{motto}</Motto>
    </LoadingContainer>
  );
};

export default LoadingScreen;