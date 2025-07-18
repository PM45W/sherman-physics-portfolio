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
`;

const LoadingText = styled.div`
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin-bottom: 2rem;
  color: var(--color-text);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 2px;
  background-color: var(--color-gray-light);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    transition: width 0.3s ease;
  }
`;

const LoadingStatus = styled.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  margin-top: 1rem;
  color: var(--color-text);
  opacity: 0.7;
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