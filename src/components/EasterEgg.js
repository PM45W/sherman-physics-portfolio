import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const EasterEggContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: var(--color-text);
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: var(--color-accent-red);
  }
`;

const GameCanvas = styled.canvas`
  border: 2px solid var(--color-accent-red);
  background-color: var(--color-bg);
  max-width: 800px;
  width: 100%;
  height: 400px;
`;

const GameTitle = styled.h2`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const GameInstructions = styled.p`
  font-family: var(--font-mono);
  color: var(--color-text);
  margin-top: 1rem;
  text-align: center;
  max-width: 600px;
`;

const ScoreDisplay = styled.div`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const EasterEgg = ({ onClose }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Ferrari F1 car
    const car = {
      x: 50,
      y: canvas.height / 2,
      width: 60,
      height: 30,
      speed: 0,
      acceleration: 0.2,
      maxSpeed: 8,
      deceleration: 0.1,
      color: '#FF0000' // Ferrari red
    };
    
    // Obstacles
    let obstacles = [];
    const obstacleWidth = 20;
    const obstacleSpeed = 5;
    const obstacleGap = 200;
    
    // Controls
    const keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };
    
    // Event listeners
    window.addEventListener('keydown', (e) => {
      if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
      }
    });
    
    window.addEventListener('keyup', (e) => {
      if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = false;
      }
    });
    
    // Game loop
    let animationId;
    let frameCount = 0;
    
    const createObstacle = () => {
      const gapPosition = Math.random() * (canvas.height - obstacleGap);
      
      obstacles.push({
        x: canvas.width,
        y: 0,
        width: obstacleWidth,
        height: gapPosition,
        passed: false
      });
      
      obstacles.push({
        x: canvas.width,
        y: gapPosition + obstacleGap,
        width: obstacleWidth,
        height: canvas.height - gapPosition - obstacleGap,
        passed: false
      });
    };
    
    const drawCar = () => {
      // Draw car body
      ctx.fillStyle = car.color;
      ctx.fillRect(car.x, car.y, car.width, car.height);
      
      // Draw wheels
      ctx.fillStyle = '#000000';
      ctx.fillRect(car.x + 10, car.y - 5, 10, 5);
      ctx.fillRect(car.x + 40, car.y - 5, 10, 5);
      ctx.fillRect(car.x + 10, car.y + car.height, 10, 5);
      ctx.fillRect(car.x + 40, car.y + car.height, 10, 5);
      
      // Draw Ferrari logo
      ctx.fillStyle = '#FFCC00';
      ctx.fillRect(car.x + 25, car.y + 10, 10, 10);
    };
    
    const drawObstacles = () => {
      obstacles.forEach(obstacle => {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      });
    };
    
    const updateGame = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw track
      ctx.strokeStyle = '#FFFFFF';
      ctx.setLineDash([5, 15]);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      
      // Update car position based on keys
      if (keys.ArrowUp) {
        car.y -= 5;
      }
      if (keys.ArrowDown) {
        car.y += 5;
      }
      if (keys.ArrowRight) {
        car.speed = Math.min(car.speed + car.acceleration, car.maxSpeed);
      } else if (keys.ArrowLeft) {
        car.speed = Math.max(car.speed - car.acceleration, 0);
      } else {
        car.speed = Math.max(car.speed - car.deceleration, 0);
      }
      
      // Keep car within canvas
      car.y = Math.max(0, Math.min(canvas.height - car.height, car.y));
      
      // Create obstacles
      if (frameCount % 100 === 0) {
        createObstacle();
      }
      
      // Update obstacles
      obstacles = obstacles.filter(obstacle => {
        obstacle.x -= obstacleSpeed;
        
        // Check if car passed obstacle
        if (!obstacle.passed && obstacle.x + obstacle.width < car.x) {
          obstacle.passed = true;
          setScore(prevScore => prevScore + 1);
        }
        
        // Check collision
        if (
          car.x < obstacle.x + obstacle.width &&
          car.x + car.width > obstacle.x &&
          car.y < obstacle.y + obstacle.height &&
          car.y + car.height > obstacle.y
        ) {
          // Game over
          cancelAnimationFrame(animationId);
          return false;
        }
        
        return obstacle.x + obstacle.width > 0;
      });
      
      // Draw game elements
      drawObstacles();
      drawCar();
      
      // Draw speed indicator
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '14px monospace';
      ctx.fillText(`Speed: ${Math.floor(car.speed * 30)} km/h`, 20, 30);
      
      frameCount++;
      animationId = requestAnimationFrame(updateGame);
    };
    
    // Start game
    updateGame();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('keydown', () => {});
      window.removeEventListener('keyup', () => {});
    };
  }, []);
  
  return (
    <EasterEggContainer>
      <CloseButton onClick={onClose}>×</CloseButton>
      <GameTitle>Ferrari F1 Challenge</GameTitle>
      <GameCanvas ref={canvasRef} />
      <ScoreDisplay>Score: {score}</ScoreDisplay>
      <GameInstructions>
        Use arrow keys to control the Ferrari F1 car. ↑ and ↓ to move up and down.
        → to accelerate, ← to decelerate. Avoid the obstacles!
      </GameInstructions>
    </EasterEggContainer>
  );
};

export default EasterEgg;