import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LithographyName from '../components/LithographyName';

const HomeContainer = styled.main`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 2rem 0 2rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem 0 1rem;
    min-height: 90vh;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 0.8rem 0 0.8rem;
    min-height: 85vh;
  }
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
  z-index: -1;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    margin: 1rem auto 0 auto;
  }
  
  @media (max-width: 480px) {
    margin: 0.5rem auto 0 auto;
  }
`;



const HeroSubtitle = styled.h2`
  font-family: var(--font-sans);
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 600px;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 4vw, 1.2rem);
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(0.8rem, 4.5vw, 1rem);
    margin-bottom: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 1.5rem;
    flex-direction: column;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1rem;
  }
`;

const PrimaryButton = styled(Link)`
  padding: 0.8rem 2rem;
  background: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
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
    padding: 0.8rem 1.5rem;
    font-size: 0.85rem;
    text-align: center;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const SecondaryButton = styled(Link)`
  padding: 0.8rem 2rem;
  background: transparent;
  border: 1px solid var(--color-accent-red);
  color: var(--color-accent-red);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  
  &:hover {
    color: var(--color-bg);
    background: var(--color-accent-red);
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
    padding: 0.8rem 1.5rem;
    font-size: 0.85rem;
    text-align: center;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const ScrollText = styled.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ScrollArrow = styled.div`
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--color-text);
  border-bottom: 2px solid var(--color-text);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`;

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--color-gray-dark);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 3rem 0.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ProjectCard = styled.div`
  background-color: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent-gold);
    will-change: transform;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 0;
    background: linear-gradient(to bottom, var(--color-accent-red), var(--color-accent-gold));
    transition: height 0.3s ease;
  }
  
  &:hover::before {
    height: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--color-accent-gold);
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const ProjectLink = styled(Link)`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 5px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-accent-gold);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const TerminalSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--color-bg);
  position: relative;
`;

const Terminal = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--color-gray-dark);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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
  height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    height: 250px;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    height: 200px;
    padding: 0.8rem;
  }
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

const QuoteSection = styled.section`
  padding: 6rem 2rem;
  background-color: var(--color-gray-dark);
  text-align: center;
  position: relative;
`;

const Quote = styled.blockquote`
  max-width: 800px;
  margin: 0 auto;
  font-family: var(--font-sans);
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-style: italic;
  line-height: 1.6;
  position: relative;
  padding: 2rem;
  border: 2px solid var(--color-accent-gold);
  border-radius: 10px;
  background-color: rgba(212, 175, 55, 0.05);
  
  &::before {
    content: '"';
    font-family: var(--font-mono);
    font-size: 4rem;
    color: var(--color-accent-gold);
    position: absolute;
    top: -0.5rem;
    left: 1rem;
    background-color: var(--color-gray-dark);
    padding: 0 0.5rem;
    z-index: 1;
  }
  
  &::after {
    content: '"';
    font-family: var(--font-mono);
    font-size: 4rem;
    color: var(--color-accent-gold);
    position: absolute;
    bottom: -0.5rem;
    right: 1rem;
    background-color: var(--color-gray-dark);
    padding: 0 0.5rem;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: clamp(1rem, 4vw, 1.4rem);
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    font-size: clamp(0.9rem, 4.5vw, 1.2rem);
  }
`;

const QuoteAuthor = styled.cite`
  display: block;
  margin-top: 2rem;
  font-family: var(--font-mono);
  font-style: normal;
  font-size: 1rem;
  color: var(--color-accent-red);
`;

const Home = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const terminalRef = useRef(null);
  
  const terminalScript = [
    { prompt: '$', text: 'whoami' },
    { prompt: '>', text: 'Sherman Wong - Physics Researcher & Semiconductor Specialist' },
    { prompt: '$', text: 'ls -la projects/' },
    { prompt: '>', text: 'mosfet-simulator.js  circuit-builder.js  quantum-research.pdf' },
    { prompt: '$', text: 'cat skills.txt' },
    { prompt: '>', text: 'Semiconductor Physics, Quantum Mechanics, Device Modeling, Circuit Design' },
    { prompt: '$', text: 'sudo run explore-website.sh' },
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, charIndex, terminalLines]);
  
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines, currentLine]);
  
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };
  
  const projects = [
    {
      title: 'MOSFET Simulator',
      description: 'Interactive transistor modeling with real-time parameter visualization and I-V characteristics.',
      link: '/mosfet'
    },
    {
      title: 'Circuit Builder',
      description: 'Drag-and-drop circuit design tool with component simulation and analysis.',
      link: '/circuit'
    },
    {
      title: 'Research Portfolio',
      description: 'Explore my work in semiconductor physics, quantum mechanics, and materials science.',
      link: '/research'
    }
  ];
  
  const quotes = [
    {
      text: "ψ(x,t) = Σ cₙ φₙ(x) e^(-iEₙt/ℏ) ... The wavefunction collapses only when observed, yet reality persists in superposition.",
      author: "S.W. - Quantum Codex"
    },
    {
      text: "01001000 01100101 01111000 20 4C 69 66 65 ... In the silicon lattice, electrons dance to frequencies only the initiated can decode.",
      author: "The Semiconductor Cipher"
    },
    {
      text: "E = ℏω, but what frequency does consciousness resonate at? The answer lies in the forbidden energy gap.",
      author: "Quantum Manuscript 2024"
    },
    {
      text: "λ = h/p ... When momentum becomes uncertain, reality itself begins to blur at the edges of measurement.",
      author: "Heisenberg's Shadow"
    }
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <HomeContainer>
      <HeroSection>
        <GridBackground />
        <HeroContent>
          <LithographyName name="SHERMAN WONG" />
          <HeroSubtitle className="glitch" data-text="PUSHING ELECTRONS TO THEIR QUANTUM LIMITS">
            PUSHING ELECTRONS TO THEIR QUANTUM LIMITS
          </HeroSubtitle>
          <ButtonContainer>
            <PrimaryButton to="/about">About Me</PrimaryButton>
            <SecondaryButton to="/mosfet">Explore Projects</SecondaryButton>
          </ButtonContainer>
        </HeroContent>
        
        <ScrollIndicator onClick={scrollToProjects}>
          <ScrollText>Scroll Down</ScrollText>
          <ScrollArrow />
        </ScrollIndicator>
      </HeroSection>
      
      <ProjectsSection id="projects">
        <div className="container">
          <SectionTitle>Featured Projects</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index} className="hover-effect">
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectLink to={project.link}>Explore Project →</ProjectLink>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </div>
      </ProjectsSection>
      
      <TerminalSection>
        <div className="container">
          <SectionTitle>Terminal</SectionTitle>
          <Terminal>
            <TerminalHeader>
              <TerminalTitle>sherman@physics-lab:~</TerminalTitle>
              <TerminalDots>
                <TerminalDot color="var(--color-accent-red)" />
                <TerminalDot color="var(--color-accent-gold)" />
                <TerminalDot color="var(--color-text)" />
              </TerminalDots>
            </TerminalHeader>
            <TerminalContent ref={terminalRef}>
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
        </div>
      </TerminalSection>
      
      <QuoteSection>
        <div className="container">
          <Quote>
            {randomQuote.text}
            <QuoteAuthor>{randomQuote.author}</QuoteAuthor>
          </Quote>
        </div>
      </QuoteSection>
    </HomeContainer>
  );
};

export default Home;