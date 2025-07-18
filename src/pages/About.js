import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
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

const Title = styled.h1`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileSection = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  height: fit-content;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background: linear-gradient(45deg, var(--color-accent-red), var(--color-accent-gold));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin: 0 auto 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  span {
    position: relative;
    z-index: 2;
  }
`;

const ProfileName = styled.h2`
  font-family: var(--font-mono);
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: var(--color-accent-gold);
`;

const ProfileTitle = styled.h3`
  font-family: var(--font-sans);
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.7;
  font-weight: 400;
`;

const ProfileInfo = styled.div`
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`;

const InfoLabel = styled.span`
  color: var(--color-accent-gold);
  width: 100px;
  flex-shrink: 0;
`;

const InfoValue = styled.span`
  color: var(--color-text);
`;

const ProfileLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ProfileLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutSection = styled.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h2`
  font-family: var(--font-mono);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-accent-gold);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`;

const AboutText = styled.div`
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  .highlight {
    color: var(--color-accent-gold);
    font-weight: 600;
  }
  
  .glitch-text {
    position: relative;
    display: inline-block;
    
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    
    &::before {
      left: 2px;
      text-shadow: -1px 0 var(--color-accent-red);
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim 5s infinite linear alternate-reverse;
    }
    
    &::after {
      left: -2px;
      text-shadow: -1px 0 var(--color-accent-gold);
      clip: rect(44px, 450px, 56px, 0);
      animation: glitch-anim2 5s infinite linear alternate-reverse;
    }
  }
`;

const EducationSection = styled.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const EducationItem = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 5px;
  border-left: 4px solid var(--color-accent-gold);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationTitle = styled.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const EducationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Institution = styled.span`
  font-weight: 600;
`;

const Year = styled.span`
  opacity: 0.7;
  font-family: var(--font-mono);
`;

const EducationDescription = styled.p`
  line-height: 1.6;
  opacity: 0.8;
`;

const SkillsSection = styled.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  padding: 1.5rem;
  border-radius: 5px;
`;

const SkillTitle = styled.h4`
  color: var(--color-accent-gold);
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: var(--font-mono);
`;

const SkillList = styled.ul`
  list-style: none;
  
  li {
    padding: 0.3rem 0;
    opacity: 0.8;
    display: flex;
    align-items: center;
    
    &::before {
      content: '▹';
      color: var(--color-accent-red);
      margin-right: 0.5rem;
    }
  }
`;

const SkillBar = styled.div`
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 0.3rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.level}%;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    border-radius: 2px;
  }
`;

const DownloadButton = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  background-color: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
  }
`;

const TerminalSection = styled.section`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Terminal = styled.div`
  background-color: rgba(26, 26, 26, 0.8);
  border-radius: 5px;
  overflow: hidden;
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

