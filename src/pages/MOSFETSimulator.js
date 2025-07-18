import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

const SimulatorContainer = styled.main`
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

const SimulatorDescription = styled.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`;

const SimulatorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ControlPanel = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
`;

const VisualizationContainer = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  height: 500px;
  position: relative;
  overflow: hidden;
`;

const ParameterGroup = styled.div`
  margin-bottom: 2rem;
`;

const GroupTitle = styled.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`;

const Parameter = styled.div`
  margin-bottom: 1.5rem;
`;

const ParameterLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`;

const ParameterValue = styled.span`
  color: var(--color-accent-gold);
  font-weight: bold;
`;

const Slider = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--color-gray-light);
  outline: none;
  appearance: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent-gold);
    cursor: pointer;
    border: 2px solid var(--color-bg);
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent-gold);
    cursor: pointer;
    border: 2px solid var(--color-bg);
  }
`;

const InfoPanel = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const InfoTitle = styled.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const InfoText = styled.p`
  line-height: 1.5;
  opacity: 0.8;
  font-size: 0.9rem;
`;

const MOSFETCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const ElectronParticle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--color-accent-gold);
  border-radius: 50%;
  box-shadow: 0 0 5px var(--color-accent-gold);
  pointer-events: none;
  opacity: 0.8;
  transition: background-color 0.3s ease;
`;

const MOSFETLabels = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
`;

const Label = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.3rem 0.6rem;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SourceLabel = styled(Label)`
  top: 10px;
  left: 10px;
`;

const DrainLabel = styled(Label)`
  top: 10px;
  right: 10px;
`;

const GateLabel = styled(Label)`
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const SubstrateLabel = styled(Label)`
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const OperatingRegionIndicator = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid var(--color-accent-red);
  color: var(--color-accent-red);
  font-family: var(--font-mono);
  font-weight: bold;
`;

