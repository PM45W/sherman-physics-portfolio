import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');
  
  console.log('🔍 LoadingScreen RENDERED - Progress:', progress);
  
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
    console.log('🚀 LoadingScreen useEffect STARTED');
    
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
        console.log('✅ Progress complete - clearing interval');
        clearInterval(interval);
        return;
      }
      
      const increment = Math.floor(Math.random() * 8) + 2;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);
      
      console.log('📊 Progress updated:', currentProgress);
      
      const statusIndex = Math.floor((currentProgress / 100) * (statuses.length - 1));
      setStatus(statuses[statusIndex]);
    }, 150);
    
    return () => {
      console.log('🧹 LoadingScreen useEffect cleanup');
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
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999,
      overflow: 'hidden',
      border: '5px solid red'
    }}>
      {/* EMERGENCY TEST BOX */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
        zIndex: 100000,
        border: '3px solid yellow'
      }}>
        🚨 LOADING SCREEN ACTIVE - {progress}%
      </div>
      
      {/* MAIN CONTENT */}
      <div style={{
        fontSize: '4rem',
        marginBottom: '2rem',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        textShadow: '0 0 20px #ffffff',
        border: '3px solid white'
      }}>
        SHERMAN WONG
      </div>
      
      {/* PROGRESS PERCENTAGE */}
      <div style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#ffff00',
        marginBottom: '1rem',
        fontFamily: 'Arial, sans-serif',
        textShadow: '0 0 15px #ffff00',
        border: '2px solid yellow'
      }}>
        {progress}%
      </div>
      
      {/* PROGRESS BAR CONTAINER */}
      <div style={{
        width: '400px',
        height: '20px',
        backgroundColor: '#333333',
        borderRadius: '10px',
        border: '3px solid #ffffff',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '1rem'
      }}>
        {/* PROGRESS BAR FILL */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #ff0000, #ffff00)',
          transition: 'width 0.3s ease',
          border: '2px solid #ff0000'
        }} />
        
        {/* PROGRESS TEXT OVERLAY */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000000',
          fontSize: '12px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}>
          {progress}%
        </div>
      </div>
      
      {/* STATUS TEXT */}
      <div style={{
        fontSize: '1.2rem',
        marginTop: '1rem',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        border: '2px solid white'
      }}>
        {status}
      </div>
      
      {/* MOTTO */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        fontFamily: 'Arial, sans-serif',
        fontStyle: 'italic',
        color: '#ffff00',
        textAlign: 'center',
        maxWidth: '80%',
        fontSize: '1rem',
        border: '2px solid yellow'
      }}>
        {motto}
      </div>
      
      {/* DEBUG INFO */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 0, 0, 0.9)',
        color: 'white',
        padding: '20px',
        fontSize: '18px',
        fontWeight: 'bold',
        zIndex: 100001,
        border: '5px solid white',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        🔍 DEBUG INFO<br/>
        Progress: {progress}%<br/>
        Status: {status}<br/>
        Component: Active
      </div>
    </div>
  );
};

export default LoadingScreen;