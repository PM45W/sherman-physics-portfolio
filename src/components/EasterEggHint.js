import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

const cursorPulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const CursorAnimationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  
  &::after {
    content: '🏎️';
    position: fixed;
    font-size: 2rem;
    animation: ${cursorPulse} 1s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: 1000;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
  }
`;

const HintContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgba(10, 10, 10, 0.9);
  border: 1px solid ${props => props.type === 'ferrari' ? 'var(--color-accent-red)' : 'var(--color-accent-gold)'};
  border-radius: 5px;
  padding: 1rem;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  max-width: 300px;
  z-index: 1000;
  animation: ${props => props.show ? fadeIn : fadeOut} 0.5s forwards;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

const HintTitle = styled.h4`
  color: ${props => props.type === 'ferrari' ? 'var(--color-accent-red)' : 'var(--color-accent-gold)'};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HintIcon = styled.span`
  font-size: 1.2rem;
`;

const HintText = styled.p`
  opacity: 0.8;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const FerrariStatusIndicator = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 0, 0, 0.9);
  border: 1px solid var(--color-accent-red);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: white;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 1001;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${fadeIn} 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(255, 0, 0, 0.3);
  
  &::before {
    content: '🏎️';
    font-size: 1rem;
  }
`;

function EasterEggHint() {
  const [currentHint, setCurrentHint] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hintDismissed, setHintDismissed] = useState({
    ferrari: false,
    konami: false
  });
  const [isFerrariActive, setIsFerrariActive] = useState(false);
  const [showCursorAnimation, setShowCursorAnimation] = useState(false);
  
  const hints = [
    {
      id: 'ferrari',
      title: 'Σ∇∇∇ ∇∇∇∇∇',
      icon: '⚡',
      text: 'Φ → ∇∇∇∇∇∇ ∇∇∇∇∇∇∇∇∇'
    },
    {
      id: 'konami',
      title: '∇∇∇∇∇∇ ∇∇∇∇',
      icon: '⚛️',
      text: '↑↑↓↓←→←→ΒΑ → ∇∇∇∇∇∇∇'
    },
    {
      id: 'ferrari-active',
      title: 'Quantum State: |1⟩',
      icon: '⚡',
      text: 'Velocity vector engaged. Φ to decouple.'
    },
    {
      id: 'ferrari-deactivated',
      title: 'Quantum State: |0⟩',
      icon: '⚡',
      text: 'System returned to ground state.'
    }
  ];
  
  // Listen for Ferrari cursor toggle and sync with body class
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'f' || e.key === 'F') {
        // Check the actual body class state for synchronization
        const hasFerrariClass = document.body.classList.contains('ferrari-cursor');
        const newState = !hasFerrariClass;
        setIsFerrariActive(newState);
        
        // Show cursor animation
        setShowCursorAnimation(true);
        setTimeout(() => setShowCursorAnimation(false), 1000);
        
        // Show appropriate hint
        const hintId = newState ? 'ferrari-active' : 'ferrari-deactivated';
        const hint = hints.find(h => h.id === hintId);
        
        setCurrentHint(hint);
        setShowHint(true);
        
        // Hide hint after 3 seconds
        setTimeout(() => {
          setShowHint(false);
        }, 3000);
      }
    };
    
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [hints]);
  
  useEffect(() => {
    // Show hints extremely rarely - only once per month and much later
    const showHints = async () => {
      // Wait 30 minutes for page to load
      await new Promise(resolve => setTimeout(resolve, 1800000));
      
      // Show Ferrari hint only once per month
      const lastShown = localStorage.getItem('ferrari-hint-last-shown');
      const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      
      if (!hintDismissed.ferrari && (!lastShown || new Date(lastShown) < monthAgo)) {
        setCurrentHint(hints[0]);
        setShowHint(true);
        localStorage.setItem('ferrari-hint-last-shown', new Date().toISOString());
        
        // Very short duration: 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        setShowHint(false);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Show Konami hint only after 60 minutes and once per 3 months
      await new Promise(resolve => setTimeout(resolve, 3600000));
      
      const lastKonamiShown = localStorage.getItem('konami-hint-last-shown');
      const threeMonthsAgo = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
      
      if (!hintDismissed.konami && (!lastKonamiShown || new Date(lastKonamiShown) < threeMonthsAgo)) {
        setCurrentHint(hints[1]);
        setShowHint(true);
        localStorage.setItem('konami-hint-last-shown', new Date().toISOString());
        
        // Very short duration: 2 seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
        setShowHint(false);
      }
    };
    
    showHints();
  }, [hintDismissed, hints]);
  
  const handleDismiss = () => {
    setShowHint(false);
    if (currentHint) {
      setHintDismissed(prev => ({
        ...prev,
        [currentHint.id]: true
      }));
    }
  };
  
  if (!currentHint) return null;
  
  return (
    <HintContainer show={showHint} type={currentHint.id}>
      <CloseButton onClick={handleDismiss}>×</CloseButton>
      <HintTitle type={currentHint.id}>
        <HintIcon>{currentHint.icon}</HintIcon>
        {currentHint.title}
      </HintTitle>
      <HintText>{currentHint.text}</HintText>
    </HintContainer>
  );
}

export default EasterEggHint;