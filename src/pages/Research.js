import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MolecularAnimation from '../components/MolecularAnimation';

const ResearchContainer = styled.main`
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

const ResearchDescription = styled.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`;

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
`;

const ResearchCard = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent-gold);
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
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
`;

const CardTitleGroup = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const CardSubtitle = styled.p`
  opacity: 0.7;
  font-size: 0.9rem;
  font-family: var(--font-sans);
`;

const CardContent = styled.div`
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 1.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: rgba(26, 26, 26, 0.5);
  color: var(--color-accent-gold);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  font-family: var(--font-mono);
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const ModalContent = styled.div`
  background-color: var(--color-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 3rem;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0.9)'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: all 0.3s ease;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--color-gray-dark);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--color-accent-gold);
    border-radius: 3px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--color-accent-red);
  }
`;

const ModalTitle = styled.h2`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--color-accent-gold);
  }
`;

const ModalSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const PublicationsList = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const PublicationItem = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const PublicationTitle = styled.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const PublicationDetails = styled.p`
  opacity: 0.7;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
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

function Research() {
  const [selectedResearch, setSelectedResearch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedItems, setAnimatedItems] = useState([]);

  const researchProjects = [
    {
      id: 1,
      icon: '🔬',
      title: 'MOSFET Device Modeling',
      subtitle: 'Semiconductor Physics Research',
      description: 'Advanced modeling of MOSFET devices including quantum mechanical effects and nanoscale phenomena.',
      tags: ['MOSFET', 'Device Physics', 'Quantum Mechanics', 'Simulation'],
      details: {
        objective: 'Develop comprehensive models for MOSFET devices that account for quantum mechanical effects at nanoscale dimensions.',
        methodology: 'Utilized quantum mechanical calculations combined with classical device physics to create hybrid models. Implemented numerical simulations using MATLAB and Python.',
        results: 'Successfully developed models that show improved accuracy for sub-10nm devices. Achieved 15% better prediction accuracy compared to classical models.',
        applications: 'These models can be used for next-generation semiconductor device design and optimization.',
        publications: [
          {
            title: 'Quantum Effects in Nanoscale MOSFET Devices',
            journal: 'Journal of Applied Physics (In Preparation)',
            year: '2024',
            authors: 'S. Wong, et al.'
          }
        ]
      }
    },
    {
      id: 2,
      icon: '⚛️',
      title: 'Quantum Transport Studies',
      subtitle: 'Theoretical Physics',
      description: 'Investigation of quantum transport phenomena in low-dimensional semiconductor structures.',
      tags: ['Quantum Transport', 'Semiconductors', 'Theoretical Physics', 'Nanostructures'],
      details: {
        objective: 'Study quantum transport mechanisms in low-dimensional semiconductor structures and their applications.',
        methodology: 'Theoretical analysis using quantum mechanical formalism, numerical calculations, and comparison with experimental data.',
        results: 'Identified key quantum transport mechanisms affecting device performance. Developed theoretical framework for predicting transport properties.',
        applications: 'Results applicable to quantum devices, sensors, and next-generation electronics.',
        publications: [
          {
            title: 'Quantum Transport in Low-Dimensional Structures',
            journal: 'Physical Review B (Under Review)',
            year: '2024',
            authors: 'S. Wong, et al.'
          }
        ]
      }
    },
    {
      id: 3,
      icon: '🧪',
      title: 'Materials Characterization',
      subtitle: 'Experimental Physics',
      description: 'Comprehensive characterization of novel semiconductor materials for electronic applications.',
      tags: ['Materials Science', 'Characterization', 'Semiconductors', 'Electronic Properties'],
      details: {
        objective: 'Characterize electronic and optical properties of novel semiconductor materials.',
        methodology: 'Used various characterization techniques including I-V measurements, spectroscopy, and microscopy.',
        results: 'Identified promising materials with enhanced electronic properties. Established structure-property relationships.',
        applications: 'Materials suitable for high-performance electronic devices and optoelectronic applications.',
        publications: [
          {
            title: 'Electronic Properties of Novel Semiconductor Materials',
            journal: 'Applied Physics Letters (In Preparation)',
            year: '2024',
            authors: 'S. Wong, et al.'
          }
        ]
      }
    },
    {
      id: 4,
      icon: '💻',
      title: 'Computational Physics Tools',
      subtitle: 'Software Development',
      description: 'Development of computational tools for physics simulations and educational purposes.',
      tags: ['Computational Physics', 'Simulation', 'Software Development', 'Education'],
      details: {
        objective: 'Create user-friendly computational tools for physics education and research.',
        methodology: 'Developed interactive simulations using modern web technologies and scientific computing libraries.',
        results: 'Created several interactive tools including MOSFET simulator and circuit builder. Tools used by students and researchers.',
        applications: 'Educational tools for physics courses and research applications.',
        publications: [
          {
            title: 'Interactive Physics Simulations for Education',
            journal: 'Computer Physics Communications (Planned)',
            year: '2024',
            authors: 'S. Wong'
          }
        ]
      }
    },
    {
      id: 5,
      icon: '📊',
      title: 'Data Analysis & Visualization',
      subtitle: 'Research Methodology',
      description: 'Advanced data analysis techniques for experimental physics research.',
      tags: ['Data Analysis', 'Visualization', 'Statistics', 'Research Methods'],
      details: {
        objective: 'Develop advanced data analysis methods for complex physics datasets.',
        methodology: 'Applied statistical analysis, machine learning techniques, and advanced visualization methods.',
        results: 'Improved data analysis efficiency by 40%. Developed new visualization techniques for complex datasets.',
        applications: 'Methods applicable to various physics research areas and experimental data analysis.',
        publications: [
          {
            title: 'Advanced Data Analysis in Physics Research',
            journal: 'Review of Scientific Instruments (Planned)',
            year: '2024',
            authors: 'S. Wong, et al.'
          }
        ]
      }
    },
    {
      id: 6,
      icon: '🌟',
      title: 'Future Research Directions',
      subtitle: 'Ongoing Projects',
      description: 'Exploring emerging areas in quantum computing and advanced materials.',
      tags: ['Quantum Computing', 'Future Technology', 'Innovation', 'Research Planning'],
      details: {
        objective: 'Explore applications of quantum mechanics in next-generation computing and materials.',
        methodology: 'Literature review, theoretical analysis, and preliminary experimental work.',
        results: 'Identified promising research directions. Established collaborations with leading research groups.',
        applications: 'Potential applications in quantum computing, advanced sensors, and novel electronic devices.',
        publications: [
          {
            title: 'Quantum Technologies: Future Perspectives',
            journal: 'Nature Reviews Physics (Planned)',
            year: '2025',
            authors: 'S. Wong, et al.'
          }
        ]
      }
    }
  ];

  useEffect(() => {
    // Animate cards on load
    const timer = setTimeout(() => {
      setAnimatedItems(researchProjects.map(project => project.id));
    }, 100);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openModal = (research) => {
    setSelectedResearch(research);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <ResearchContainer>
      <GridBackground />
      <CircuitPattern />
      <div className="container">
        <Title className="glitch" data-text="RESEARCH">RESEARCH</Title>
        <ResearchDescription>
          Explore my research portfolio in semiconductor physics, quantum mechanics, and materials science.
          Each project represents a step towards understanding the fundamental principles that govern
          electronic devices and quantum phenomena.
        </ResearchDescription>
        
        <MolecularAnimation />

        <ResearchGrid>
          {researchProjects.map((project, index) => (
            <ResearchCard
              key={project.id}
              onClick={() => openModal(project)}
              className={animatedItems.includes(project.id) ? 'fade-in' : ''}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: animatedItems.includes(project.id) ? 'translateY(0)' : 'translateY(20px)',
                opacity: animatedItems.includes(project.id) ? 1 : 0,
                transition: 'transform 0.5s ease, opacity 0.5s ease'
              }}
            >
              <CardHeader>
                <CardIcon>{project.icon}</CardIcon>
                <CardTitleGroup>
                  <CardTitle>{project.title}</CardTitle>
                  <CardSubtitle>{project.subtitle}</CardSubtitle>
                </CardTitleGroup>
              </CardHeader>

              <CardContent>
                {project.description}
              </CardContent>

              <TagContainer>
                {project.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
              </TagContainer>
            </ResearchCard>
          ))}
        </ResearchGrid>

        <Modal isOpen={isModalOpen} onClick={closeModal}>
          <ModalContent
            isOpen={isModalOpen}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedResearch && (
              <>
                <CloseButton onClick={closeModal}>×</CloseButton>

                <ModalTitle>{selectedResearch.title}</ModalTitle>

                <ModalSection>
                  <SectionTitle>Research Objective</SectionTitle>
                  <p style={{ lineHeight: '1.6', opacity: '0.8' }}>
                    {selectedResearch.details.objective}
                  </p>
                </ModalSection>

                <ModalSection>
                  <SectionTitle>Methodology</SectionTitle>
                  <p style={{ lineHeight: '1.6', opacity: '0.8' }}>
                    {selectedResearch.details.methodology}
                  </p>
                </ModalSection>

                <ModalSection>
                  <SectionTitle>Key Results</SectionTitle>
                  <p style={{ lineHeight: '1.6', opacity: '0.8' }}>
                    {selectedResearch.details.results}
                  </p>
                </ModalSection>

                <ModalSection>
                  <SectionTitle>Applications</SectionTitle>
                  <p style={{ lineHeight: '1.6', opacity: '0.8' }}>
                    {selectedResearch.details.applications}
                  </p>
                </ModalSection>

                {selectedResearch.details.publications && (
                  <ModalSection>
                    <SectionTitle>Publications</SectionTitle>
                    <PublicationsList>
                      {selectedResearch.details.publications.map((pub, index) => (
                        <PublicationItem key={index}>
                          <PublicationTitle>{pub.title}</PublicationTitle>
                          <PublicationDetails>
                            {pub.journal} ({pub.year})
                          </PublicationDetails>
                          <PublicationDetails>
                            Authors: {pub.authors}
                          </PublicationDetails>
                        </PublicationItem>
                      ))}
                    </PublicationsList>
                  </ModalSection>
                )}

                <TagContainer>
                  {selectedResearch.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagContainer>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </ResearchContainer>
  );
}

export default Research;