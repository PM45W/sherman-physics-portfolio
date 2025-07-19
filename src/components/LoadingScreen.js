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
      width: '100%',
      height: '100%',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      <div style={{
        fontSize: '3rem',
        marginBottom: '2rem',
        color: '#f5f5f5',
        fontFamily: 'monospace'
      }}>
        SHERMAN WONG
      </div>
      
      <div style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#d4af37',
        marginBottom: '0.5rem',
        fontFamily: 'monospace'
      }}>
        {progress}%
      </div>
      
      <div style={{
        width: '300px',
        height: '8px',
        backgroundColor: '#333333',
        borderRadius: '4px',
        border: '1px solid #555555',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #ff0000, #d4af37)',
          transition: 'width 0.3s ease'
        }} />
      </div>
      
      <div style={{
        fontSize: '0.9rem',
        marginTop: '1rem',
        color: '#f5f5f5',
        opacity: 0.7,
        fontFamily: 'monospace'
      }}>
        {status}
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        fontFamily: 'monospace',
        fontStyle: 'italic',
        color: '#d4af37',
        opacity: 0.7,
        textAlign: 'center',
        maxWidth: '80%'
      }}>
        {motto}
      </div>
      

    </div>
  );
};

export default LoadingScreen;