import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

const LoadingText = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #f5f5f5;
  position: relative;
  z-index: 1;
`;

const LoadingBar = styled.div`
  width: 300px;
  height: 4px;
  background-color: #333333;
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
    background: linear-gradient(90deg, #ff0000, #d4af37);
    transition: width 0.3s ease;
  }
`;

const LoadingStatus = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  margin-top: 1rem;
  color: #f5f5f5;
  opacity: 0.7;
  z-index: 1;
  text-align: center;
`;

const Motto = styled.div`
  position: absolute;
  bottom: 2rem;
  font-family: 'Space Mono', monospace;
  font-style: italic;
  color: #d4af37;
  opacity: 0.7;
  text-align: center;
  max-width: 80%;
  z-index: 1;
`;



const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  
  console.log('LoadingScreen component rendered');
  
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
    console.log('LoadingScreen useEffect triggered');
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
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <LoadingContainer>
      <LoadingText className="glitch" data-text="SHERMAN WONG">SHERMAN WONG</LoadingText>
      <LoadingBar progress={progress} />
      <LoadingStatus>{status}</LoadingStatus>
      <Motto>{motto}</Motto>
      
      {/* Debug info */}
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        left: '10px', 
        color: 'red', 
        fontSize: '12px',
        zIndex: 9999 
      }}>
        LoadingScreen Active - Progress: {progress}%
      </div>
    </LoadingContainer>
  );
};

export default LoadingScreen;