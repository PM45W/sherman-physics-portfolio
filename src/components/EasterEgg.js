import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const EasterEggContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
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
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(255, 0, 0, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(10, 10, 10, 0.8);
  border: 2px solid var(--color-accent-red);
  color: var(--color-accent-red);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-accent-red);
    color: var(--color-bg);
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
  }
`;

const GameCanvas = styled.canvas`
  border: 3px solid var(--color-accent-gold);
  background: linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(10, 10, 10, 0.8));
  max-width: 900px;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
`;

const GameTitle = styled.h2`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
`;

const GameInstructions = styled.p`
  font-family: var(--font-mono);
  color: var(--color-text);
  margin-top: 1rem;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
`;

const ScoreDisplay = styled.div`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 1.5rem;
  margin-top: 1rem;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
`;

const PhysicsTip = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(145deg, rgba(10, 10, 10, 0.9), rgba(26, 26, 26, 0.9));
  border: 2px solid var(--color-accent-gold);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
  opacity: ${props => props.show ? 1 : 0};
  transform: translateX(-50%) translateY(${props => props.show ? '0' : '20px'});
  transition: all 0.5s ease;
  z-index: 10;
`;

const TipTitle = styled.div`
  color: var(--color-accent-gold);
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const GameStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  font-family: var(--font-mono);
  color: var(--color-text);
`;