const About = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const terminalScript = [
    { prompt: '$', text: 'cat about_sherman.txt' },
    { prompt: '>', text: 'Sherman Wong is a physics researcher specializing in semiconductor devices and quantum mechanics.' },
    { prompt: '>', text: 'Currently pursuing advanced research in electronic properties of materials and device modeling.' },
    { prompt: '$', text: 'ls -la skills/' },
    { prompt: '>', text: 'semiconductor-physics.md  quantum-mechanics.md  device-modeling.md  programming.md' },
    { prompt: '$', text: 'cd education && ls' },
    { prompt: '>', text: 'MPhil_Applied_Physics.pdf  BSc_Applied_Physics.pdf' },
    { prompt: '$', text: 'echo "PUSHING ELECTRONS TO THEIR QUANTUM LIMITS"' },
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
  
  const education = [
    {
      degree: "Master of Philosophy in Applied Physics",
      institution: "The Hong Kong Polytechnic University",
      year: "2022-2024",
      details: "Specialized in semiconductor device physics and quantum mechanics with focus on MOSFET modeling and electronic properties of novel materials."
    },
    {
      degree: "Bachelor of Science in Applied Physics",
      institution: "The Hong Kong Polytechnic University", 
      year: "2018-2022",
      details: "Focus on materials science and electronic properties. Graduated with First Class Honours. Completed thesis on quantum transport in low-dimensional structures."
    }
  ];

  const skills = {
    "Physics & Research": [
      { name: "Semiconductor Device Physics", level: 95 },
      { name: "Quantum Mechanics", level: 90 },
      { name: "Materials Science", level: 85 },
      { name: "Electronic Properties", level: 90 },
      { name: "Device Modeling", level: 95 }
    ],
    "Technical Skills": [
      { name: "MATLAB/Simulink", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript/React", level: 80 },
      { name: "Data Analysis", level: 85 },
      { name: "Circuit Simulation", level: 90 }
    ],
    "Laboratory": [
      { name: "Device Characterization", level: 95 },
      { name: "I-V Measurements", level: 90 },
      { name: "Material Analysis", level: 85 },
      { name: "Clean Room Techniques", level: 80 },
      { name: "Microscopy", level: 85 }
    ]
  };

  return (
    <AboutContainer>
      <GridBackground />
      <div className="container">
        <Title>About Me</Title>
        
        <AboutGrid>
          <ProfileSection>
            <ProfileImage>
              <span>👨‍🔬</span>
            </ProfileImage>
            <ProfileName>Sherman Wong</ProfileName>
            <ProfileTitle>Physics Researcher & Semiconductor Specialist</ProfileTitle>
            
            <ProfileInfo>
              <InfoItem>
                <InfoLabel>Location:</InfoLabel>
                <InfoValue>Hong Kong</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Field:</InfoLabel>
                <InfoValue>Applied Physics</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Focus:</InfoLabel>
                <InfoValue>Semiconductor Devices</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>Institution:</InfoLabel>
                <InfoValue>HK PolyU</InfoValue>
              </InfoItem>
            </ProfileInfo>
            
            <DownloadButton to="/Sherman_CV_Final_1.pdf" target="_blank">
              Download CV
            </DownloadButton>
            
            <ProfileLinks>
              <ProfileLink href="#" title="LinkedIn">
                💼
              </ProfileLink>
              <ProfileLink href="#" title="ResearchGate">
                🔬
              </ProfileLink>
              <ProfileLink href="#" title="GitHub">
                💻
              </ProfileLink>
              <ProfileLink href="#" title="Email">
                📧
              </ProfileLink>
            </ProfileLinks>
          </ProfileSection>
          
          <ContentSection>
            <AboutSection>
              <SectionTitle>Biography</SectionTitle>
              <AboutText>
                <p>
                  I am a physics researcher with expertise in <span className="highlight">semiconductor device physics</span>, 
                  <span className="highlight"> quantum mechanics</span>, and <span className="highlight">materials science</span>. 
                  Currently pursuing advanced research in electronic properties of materials and device modeling at 
                  The Hong Kong Polytechnic University.
                </p>
                <p>
                  My research focuses on the intersection of theoretical physics and practical applications 
                  in semiconductor technology. I am particularly interested in MOSFET device modeling, quantum 
                  mechanical effects in nanoscale devices, and electronic transport in novel materials.
                </p>
                <p>
                  I combine theoretical knowledge with practical applications, developing 
                  interactive simulations and tools to make complex physics concepts accessible 
                  and engaging. My motto: <span className="glitch-text" data-text="PUSHING ELECTRONS TO THEIR QUANTUM LIMITS">
                    PUSHING ELECTRONS TO THEIR QUANTUM LIMITS
                  </span>
                </p>
              </AboutText>
            </AboutSection>
            
            <EducationSection>
              <SectionTitle>Education</SectionTitle>
              {education.map((edu, index) => (
                <EducationItem key={index}>
                  <EducationTitle>{edu.degree}</EducationTitle>
                  <EducationDetails>
                    <Institution>{edu.institution}</Institution>
                    <Year>{edu.year}</Year>
                  </EducationDetails>
                  <EducationDescription>{edu.details}</EducationDescription>
                </EducationItem>
              ))}
            </EducationSection>
            
            <SkillsSection>
              <SectionTitle>Skills & Expertise</SectionTitle>
              <SkillsGrid>
                {Object.entries(skills).map(([category, skillList]) => (
                  <SkillCategory key={category}>
                    <SkillTitle>{category}</SkillTitle>
                    <SkillList>
                      {skillList.map((skill, index) => (
                        <li key={index}>
                          <div style={{ width: '100%' }}>
                            {skill.name}
                            <SkillBar level={skill.level} />
                          </div>
                        </li>
                      ))}
                    </SkillList>
                  </SkillCategory>
                ))}
              </SkillsGrid>
            </SkillsSection>
          </ContentSection>
        </AboutGrid>
        
        <TerminalSection>
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
        </TerminalSection>
      </div>
    </AboutContainer>
  );
};

export default About;