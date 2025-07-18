import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const GridBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: -1;
  opacity: 0.2;
`;

const GlitchTitle = styled.h1`
  font-family: var(--font-mono);
  font-size: clamp(5rem, 15vw, 12rem);
  margin-bottom: 1rem;
  position: relative;
  color: var(--color-text);
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    left: 2px;
    text-shadow: -2px 0 var(--color-accent-red);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }
  
  &::after {
    left: -2px;
    text-shadow: -2px 0 var(--color-accent-gold);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
`;

const Subtitle = styled.h2`
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
  color: var(--color-accent-gold);
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const HomeButton = styled(Link)`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
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
`;

const Terminal = styled.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 3rem auto 0;
`;

const TerminalHeader = styled.div`
  background-color: var(--color-gray-light);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TerminalTitle = styled.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-text);
`;

const TerminalDots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TerminalDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const TerminalContent = styled.div`
  padding: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const TerminalLine = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
`;

const TerminalPrompt = styled.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
`;

const TerminalText = styled.span`
  color: var(--color-text);
`;

const TerminalInput = styled.div`
  display: flex;
  align-items: center;
`;

const TerminalCursor = styled.div`
  width: 8px;
  height: 16px;
  background-color: var(--color-accent-gold);
  margin-left: 4px;
  animation: blink 1s step-end infinite;
  
  @keyframes blink {
    from, to {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

function NotFound() {
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const terminalScript = [
    { prompt: '$', text: 'locate page' },
    { prompt: '>', text: 'Error: Page not found (404)' },
    { prompt: '$', text: 'run diagnostics' },
    { prompt: '>', text: 'The requested URL does not exist on this server.' },
    { prompt: '$', text: 'suggest_action' },
    { prompt: '>', text: 'Recommended action: Return to homepage' },
    { prompt: '$', text: 'cd /' },
  ];
  
  useEffect(() => {
    if (lineIndex < terminalScript.length) {
      const currentScriptLine = terminalScript[lineIndex];
      
      if (charIndex < currentScriptLine.text.length) {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + currentScriptLine.text[charIndex]);
          setCharIndex(charIndex + 1);
        }, Math.random() * 50 + 30);
        
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setTerminalLines([...terminalLines, { 
            prompt: currentScriptLine.prompt, 
            text: currentScriptLine.text 
          }]);
          setCurrentLine('');
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }, 500);
        
        return () => clearTimeout(timer);
      }
    }
  }, [lineIndex, charIndex, terminalLines]);

  return (
    <NotFoundContainer>
      <GridBackground />
      <GlitchTitle data-text="404">404</GlitchTitle>
      <Subtitle>PAGE NOT FOUND</Subtitle>
      <Description>
        The page you are looking for might have been removed, had its name changed, 
        or is temporarily unavailable. Please check the URL or return to the homepage.
      </Description>
      <HomeButton to="/">Return to Homepage</HomeButton>
      
      <Terminal>
        <TerminalHeader>
          <TerminalTitle>error-diagnostics:~</TerminalTitle>
          <TerminalDots>
            <TerminalDot color="var(--color-accent-red)" />
            <TerminalDot color="var(--color-accent-gold)" />
            <TerminalDot color="var(--color-text)" />
          </TerminalDots>
        </TerminalHeader>
        <TerminalContent>
          {terminalLines.map((line, index) => (
            <TerminalLine key={index}>
              <TerminalPrompt>{line.prompt}</TerminalPrompt>
              <TerminalText>{line.text}</TerminalText>
            </TerminalLine>
          ))}
          {lineIndex < terminalScript.length && (
            <TerminalInput>
              <TerminalPrompt>{terminalScript[lineIndex].prompt}</TerminalPrompt>
              <TerminalText>{currentLine}</TerminalText>
              <TerminalCursor />
            </TerminalInput>
          )}
        </TerminalContent>
      </Terminal>
    </NotFoundContainer>
  );
}

export default NotFound;