const StatItem = styled.div`
  text-align: center;
  
  .value {
    color: var(--color-accent-gold);
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .label {
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;

const EasterEgg = ({ onClose }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [particles, setParticles] = useState(0);
  const [tunnels, setTunnels] = useState(0);
  
  const physicsTips = [
    {
      title: "Quantum Tunneling",
      text: "Particles can pass through barriers that classical physics says they shouldn't be able to cross!"
    },
    {
      title: "Wave-Particle Duality",
      text: "Particles behave like both waves and particles - they can interfere with themselves!"
    },
    {
      title: "Heisenberg Uncertainty",
      text: "The more precisely we know a particle's position, the less precisely we can know its momentum."
    },
    {
      title: "Superposition",
      text: "Particles can exist in multiple states simultaneously until measured!"
    },
    {
      title: "Quantum Entanglement",
      text: "Two particles can become connected so that measuring one instantly affects the other, no matter the distance!"
    }
  ];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Game state
    let gameState = {
      particles: [],
      barriers: [],
      score: 0,
      particlesCreated: 0,
      successfulTunnels: 0,
      gameTime: 0
    };
    
    // Physics constants
    const GRAVITY = 0.2;
    const PARTICLE_SIZE = 8;
    const BARRIER_WIDTH = 60;
    const BARRIER_HEIGHT = 200;
    const BARRIER_GAP = 120;
    
    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4 + 2; // Random velocity with bias forward
        this.vy = (Math.random() - 0.5) * 4;
        this.size = PARTICLE_SIZE;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`; // Blue to purple
        this.energy = Math.random() * 100 + 50;
        this.quantumState = Math.random() > 0.7; // 30% chance of quantum tunneling
        this.tunneling = false;
        this.tunnelProgress = 0;
      }
      
      update() {
        // Apply gravity
        this.vy += GRAVITY;
        
        // Update position
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off walls
        if (this.y + this.size > canvas.height) {
          this.y = canvas.height - this.size;
          this.vy *= -0.8;
        }
        if (this.y - this.size < 0) {
          this.y = this.size;
          this.vy *= -0.8;
        }
        
        // Check barrier collisions
        gameState.barriers.forEach(barrier => {
          if (this.x < barrier.x + BARRIER_WIDTH && 
              this.x + this.size > barrier.x &&
              this.y < barrier.y + barrier.height &&
              this.y + this.size > barrier.y) {
            
            if (this.quantumState && this.energy > 30) {
              // Quantum tunneling
              this.tunneling = true;
              this.tunnelProgress = 0;
            } else {
              // Bounce off barrier
              this.vx *= -0.8;
              this.x = barrier.x - this.size;
            }
          }
        });
        
        // Handle tunneling
        if (this.tunneling) {
          this.tunnelProgress += 0.02;
          if (this.tunnelProgress >= 1) {
            this.tunneling = false;
            this.x += BARRIER_WIDTH + 10;
            gameState.successfulTunnels++;
            setTunnels(gameState.successfulTunnels);
          }
        }
        
        // Remove particles that go off screen
        if (this.x > canvas.width + 50) {
          gameState.score++;
          setScore(gameState.score);
        }
      }
      
      draw() {
        ctx.save();
        
        if (this.tunneling) {
          // Draw tunneling effect
          ctx.globalAlpha = 0.3 + 0.7 * Math.sin(this.tunnelProgress * Math.PI * 4);
          ctx.fillStyle = `hsl(${Math.random() * 60 + 200}, 100%, 70%)`;
          ctx.shadowBlur = 20;
          ctx.shadowColor = this.color;
        } else {
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 5;
          ctx.shadowColor = this.color;
        }
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw energy indicator
        ctx.fillStyle = `hsl(${this.energy * 2.4}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }
    
    // Barrier class
    class Barrier {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = BARRIER_HEIGHT;
        this.opacity = 0.8;
      }
      
      draw() {
        ctx.save();
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
        ctx.fillRect(this.x, this.y, BARRIER_WIDTH, this.height);
        ctx.restore();
      }
    }
    
    // Create barriers
    const createBarriers = () => {
      const barrierY = canvas.height / 2 - BARRIER_HEIGHT / 2;
      gameState.barriers = [
        new Barrier(canvas.width * 0.3, barrierY),
        new Barrier(canvas.width * 0.6, barrierY)
      ];
    };
    
    // Create particle
    const createParticle = () => {
      if (gameState.particles.length < 20) {
        const particle = new Particle(50, Math.random() * canvas.height);
        gameState.particles.push(particle);
        gameState.particlesCreated++;
        setParticles(gameState.particlesCreated);
      }
    };
    
    // Initialize game
    createBarriers();
    
    // Game loop
    let animationId;
    let frameCount = 0;
    
    const gameLoop = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background grid
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 30) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 30) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }
      
      // Update and draw barriers
      gameState.barriers.forEach(barrier => barrier.draw());
      
      // Create particles periodically
      if (frameCount % 60 === 0) {
        createParticle();
      }
      
      // Update and draw particles
      gameState.particles = gameState.particles.filter(particle => {
        particle.update();
        particle.draw();
        return particle.x < canvas.width + 100 && particle.y > -50;
      });
      
      // Update game time
      gameState.gameTime++;
      
      frameCount++;
      animationId = requestAnimationFrame(gameLoop);
    };
    
    // Start game
    gameLoop();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // Show physics tips periodically
  useEffect(() => {
    const tipInterval = setInterval(() => {
      setShowTip(true);
      setCurrentTip(Math.floor(Math.random() * physicsTips.length));
      
      setTimeout(() => {
        setShowTip(false);
      }, 5000);
    }, 60000); // Show tip every minute
    
    return () => clearInterval(tipInterval);
  }, [physicsTips.length]);
  
  return (
    <EasterEggContainer>
      <CloseButton onClick={onClose}>×</CloseButton>
      <GameTitle>Quantum Particle Collider</GameTitle>
      <GameCanvas ref={canvasRef} />
      <GameInstructions>
        Watch quantum particles tunnel through barriers! Particles with high energy can quantum tunnel through barriers.
        <br />
        Use your knowledge of quantum mechanics to understand the physics behind the simulation.
      </GameInstructions>
      
      <GameStats>
        <StatItem>
          <div className="value">{score}</div>
          <div className="label">Particles Escaped</div>
        </StatItem>
        <StatItem>
          <div className="value">{particles}</div>
          <div className="label">Particles Created</div>
        </StatItem>
        <StatItem>
          <div className="value">{tunnels}</div>
          <div className="label">Quantum Tunnels</div>
        </StatItem>
      </GameStats>
      
      <PhysicsTip show={showTip}>
        <TipTitle>{physicsTips[currentTip].title}</TipTitle>
        {physicsTips[currentTip].text}
      </PhysicsTip>
    </EasterEggContainer>
  );
};

export default EasterEgg;