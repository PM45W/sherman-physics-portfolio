import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.main`
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

const CircuitPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(rgba(212, 175, 55, 0.1) 2px, transparent 2px),
    radial-gradient(rgba(255, 0, 0, 0.1) 2px, transparent 2px);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
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

const ContactDescription = styled.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const ContactForm = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h2`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
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

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    background-color: rgba(26, 26, 26, 0.7);
  }
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  margin-right: 1.5rem;
  color: var(--color-accent-gold);
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  color: var(--color-accent-gold);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
`;

const ContactValue = styled.div`
  opacity: 0.8;
  line-height: 1.4;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(26, 26, 26, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  color: var(--color-text);
  text-decoration: none;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
    transform: translateY(-3px);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-accent-gold);
  font-family: var(--font-mono);
`;

const Input = styled.input`
  padding: 1rem;
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: var(--color-text);
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: var(--font-sans);
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-gold);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: var(--color-text);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: var(--font-sans);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-gold);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: var(--color-bg);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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

const SuccessMessage = styled.div`
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 5px;
  padding: 1rem;
  color: #4caf50;
  text-align: center;
  margin-top: 1rem;
  font-family: var(--font-mono);
`;

const ErrorMessage = styled.div`
  background-color: rgba(244, 67, 54, 0.1);
  border: 1px solid rgba(244, 67, 54, 0.3);
  border-radius: 5px;
  padding: 1rem;
  color: #f44336;
  text-align: center;
  margin-top: 1rem;
  font-family: var(--font-mono);
`;

const LocationMap = styled.div`
  margin-top: 2rem;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 200px;
  background-color: rgba(26, 26, 26, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=');
    opacity: 0.5;
  }
`;

const MapPin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color-accent-red);
  font-size: 2rem;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const MapLabel = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(10, 10, 10, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const TerminalSection = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
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

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const terminalScript = [
    { prompt: '$', text: 'ssh sherman@physics-lab.hk' },
    { prompt: '>', text: 'Password: ********' },
    { prompt: '>', text: 'Welcome to Sherman Wong\'s Research Server' },
    { prompt: '$', text: 'cat contact_info.txt' },
    { prompt: '>', text: 'Email: available upon request' },
    { prompt: '>', text: 'Location: Hong Kong Polytechnic University' },
    { prompt: '>', text: 'Department: Applied Physics' },
    { prompt: '$', text: 'echo "Feel free to reach out for research collaborations!"' },
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      setShowError(true);
      
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '🎓',
      label: 'Institution',
      value: 'The Hong Kong Polytechnic University\nDepartment of Applied Physics'
    },
    {
      icon: '🌍',
      label: 'Location',
      value: 'Hong Kong SAR'
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'Available upon request\n(Please use contact form)'
    },
    {
      icon: '🔬',
      label: 'Research Areas',
      value: 'Semiconductor Physics\nQuantum Mechanics\nDevice Modeling'
    }
  ];

  return (
    <ContactContainer>
      <GridBackground />
      <CircuitPattern />
      <div className="container">
        <Title className="glitch" data-text="CONTACT">CONTACT</Title>
        <ContactDescription>
          Interested in my research or potential collaborations? Feel free to reach out using the form below 
          or through any of the provided contact methods.
        </ContactDescription>
        
        <ContactGrid>
          <ContactInfo>
            <SectionTitle>Contact Information</SectionTitle>
            
            {contactInfo.map((item, index) => (
              <ContactItem key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ContactIcon>{item.icon}</ContactIcon>
                <ContactDetails>
                  <ContactLabel>{item.label}</ContactLabel>
                  <ContactValue>
                    {item.value.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </ContactValue>
                </ContactDetails>
              </ContactItem>
            ))}
            
            <LocationMap>
              <MapPin>📍</MapPin>
              <MapLabel>Hong Kong Polytechnic University</MapLabel>
            </LocationMap>
            
            <SocialLinks>
              <SocialLink href="#" title="LinkedIn">
                💼
              </SocialLink>
              <SocialLink href="#" title="ResearchGate">
                🔬
              </SocialLink>
              <SocialLink href="#" title="GitHub">
                💻
              </SocialLink>
              <SocialLink href="#" title="Google Scholar">
                🎓
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm>
            <SectionTitle>Send a Message</SectionTitle>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Research collaboration, questions, etc."
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your inquiry, research interests, or collaboration ideas..."
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>

              {showSuccess && (
                <SuccessMessage>
                  ✅ Thank you for your message! I'll get back to you soon.
                </SuccessMessage>
              )}

              {showError && (
                <ErrorMessage>
                  ❌ There was an error sending your message. Please try again.
                </ErrorMessage>
              )}
            </Form>
          </ContactForm>
        </ContactGrid>
        
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
    </ContactContainer>
  );
}

export default Contact;