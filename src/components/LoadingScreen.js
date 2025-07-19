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
  height: 8px;
  background-color: #333333;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  z-index: 1;
  border: 1px solid #555555;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$progress}%;
    background: linear-gradient(90deg, #ff0000, #d4af37);
    transition: width 0.3s ease;
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
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

const ProgressText = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  font-weight: bold;
  color: #d4af37;
  margin-bottom: 0.5rem;
  z-index: 1;
  text-align: center;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
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
  
  console.log('LoadingScreen component rendered - Progress:', progress);
  
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
    console.log('LoadingScreen useEffect triggered - Starting progress');
    
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
        console.log('Progress complete - clearing interval');
        clearInterval(interval);
        return;
      }
      
      const increment = Math.floor(Math.random() * 8) + 2;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);
      
      console.log('Progress updated:', currentProgress);
      
      const statusIndex = Math.floor((currentProgress / 100) * (statuses.length - 1));
      setStatus(statuses[statusIndex]);
    }, 150);
    
    return () => {
      console.log('LoadingScreen useEffect cleanup');
      clearInterval(interval);
    };
  }, []);
  
  return (
    <LoadingContainer>
      <LoadingText className="glitch" data-text="SHERMAN WONG">SHERMAN WONG</LoadingText>
      <ProgressText>{progress}%</ProgressText>
      <LoadingBar $progress={progress} />
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
      
      {/* Simple fallback for testing */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'red',
        color: 'white',
        padding: '20px',
        fontSize: '24px',
        zIndex: 10000
      }}>
        LOADING SCREEN TEST - {progress}%
      </div>
    </LoadingContainer>
  );
};

export default LoadingScreen;