function MOSFETSimulator() {
  const [parameters, setParameters] = useState({
    vgs: 2.0,    // Gate-Source voltage (V)
    vds: 3.0,    // Drain-Source voltage (V)
    vth: 1.0,    // Threshold voltage (V)
    mobility: 0.5, // Electron mobility (arbitrary units)
    temperature: 300, // Temperature (K)
    channelLength: 50 // Channel length (arbitrary units)
  });

  const [electrons, setElectrons] = useState([]);
  const [operatingRegion, setOperatingRegion] = useState('');
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Calculate MOSFET operating region
  const getOperatingRegion = useCallback(() => {
    const { vgs, vds, vth } = parameters;
    if (vgs < vth) return "Cutoff";
    if (vds < (vgs - vth)) return "Linear/Triode";
    return "Saturation";
  }, [parameters]);

  // Generate electrons based on parameters
  useEffect(() => {
    if (!containerRef.current) return;
    
    const region = getOperatingRegion();
    setOperatingRegion(region);
    
    // Clear previous animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    // Clear previous electrons
    setElectrons([]);
    
    if (region === "Cutoff") {
      return; // No electrons in cutoff region
    }
    
    const containerWidth = containerRef.current.clientWidth - 40; // Padding
    
    // Calculate number of electrons based on parameters
    const { vgs, vth, mobility, vds } = parameters;
    const vgs_eff = Math.max(0, vgs - vth);
    
    // Base number of electrons on effective gate voltage and mobility
    let electronCount = Math.floor(vgs_eff * mobility * 20);
    electronCount = Math.min(Math.max(electronCount, 0), 100); // Limit to reasonable number
    
    // Generate initial electron positions
    const newElectrons = [];
    for (let i = 0; i < electronCount; i++) {
      newElectrons.push({
        id: i,
        x: 20 + Math.random() * 60, // Start near source
        y: 150 + Math.random() * 200,
        vx: (0.5 + Math.random() * 0.5) * mobility * vds, // Velocity based on mobility and drain voltage
        vy: (Math.random() - 0.5) * 0.5, // Small random vertical velocity
        size: 3 + Math.random() * 2
      });
    }
    
    setElectrons(newElectrons);
    
    // Start animation
    let lastTime = 0;
    const animate = (time) => {
      if (lastTime === 0) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;
      
      setElectrons(prevElectrons => {
        return prevElectrons.map(electron => {
          // Update position based on velocity
          let x = electron.x + electron.vx * deltaTime * 0.05;
          let y = electron.y + electron.vy * deltaTime * 0.05;
          
          // Boundary checks
          if (x > containerWidth - 20) {
            // Reached drain, respawn at source
            x = 20 + Math.random() * 60;
            y = 150 + Math.random() * 200;
          }
          
          // Channel boundaries (keep electrons in the channel)
          if (y < 150) y = 150;
          if (y > 350) y = 350;
          
          return {
            ...electron,
            x,
            y
          };
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [parameters, getOperatingRegion]);

  // Draw MOSFET structure on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set canvas dimensions to match display size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Draw MOSFET structure
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, width, height);
    
    // Draw substrate (p-type)
    ctx.fillStyle = '#333';
    ctx.fillRect(0, height * 0.7, width, height * 0.3);
    
    // Draw source and drain (n-type)
    ctx.fillStyle = '#444';
    ctx.fillRect(0, height * 0.3, width * 0.2, height * 0.4);
    ctx.fillRect(width * 0.8, height * 0.3, width * 0.2, height * 0.4);
    
    // Draw gate oxide
    ctx.fillStyle = '#222';
    ctx.fillRect(width * 0.2, height * 0.25, width * 0.6, height * 0.05);
    
    // Draw gate
    ctx.fillStyle = '#555';
    ctx.fillRect(width * 0.2, height * 0.15, width * 0.6, height * 0.1);
    
    // Draw channel
    const { vgs, vth } = parameters;
    if (vgs >= vth) {
      // Channel forms when Vgs > Vth
      ctx.fillStyle = operatingRegion === "Saturation" ? '#d4af37' : '#d4af3777';
      ctx.fillRect(width * 0.2, height * 0.3, width * 0.6, height * 0.05);
    }
    
    // Draw electric field lines
    if (vgs >= vth) {
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
      ctx.lineWidth = 1;
      
      // Vertical field lines from gate to channel
      for (let x = width * 0.25; x < width * 0.8; x += width * 0.05) {
        ctx.beginPath();
        ctx.moveTo(x, height * 0.25);
        ctx.lineTo(x, height * 0.3);
        ctx.stroke();
      }
      
      // Horizontal field lines in channel
      if (parameters.vds > 0) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        for (let y = height * 0.32; y < height * 0.38; y += height * 0.02) {
          ctx.beginPath();
          ctx.moveTo(width * 0.2, y);
          ctx.lineTo(width * 0.8, y);
          ctx.stroke();
        }
      }
    }
    
    // Labels
    ctx.fillStyle = '#fff';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    
    ctx.fillText('Source', width * 0.1, height * 0.5);
    ctx.fillText('Drain', width * 0.9, height * 0.5);
    ctx.fillText('Gate', width * 0.5, height * 0.2);
    ctx.fillText('p-Substrate', width * 0.5, height * 0.85);
    
    // Voltage labels
    ctx.fillStyle = '#d4af37';
    ctx.fillText(`Vgs = ${parameters.vgs}V`, width * 0.5, height * 0.1);
    ctx.fillText(`Vds = ${parameters.vds}V`, width * 0.9, height * 0.1);
    
    // Operating region
    ctx.fillStyle = '#ff0000';
    ctx.textAlign = 'right';
    ctx.fillText(`Region: ${operatingRegion}`, width - 10, height - 10);
    
  }, [parameters, operatingRegion]);

  const handleParameterChange = (param, value) => {
    setParameters(prev => ({
      ...prev,
      [param]: parseFloat(value)
    }));
  };

  return (
    <SimulatorContainer>
      <GridBackground />
      <div className="container">
        <Title>MOSFET Electron Mobility Visualization</Title>
        <SimulatorDescription>
          Explore electron mobility in MOSFET devices by adjusting parameters and observing real-time 
          electron flow visualization. This interactive simulator demonstrates how voltage and material 
          properties affect carrier transport in semiconductor devices.
        </SimulatorDescription>
        
        <SimulatorGrid>
          <ControlPanel>
            <ParameterGroup>
              <GroupTitle>Bias Voltages</GroupTitle>
              
              <Parameter>
                <ParameterLabel>
                  Gate-Source Voltage (VGS)
                  <ParameterValue>{parameters.vgs} V</ParameterValue>
                </ParameterLabel>
                <Slider
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={parameters.vgs}
                  onChange={(e) => handleParameterChange('vgs', e.target.value)}
                />
              </Parameter>

              <Parameter>
                <ParameterLabel>
                  Drain-Source Voltage (VDS)
                  <ParameterValue>{parameters.vds} V</ParameterValue>
                </ParameterLabel>
                <Slider
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={parameters.vds}
                  onChange={(e) => handleParameterChange('vds', e.target.value)}
                />
              </Parameter>
            </ParameterGroup>

            <ParameterGroup>
              <GroupTitle>Device Parameters</GroupTitle>
              
              <Parameter>
                <ParameterLabel>
                  Threshold Voltage (Vth)
                  <ParameterValue>{parameters.vth} V</ParameterValue>
                </ParameterLabel>
                <Slider
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={parameters.vth}
                  onChange={(e) => handleParameterChange('vth', e.target.value)}
                />
              </Parameter>

              <Parameter>
                <ParameterLabel>
                  Electron Mobility
                  <ParameterValue>{parameters.mobility.toFixed(2)}</ParameterValue>
                </ParameterLabel>
                <Slider
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={parameters.mobility}
                  onChange={(e) => handleParameterChange('mobility', e.target.value)}
                />
              </Parameter>

              <Parameter>
                <ParameterLabel>
                  Temperature
                  <ParameterValue>{parameters.temperature} K</ParameterValue>
                </ParameterLabel>
                <Slider
                  type="range"
                  min="200"
                  max="400"
                  step="10"
                  value={parameters.temperature}
                  onChange={(e) => handleParameterChange('temperature', e.target.value)}
                />
              </Parameter>
            </ParameterGroup>

            <InfoPanel>
              <InfoTitle>Operating Region: {operatingRegion}</InfoTitle>
              <InfoText>
                {operatingRegion === "Cutoff" && 
                  "VGS < Vth: No current flows through the channel. The transistor is effectively off. No electron flow is observed."}
                {operatingRegion === "Linear/Triode" && 
                  "VGS > Vth and VDS < (VGS - Vth): Current increases approximately linearly with VDS. Electrons flow through a uniform channel from source to drain."}
                {operatingRegion === "Saturation" && 
                  "VGS > Vth and VDS ≥ (VGS - Vth): Current is relatively independent of VDS and is controlled primarily by VGS. The channel is pinched off at the drain end, creating a high-field region."}
              </InfoText>
            </InfoPanel>
          </ControlPanel>

          <VisualizationContainer ref={containerRef}>
            <MOSFETCanvas ref={canvasRef} />
            
            {electrons.map(electron => (
              <ElectronParticle 
                key={electron.id}
                style={{
                  left: `${electron.x}px`,
                  top: `${electron.y}px`,
                  width: `${electron.size}px`,
                  height: `${electron.size}px`,
                  backgroundColor: operatingRegion === "Saturation" ? 
                    (electron.x > containerRef.current?.clientWidth * 0.7 ? 'var(--color-accent-red)' : 'var(--color-accent-gold)') : 
                    'var(--color-accent-gold)'
                }}
              />
            ))}
            
            <MOSFETLabels>
              <SourceLabel>Source</SourceLabel>
              <DrainLabel>Drain</DrainLabel>
              <GateLabel>Gate</GateLabel>
              <SubstrateLabel>p-Substrate</SubstrateLabel>
              <OperatingRegionIndicator>{operatingRegion}</OperatingRegionIndicator>
            </MOSFETLabels>
          </VisualizationContainer>
        </SimulatorGrid>
      </div>
    </SimulatorContainer>
  );
}

export default MOSFETSimulator;