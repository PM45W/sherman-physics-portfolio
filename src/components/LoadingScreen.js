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
  overflow: hidden;
  
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

const Planet = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--color-accent-gold), var(--color-accent-red));
  box-shadow: 
    0 0 20px rgba(212, 175, 55, 0.3),
    inset -5px -5px 15px rgba(0, 0, 0, 0.3);
  animation: planetOrbit 8s linear infinite;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 15px;
    width: 8px;
    height: 8px;
    background-color: var(--color-text);
    border-radius: 50%;
    opacity: 0.6;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 25px;
    right: 20px;
    width: 12px;
    height: 12px;
    background-color: var(--color-accent-red);
    border-radius: 50%;
    opacity: 0.8;
  }
  
  @keyframes planetOrbit {
    0% {
      transform: translate(-100px, -50px) rotate(0deg);
    }
    100% {
      transform: translate(calc(100vw + 100px), -50px) rotate(360deg);
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    &::before {
      width: 6px;
      height: 6px;
      top: 8px;
      left: 12px;
    }
    
    &::after {
      width: 8px;
      height: 8px;
      top: 18px;
      right: 15px;
    }
  }
`;

const Atom = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, var(--color-accent-gold), var(--color-accent-red));
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    border: 2px solid rgba(212, 175, 55, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: atomRotate 4s linear infinite;
  }
  
  @keyframes atomRotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    
    &::before {
      width: 15px;
      height: 15px;
    }
    
    &::after {
      width: 45px;
      height: 45px;
    }
  }
`;

const Electron = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--color-accent-gold);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--color-accent-gold);
  animation: electronOrbit 3s linear infinite;
  animation-delay: ${props => props.delay}s;
  
  @keyframes electronOrbit {
    0% {
      transform: rotate(0deg) translateX(30px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(30px) rotate(-360deg);
    }
  }
  
  @media (max-width: 768px) {
    width: 3px;
    height: 3px;
    
    @keyframes electronOrbit {
      0% {
        transform: rotate(0deg) translateX(22px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(22px) rotate(-360deg);
      }
    }
  }
`;

const StarField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 50%;
  animation: twinkle 2s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  
  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.5);
    }
  }
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
  
  // Generate stars for the star field
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }));
  
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
      <StarField>
        {stars.map(star => (
          <Star
            key={star.id}
            style={{ left: `${star.left}%`, top: `${star.top}%` }}
            delay={star.delay}
          />
        ))}
      </StarField>
      
      <Planet />
      
      <Atom style={{ top: '20%', right: '15%' }}>
        <Electron delay={0} />
        <Electron delay={1} />
        <Electron delay={2} />
      </Atom>
      
      <Atom style={{ bottom: '30%', left: '10%' }}>
        <Electron delay={0.5} />
        <Electron delay={1.5} />
        <Electron delay={2.5} />
      </Atom>
      
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