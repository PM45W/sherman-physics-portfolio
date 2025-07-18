import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import AnimatedMotto from './AnimatedMotto';

const AnimationContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 4rem;
  position: relative;
`;

const AnimationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AnimationTitle = styled.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin: 0;
`;

const SimulationContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const ControlPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
`;

const ControlButton = styled.button`
  background-color: rgba(10, 10, 10, 0.7);
  color: var(--color-accent-gold);
  border: 1px solid var(--color-accent-gold);
  border-radius: 4px;
  padding: 8px 15px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-accent-gold);
    color: black;
  }
  
  &.active {
    background-color: var(--color-accent-red);
    color: white;
    border-color: var(--color-accent-red);
  }
`;

const PhaseIndicator = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: rgba(10, 10, 10, 0.8);
  color: var(--color-accent-gold);
  padding: 8px 15px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  border: 1px solid var(--color-accent-gold);
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const SimulationInfo = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const InfoTitle = styled.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-top: 0;
  margin-bottom: 1rem;
`;

const MolecularAnimation = () => {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('glass'); // glass, liquid, crystal
  const [temperature, setTemperature] = useState(0.5); // 0 to 1
  const [isRunning, setIsRunning] = useState(true);
  const [showHopping, setShowHopping] = useState(false);
  const [showStress, setShowStress] = useState(false);
  const particlesRef = useRef([]);
  const requestIdRef = useRef(null);
  const frameCountRef = useRef(0);
  
  // Initialize particles
  useEffect(() => {
    const initializeParticles = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      const width = canvas.width;
      const height = canvas.height;
      
      const particleCount = 180;
      const particles = [];
      
      // Create a grid layout for crystal phase
      if (phase === 'crystal') {
        const gridSize = Math.floor(Math.sqrt(particleCount));
        const cellWidth = width / gridSize;
        const cellHeight = height / gridSize;
        
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            // Add some slight randomness to grid positions
            const randomOffset = 0.1;
            const x = (i + 0.5 + (Math.random() * randomOffset - randomOffset/2)) * cellWidth;
            const y = (j + 0.5 + (Math.random() * randomOffset - randomOffset/2)) * cellHeight;
            
            particles.push({
              x,
              y,
              baseX: x,
              baseY: y,
              radius: 3 + Math.random(),
              color: getRandomColor(),
              vx: (Math.random() - 0.5) * 0.2,
              vy: (Math.random() - 0.5) * 0.2,
              bonds: [],
              fixed: true,
              lastHop: 0,
              hopProbability: 0.001,
              stress: 0,
              type: Math.random() < 0.8 ? 'A' : 'B' // Different atom types
            });
          }
        }
      } else {
        // Random distribution for glass and liquid
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            baseX: null,
            baseY: null,
            radius: 2.5 + Math.random() * 1.5,
            color: getRandomColor(),
            vx: (Math.random() - 0.5) * (phase === 'liquid' ? 1 : 0.3),
            vy: (Math.random() - 0.5) * (phase === 'liquid' ? 1 : 0.3),
            bonds: [],
            fixed: phase === 'glass' && Math.random() < 0.4,
            lastHop: 0,
            hopProbability: phase === 'glass' ? 0.005 + Math.random() * 0.015 : 0,
            stress: 0,
            type: Math.random() < 0.7 ? 'A' : 'B' // Different atom types
          });
        }
      }
      
      particlesRef.current = particles;
    };
    
    const getRandomColor = () => {
      // Colors for different atom types
      const colors = [
        'rgba(255, 50, 50, 0.8)',    // Red
        'rgba(50, 200, 255, 0.8)',   // Blue
        'rgba(255, 200, 50, 0.8)',   // Yellow
        'rgba(50, 255, 100, 0.8)',   // Green
        'rgba(212, 175, 55, 0.8)'    // Gold
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    initializeParticles();
    
    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [phase]);
  
  // Animation loop
  useEffect(() => {
    if (!isRunning) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const render = () => {
      frameCountRef.current += 1;
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw background grid for crystal structure
      if (phase === 'crystal') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 0.5;
        
        const gridSize = Math.floor(Math.sqrt(particlesRef.current.length));
        const cellWidth = width / gridSize;
        const cellHeight = height / gridSize;
        
        for (let i = 0; i <= gridSize; i++) {
          ctx.beginPath();
          ctx.moveTo(i * cellWidth, 0);
          ctx.lineTo(i * cellWidth, height);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(0, i * cellHeight);
          ctx.lineTo(width, i * cellHeight);
          ctx.stroke();
        }
      }
      
      // Update particle positions based on phase
      const particles = particlesRef.current;
      
      // Calculate bonds between particles
      if (phase === 'glass' || phase === 'crystal') {
        for (let i = 0; i < particles.length; i++) {
          particles[i].bonds = [];
          particles[i].stress = 0;
          
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[j].x - particles[i].x;
            const dy = particles[j].y - particles[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const bondThreshold = phase === 'crystal' ? 40 : 30;
            
            if (distance < bondThreshold) {
              particles[i].bonds.push(j);
              
              // Calculate stress based on ideal bond length
              const idealDistance = phase === 'crystal' ? 30 : 25;
              const stressFactor = Math.abs(distance - idealDistance) / idealDistance;
              particles[i].stress += stressFactor;
              particles[j].stress += stressFactor;
            }
          }
        }
      }
      
      // Draw bonds first (so they appear behind particles)
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (const j of p1.bonds) {
          const p2 = particles[j];
          
          // Skip drawing some bonds randomly for glass to show disorder
          if (phase === 'glass' && Math.random() < 0.3) continue;
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          
          // Different bond styles for different phases
          if (phase === 'crystal') {
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
          } else if (phase === 'glass') {
            // Show stress in bonds if enabled
            if (showStress) {
              const stress = (p1.stress + p2.stress) / 2;
              const stressColor = `rgba(${Math.min(255, 100 + stress * 400)}, ${Math.max(0, 200 - stress * 400)}, 50, 0.5)`;
              ctx.strokeStyle = stressColor;
            } else {
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            }
          }
          
          ctx.stroke();
        }
      }
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Apply phase-specific behavior
        switch (phase) {
          case 'glass':
            // Slow, constrained movement with occasional hops
            if (!p.fixed) {
              p.x += p.vx * (temperature * 0.5);
              p.y += p.vy * (temperature * 0.5);
              
              // Random direction changes
              if (Math.random() < 0.01) {
                p.vx = (Math.random() - 0.5) * 0.5;
                p.vy = (Math.random() - 0.5) * 0.5;
              }
              
              // Occasional hopping behavior if enabled
              if (showHopping) {
                const now = Date.now();
                if (now - p.lastHop > 2000 && Math.random() < p.hopProbability * temperature) {
                  // Visualize the hop with a trail
                  const hopDistance = 20 + Math.random() * 20;
                  const angle = Math.random() * Math.PI * 2;
                  const targetX = p.x + Math.cos(angle) * hopDistance;
                  const targetY = p.y + Math.sin(angle) * hopDistance;
                  
                  // Draw hop trail
                  const gradient = ctx.createLinearGradient(p.x, p.y, targetX, targetY);
                  gradient.addColorStop(0, p.color);
                  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
                  
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(targetX, targetY);
                  ctx.strokeStyle = gradient;
                  ctx.lineWidth = 2;
                  ctx.stroke();
                  
                  // Move particle
                  p.x = targetX;
                  p.y = targetY;
                  p.lastHop = now;
                }
              }
            }
            break;
            
          case 'liquid':
            // Faster, more random movement
            p.x += p.vx * (temperature * 2);
            p.y += p.vy * (temperature * 2);
            
            // More frequent direction changes
            if (Math.random() < 0.05) {
              p.vx = (Math.random() - 0.5) * 2;
              p.vy = (Math.random() - 0.5) * 2;
            }
            break;
            
          case 'crystal':
            // Very limited movement around fixed positions
            if (p.baseX !== null) {
              // Vibration around lattice position
              const vibrationAmount = temperature * 2;
              p.x = p.baseX + (Math.sin(frameCountRef.current * 0.05 + i) * vibrationAmount);
              p.y = p.baseY + (Math.sin(frameCountRef.current * 0.05 + i + 2) * vibrationAmount);
            }
            break;
        }
        
        // Boundary conditions (wrap around)
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Color based on type or stress
        let particleColor = p.color;
        if (showStress && phase !== 'liquid') {
          const stressLevel = Math.min(1, p.stress / 2);
          particleColor = `rgba(${Math.min(255, 100 + stressLevel * 400)}, ${Math.max(0, 200 - stressLevel * 400)}, 50, 0.8)`;
        }
        
        ctx.fillStyle = particleColor;
        ctx.fill();
        
        // Add glow effect
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius * 3
        );
        gradient.addColorStop(0, particleColor);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      requestIdRef.current = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [isRunning, phase, temperature, showHopping, showStress]);
  
  const handlePhaseChange = (newPhase) => {
    setPhase(newPhase);
  };
  
  const handleTemperatureChange = (increment) => {
    setTemperature(prev => {
      const newTemp = prev + increment;
      return Math.max(0.1, Math.min(1, newTemp));
    });
  };
  
  const toggleSimulation = () => {
    setIsRunning(prev => !prev);
  };
  
  const toggleHopping = () => {
    setShowHopping(prev => !prev);
  };
  
  const toggleStress = () => {
    setShowStress(prev => !prev);
  };
  
  const getPhaseDescription = () => {
    switch(phase) {
      case 'glass':
        return "Glass is an amorphous solid with no long-range order. Particles are randomly arranged but have limited mobility, with occasional 'hopping' between positions.";
      case 'liquid':
        return "In the liquid phase, particles move freely and continuously, with no fixed positions. The structure is disordered with only short-range correlations.";
      case 'crystal':
        return "Crystalline solids have particles arranged in a regular, repeating pattern. Particles vibrate around fixed lattice positions with amplitude increasing with temperature.";
      default:
        return "";
    }
  };
  
  return (
    <AnimationContainer>
      <AnimationHeader>
        <AnimationTitle>Molecular Dynamics Simulation</AnimationTitle>
        <AnimatedMotto text="Visualizing Phase Transitions in Materials" fontSize="1rem" />
      </AnimationHeader>
      
      <SimulationContainer>
        <Canvas ref={canvasRef} />
        <PhaseIndicator>
          Phase: {phase.charAt(0).toUpperCase() + phase.slice(1)} | Temperature: {Math.round(temperature * 100)}%
        </PhaseIndicator>
      </SimulationContainer>
      
      <ControlPanel>
        <ControlButton 
          className={phase === 'glass' ? 'active' : ''} 
          onClick={() => handlePhaseChange('glass')}
        >
          Glass Phase
        </ControlButton>
        <ControlButton 
          className={phase === 'liquid' ? 'active' : ''} 
          onClick={() => handlePhaseChange('liquid')}
        >
          Liquid Phase
        </ControlButton>
        <ControlButton 
          className={phase === 'crystal' ? 'active' : ''} 
          onClick={() => handlePhaseChange('crystal')}
        >
          Crystal Phase
        </ControlButton>
        <ControlButton onClick={() => handleTemperatureChange(0.1)}>Temperature +</ControlButton>
        <ControlButton onClick={() => handleTemperatureChange(-0.1)}>Temperature -</ControlButton>
        <ControlButton 
          className={showHopping ? 'active' : ''} 
          onClick={toggleHopping}
        >
          {showHopping ? 'Hide Hopping' : 'Show Hopping'}
        </ControlButton>
        <ControlButton 
          className={showStress ? 'active' : ''} 
          onClick={toggleStress}
        >
          {showStress ? 'Hide Stress' : 'Show Stress'}
        </ControlButton>
        <ControlButton onClick={toggleSimulation}>
          {isRunning ? 'Pause' : 'Play'}
        </ControlButton>
      </ControlPanel>
      
      <SimulationInfo>
        <InfoTitle>About This Simulation</InfoTitle>
        <p>
          This interactive molecular dynamics simulation demonstrates the structural differences between 
          crystalline, glass, and liquid phases of materials. The visualization shows how atomic arrangement 
          and mobility change across different phases.
        </p>
        <p>
          {getPhaseDescription()}
        </p>
        <p>
          <strong>Controls:</strong> Toggle between phases, adjust temperature, and enable special 
          visualizations like atomic hopping (a key mechanism in glass dynamics) and local stress 
          distribution (shown through color intensity).
        </p>
      </SimulationInfo>
    </AnimationContainer>
  );
};

export default MolecularAnimation;