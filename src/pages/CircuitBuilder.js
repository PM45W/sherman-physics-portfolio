import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';

const BuilderContainer = styled.main`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
`;

const GridBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
    linear-gradient(rgba(26, 26, 26, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 26, 26, 0.3) 1px, transparent 1px);
  background-size: 200px 200px, 200px 200px, 30px 30px, 30px 30px;
  z-index: -1;
  animation: gridMove 20s linear infinite;
  
  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(30px, 30px); }
  }
`;

const Title = styled.h1`
  font-family: var(--font-mono);
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  color: var(--color-accent-gold);
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-accent-red), var(--color-accent-gold));
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
`;

const BuilderDescription = styled.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
  color: var(--color-text);
`;

const BuilderLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 320px;
  gap: 2rem;
  height: 75vh;
  max-width: 1600px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: 250px 1fr 280px;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
    gap: 1.5rem;
  }
`;

const ComponentPalette = styled.div`
  background: linear-gradient(145deg, rgba(10, 10, 10, 0.9), rgba(26, 26, 26, 0.9));
  border: 2px solid rgba(212, 175, 55, 0.3);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-accent-gold), transparent);
    animation: scanLine 3s ease-in-out infinite;
  }
  
  @keyframes scanLine {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
  
  @media (max-width: 1024px) {
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    overflow-x: auto;
  }
`;

const CircuitCanvas = styled.div`
  background: linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(10, 10, 10, 0.8));
  border: 3px solid rgba(212, 175, 55, 0.4);
  border-radius: 15px;
  height: 75vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 0, 0, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 1024px) {
    height: 60vh;
  }
`;

const PropertiesPanel = styled.div`
  background: linear-gradient(145deg, rgba(10, 10, 10, 0.9), rgba(26, 26, 26, 0.9));
  border: 2px solid rgba(212, 175, 55, 0.3);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(20px);
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

const PaletteTitle = styled.h3`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--color-accent-gold);
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
  }
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    min-width: 600px;
  }
`;

const ComponentItem = styled.div`
  background: linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(10, 10, 10, 0.8));
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  cursor: grab;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: var(--color-accent-gold);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
  }
  
  &:active {
    cursor: grabbing;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ComponentIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ComponentName = styled.div`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text);
`;

const CircuitComponent = styled.div`
  position: absolute;
  background: linear-gradient(145deg, rgba(26, 26, 26, 0.9), rgba(10, 10, 10, 0.9));
  border: 2px solid ${props => props.isSelected ? 'var(--color-accent-gold)' : 'rgba(212, 175, 55, 0.3)'};
  border-radius: 8px;
  padding: 1rem;
  cursor: move;
  user-select: none;
  transition: all 0.3s ease;
  box-shadow: ${props => props.isSelected ? '0 0 20px rgba(212, 175, 55, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.2)'};
  
  &:hover {
    border-color: var(--color-accent-gold);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
  }
`;

const ComponentValue = styled.div`
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-accent-gold);
  text-align: center;
  margin-top: 0.5rem;
`;

const Wire = styled.div`
  position: absolute;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent-gold), var(--color-accent-red));
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  pointer-events: none;
  z-index: 1;
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ControlButton = styled.button`
  background: linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(10, 10, 10, 0.8));
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  color: var(--color-accent-gold);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--color-accent-gold);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const PropertyGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const PropertyLabel = styled.label`
  display: block;
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const PropertyInput = styled.input`
  width: 100%;
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 5px;
  padding: 0.5rem;
  color: var(--color-text);
  font-family: var(--font-mono);
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-gold);
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
  }
`;

const SimulationPanel = styled.div`
  background: linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(10, 10, 10, 0.8));
  border: 2px solid rgba(212, 175, 55, 0.3);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
`;

const SimulationValue = styled.div`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 1.1rem;
  text-align: center;
  margin: 0.5rem 0;
`;

const PowerIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.isOn ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.2)'};
  box-shadow: ${props => props.isOn ? '0 0 10px rgba(212, 175, 55, 0.5)' : 'none'};
  animation: ${props => props.isOn ? 'pulse 1s ease-in-out infinite' : 'none'};
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

