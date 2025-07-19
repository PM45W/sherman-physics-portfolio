import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  

  
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
  
  useEffect(() => {
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
      
      const increment = Math.floor(Math.random() * 8) + 2;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);
      
      const statusIndex = Math.floor((currentProgress / 100) * (statuses.length - 1));
      setStatus(statuses[statusIndex]);
    }, 150);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999,
      overflow: 'hidden'
    }}>
      {/* MAIN CONTENT */}
      <div style={{
        fontSize: 'clamp(2rem, 8vw, 4rem)',
        marginBottom: '2rem',
        color: '#ffffff',
        fontFamily: 'Space Mono, monospace',
        fontWeight: 'bold',
        textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
        letterSpacing: '0.1em'
      }}>
        SHERMAN WONG
      </div>
      
      {/* PROGRESS PERCENTAGE */}
      <div style={{
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        fontWeight: 'bold',
        color: '#d4af37',
        marginBottom: '1rem',
        fontFamily: 'Space Mono, monospace',
        textShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
      }}>
        {progress}%
      </div>
      
      {/* PROGRESS BAR CONTAINER */}
      <div style={{
        width: 'clamp(300px, 80vw, 400px)',
        height: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '6px',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '1rem',
        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
      }}>
        {/* PROGRESS BAR FILL */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #ff0000, #d4af37)',
          transition: 'width 0.3s ease',
          boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)'
        }} />
        
        {/* SHIMMER EFFECT */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          animation: 'shimmer 2s infinite',
          transform: 'translateX(-100%)'
        }} />
      </div>
      
      {/* STATUS TEXT */}
      <div style={{
        fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
        marginTop: '1rem',
        color: '#ffffff',
        fontFamily: 'Space Mono, monospace',
        textAlign: 'center',
        opacity: 0.8
      }}>
        {status}
      </div>
      
      {/* MOTTO */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        fontFamily: 'Space Mono, monospace',
        fontStyle: 'italic',
        color: '#d4af37',
        textAlign: 'center',
        maxWidth: '90%',
        fontSize: 'clamp(0.8rem, 2vw, 1rem)',
        opacity: 0.7
      }}>
        {motto}
      </div>
      
      {/* ANIMATED PARTICLES */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              backgroundColor: '#d4af37',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;