const CircuitBuilder = () => {
  const [components, setComponents] = useState([]);
  const [wires, setWires] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationValues, setSimulationValues] = useState({
    voltage: 0,
    current: 0,
    power: 0,
    resistance: 0
  });
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const componentTypes = [
    { type: 'battery', name: 'Battery', icon: '🔋', defaultValue: '12V' },
    { type: 'resistor', name: 'Resistor', icon: '⚡', defaultValue: '100Ω' },
    { type: 'led', name: 'LED', icon: '💡', defaultValue: '2V' },
    { type: 'switch', name: 'Switch', icon: '🔘', defaultValue: 'OFF' },
    { type: 'capacitor', name: 'Capacitor', icon: '⚡', defaultValue: '100μF' },
    { type: 'voltmeter', name: 'Voltmeter', icon: '📊', defaultValue: '0V' },
    { type: 'ammeter', name: 'Ammeter', icon: '📊', defaultValue: '0A' },
    { type: 'wire', name: 'Wire', icon: '🔗', defaultValue: '0Ω' }
  ];

  const handleDragStart = (e, componentType) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newComponent = {
      id: Date.now(),
      type: componentType.type,
      name: componentType.name,
      icon: componentType.icon,
      value: componentType.defaultValue,
      x: x,
      y: y,
      isSelected: false
    };
    
    setComponents(prev => [...prev, newComponent]);
  };

  const handleComponentClick = (componentId) => {
    setComponents(prev => prev.map(comp => ({
      ...comp,
      isSelected: comp.id === componentId
    })));
    setSelectedComponent(components.find(comp => comp.id === componentId));
  };

  const handleCanvasClick = (e) => {
    if (e.target === canvasRef.current) {
      setSelectedComponent(null);
      setComponents(prev => prev.map(comp => ({ ...comp, isSelected: false })));
    }
  };

  const updateComponentValue = (componentId, newValue) => {
    setComponents(prev => prev.map(comp => 
      comp.id === componentId ? { ...comp, value: newValue } : comp
    ));
  };

  const deleteComponent = (componentId) => {
    setComponents(prev => prev.filter(comp => comp.id !== componentId));
    setWires(prev => prev.filter(wire => 
      wire.from !== componentId && wire.to !== componentId
    ));
    setSelectedComponent(null);
  };

  const clearCanvas = () => {
    setComponents([]);
    setWires([]);
    setSelectedComponent(null);
    setIsSimulating(false);
  };

  const startSimulation = () => {
    setIsSimulating(true);
    // Simulate circuit analysis
    const battery = components.find(comp => comp.type === 'battery');
    const resistors = components.filter(comp => comp.type === 'resistor');
    
    if (battery && resistors.length > 0) {
      const voltage = parseFloat(battery.value) || 12;
      const totalResistance = resistors.reduce((sum, res) => {
        return sum + (parseFloat(res.value) || 100);
      }, 0);
      const current = voltage / totalResistance;
      const power = voltage * current;
      
      setSimulationValues({
        voltage: voltage.toFixed(2),
        current: (current * 1000).toFixed(2), // Convert to mA
        power: power.toFixed(2),
        resistance: totalResistance.toFixed(2)
      });
    }
  };

  const stopSimulation = () => {
    setIsSimulating(false);
    setSimulationValues({
      voltage: 0,
      current: 0,
      power: 0,
      resistance: 0
    });
  };

  return (
    <BuilderContainer>
      <GridBackground />
      <div className="container">
        <Title>Circuit Builder</Title>
        <BuilderDescription>
          Build and simulate electronic circuits with a futuristic interface. 
          Drag components from the palette and connect them to create working circuits.
        </BuilderDescription>
        
        <ControlPanel>
          <ControlButton onClick={startSimulation} disabled={isSimulating}>
            {isSimulating ? 'Simulating...' : 'Start Simulation'}
          </ControlButton>
          <ControlButton onClick={stopSimulation} disabled={!isSimulating}>
            Stop Simulation
          </ControlButton>
          <ControlButton onClick={clearCanvas}>
            Clear Canvas
          </ControlButton>
        </ControlPanel>
        
        <BuilderLayout>
          <ComponentPalette>
            <PaletteTitle>Components</PaletteTitle>
            <ComponentGrid>
              {componentTypes.map((component) => (
                <ComponentItem
                  key={component.type}
                  draggable
                  onDragStart={(e) => handleDragStart(e, component)}
                >
                  <ComponentIcon>{component.icon}</ComponentIcon>
                  <ComponentName>{component.name}</ComponentName>
                </ComponentItem>
              ))}
            </ComponentGrid>
          </ComponentPalette>
          
          <CircuitCanvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const componentType = e.dataTransfer.getData('componentType');
              if (componentType) {
                const rect = canvasRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                // Handle drop logic
              }
            }}
          >
            {components.map((component) => (
              <CircuitComponent
                key={component.id}
                style={{
                  left: component.x,
                  top: component.y,
                }}
                isSelected={component.isSelected}
                onClick={() => handleComponentClick(component.id)}
              >
                <div style={{ fontSize: '1.5rem', textAlign: 'center' }}>
                  {component.icon}
                </div>
                <ComponentValue>{component.value}</ComponentValue>
              </CircuitComponent>
            ))}
            
            {wires.map((wire) => (
              <Wire
                key={wire.id}
                style={{
                  left: wire.x1,
                  top: wire.y1,
                  width: wire.width,
                  transform: `rotate(${wire.angle}deg)`
                }}
              />
            ))}
          </CircuitCanvas>
          
          <PropertiesPanel>
            <PaletteTitle>Properties</PaletteTitle>
            
            {selectedComponent ? (
              <>
                <PropertyGroup>
                  <PropertyLabel>Component Type</PropertyLabel>
                  <div style={{ color: 'var(--color-text)', marginBottom: '1rem' }}>
                    {selectedComponent.name}
                  </div>
                </PropertyGroup>
                
                <PropertyGroup>
                  <PropertyLabel>Value</PropertyLabel>
                  <PropertyInput
                    type="text"
                    value={selectedComponent.value}
                    onChange={(e) => updateComponentValue(selectedComponent.id, e.target.value)}
                  />
                </PropertyGroup>
                
                <ControlButton onClick={() => deleteComponent(selectedComponent.id)}>
                  Delete Component
                </ControlButton>
              </>
            ) : (
              <div style={{ color: 'var(--color-text)', opacity: 0.7 }}>
                Select a component to edit its properties
              </div>
            )}
            
            <SimulationPanel>
              <PaletteTitle>Simulation Results</PaletteTitle>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <PowerIndicator isOn={isSimulating} />
                <span style={{ color: 'var(--color-text)' }}>
                  {isSimulating ? 'Simulation Active' : 'Simulation Inactive'}
                </span>
              </div>
              
              <SimulationValue>Voltage: {simulationValues.voltage}V</SimulationValue>
              <SimulationValue>Current: {simulationValues.current}mA</SimulationValue>
              <SimulationValue>Power: {simulationValues.power}W</SimulationValue>
              <SimulationValue>Resistance: {simulationValues.resistance}Ω</SimulationValue>
            </SimulationPanel>
          </PropertiesPanel>
        </BuilderLayout>
      </div>
    </BuilderContainer>
  );
};

export default CircuitBuilder;