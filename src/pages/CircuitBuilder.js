import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';

const BuilderContainer = styled.main`
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

const BuilderDescription = styled.p`
  max-width: 800px;
  margin-bottom: 3rem;
  opacity: 0.8;
  font-size: 1.1rem;
`;

const BuilderLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  gap: 2rem;
  height: 70vh;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
    gap: 1.5rem;
  }
`;

const ComponentPalette = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  overflow-y: auto;
  
  @media (max-width: 1024px) {
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    overflow-x: auto;
  }
`;

const Canvas = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  
  @media (max-width: 1024px) {
    min-height: 50vh;
  }
`;

const PropertiesPanel = styled.div`
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  overflow-y: auto;
`;

const PaletteTitle = styled.h3`
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
  
  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

const ComponentItem = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: grab;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    border-color: var(--color-accent-gold);
    transform: translateY(-2px);
  }
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 1024px) {
    margin-bottom: 0;
    min-width: 100px;
  }
`;

const ComponentIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ComponentName = styled.div`
  font-family: var(--font-mono);
  font-size: 0.8rem;
`;

const DroppedComponent = styled.div`
  position: absolute;
  background-color: rgba(26, 26, 26, 0.8);
  border: 2px solid ${props => props.selected ? 'var(--color-accent-gold)' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 5px;
  padding: 1rem;
  cursor: move;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 80px;
  z-index: 2;
  
  &:hover {
    border-color: var(--color-accent-gold);
  }
`;

const ConnectionPoint = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? 'var(--color-accent-red)' : 'var(--color-accent-gold)'};
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;
  transition: all 0.2s ease;
  box-shadow: 0 0 ${props => props.active ? '8px' : '0'} ${props => props.active ? 'var(--color-accent-red)' : 'transparent'};
  
  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0 8px var(--color-accent-gold);
    background-color: var(--color-accent-gold);
  }
`;

const Wire = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const WirePath = styled.path`
  stroke: var(--color-accent-gold);
  stroke-width: 2;
  fill: none;
  stroke-dasharray: ${props => props.dashed ? '5,5' : 'none'};
`;

const CanvasGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
`;

const PropertyGroup = styled.div`
  margin-bottom: 2rem;
`;

const PropertyTitle = styled.h4`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  margin-bottom: 1rem;
  font-size: 1rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--color-accent-gold);
  }
`;

const PropertyItem = styled.div`
  margin-bottom: 1rem;
`;

const PropertyLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`;

const PropertyInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-gold);
  }
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: transparent;
  border: 1px solid ${props => props.secondary ? 'var(--color-accent-red)' : 'var(--color-accent-gold)'};
  color: ${props => props.secondary ? 'var(--color-accent-red)' : 'var(--color-accent-gold)'};
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background-color: ${props => props.secondary ? 'rgba(255, 0, 0, 0.1)' : 'rgba(212, 175, 55, 0.1)'};
  }
`;

const ResultsPanel = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`;

const ResultLabel = styled.span`
  color: var(--color-text);
`;

const ResultValue = styled.span`
  color: var(--color-accent-gold);
  font-weight: bold;
`;

const InstructionsPanel = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const InstructionItem = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
`;

const InstructionNumber = styled.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
  font-family: var(--font-mono);
`;

const InstructionText = styled.span`
  color: var(--color-text);
  opacity: 0.8;
`;

function CircuitBuilder() {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [draggedComponent, setDraggedComponent] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [wires, setWires] = useState([]);
  const [wireStart, setWireStart] = useState(null);
  const [tempWire, setTempWire] = useState(null);

  const canvasRef = useRef(null);

  const componentTypes = useMemo(() => [
    { id: 'resistor', name: 'Resistor', icon: '🔲', symbol: 'R', defaultValue: '1k', connectionPoints: ['left', 'right'] },
    { id: 'capacitor', name: 'Capacitor', icon: '⚡', symbol: 'C', defaultValue: '1μF', connectionPoints: ['left', 'right'] },
    { id: 'inductor', name: 'Inductor', icon: '🌀', symbol: 'L', defaultValue: '1mH', connectionPoints: ['left', 'right'] },
    { id: 'voltage', name: 'Voltage Source', icon: '🔋', symbol: 'V', defaultValue: '5V', connectionPoints: ['top', 'bottom'] },
    { id: 'current', name: 'Current Source', icon: '⚡', symbol: 'I', defaultValue: '1mA', connectionPoints: ['top', 'bottom'] },
    { id: 'ground', name: 'Ground', icon: '⏚', symbol: 'GND', defaultValue: '0V', connectionPoints: ['top'] },
    { id: 'mosfet', name: 'MOSFET', icon: '🔌', symbol: 'M', defaultValue: 'N-CH', connectionPoints: ['left', 'right', 'bottom'] },
    { id: 'diode', name: 'Diode', icon: '◄►', symbol: 'D', defaultValue: '1N4148', connectionPoints: ['left', 'right'] }
  ], []);

  useEffect(() => {
    const updateCanvasSize = () => {
      if (canvasRef.current) {
        setCanvasSize({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight
        });
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  const handleDragStart = (componentType) => {
    setDraggedComponent(componentType);
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    if (!draggedComponent || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const componentType = componentTypes.find(type => type.id === draggedComponent.id);
    const connectionPoints = componentType ? componentType.connectionPoints : [];

    const newComponent = {
      id: Date.now(),
      type: draggedComponent.id,
      name: draggedComponent.name,
      icon: draggedComponent.icon,
      symbol: draggedComponent.symbol,
      value: draggedComponent.defaultValue,
      x: Math.max(0, Math.min(x - 40, canvasSize.width - 80)),
      y: Math.max(0, Math.min(y - 40, canvasSize.height - 80)),
      connectionPoints,
      connections: []
    };

    setComponents(prev => [...prev, newComponent]);
    setDraggedComponent(null);
  }, [draggedComponent, canvasSize, componentTypes]);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  const handleComponentMove = (componentId, newX, newY) => {
    setComponents(prev => {
      const updatedComponents = prev.map(comp => 
        comp.id === componentId 
          ? { 
              ...comp, 
              x: Math.max(0, Math.min(newX, canvasSize.width - 80)), 
              y: Math.max(0, Math.min(newY, canvasSize.height - 80)) 
            }
          : comp
      );
      
      // Update wires connected to this component
      const updatedWires = wires.map(wire => {
        if (wire.startComponentId === componentId || wire.endComponentId === componentId) {
          const startComponent = wire.startComponentId === componentId 
            ? updatedComponents.find(c => c.id === componentId)
            : updatedComponents.find(c => c.id === wire.startComponentId);
            
          const endComponent = wire.endComponentId === componentId
            ? updatedComponents.find(c => c.id === componentId)
            : updatedComponents.find(c => c.id === wire.endComponentId);
            
          if (!startComponent || !endComponent) return wire;
          
          const startPoint = getConnectionPointCoordinates(startComponent, wire.startPoint);
          const endPoint = getConnectionPointCoordinates(endComponent, wire.endPoint);
          
          return {
            ...wire,
            startX: startPoint.x,
            startY: startPoint.y,
            endX: endPoint.x,
            endY: endPoint.y
          };
        }
        return wire;
      });
      
      setWires(updatedWires);
      return updatedComponents;
    });
  };

  const updateComponentProperty = (property, value) => {
    if (!selectedComponent) return;
    
    setComponents(prev => prev.map(comp =>
      comp.id === selectedComponent.id
        ? { ...comp, [property]: value }
        : comp
    ));
    
    setSelectedComponent(prev => ({ ...prev, [property]: value }));
  };

  const clearCanvas = () => {
    setComponents([]);
    setSelectedComponent(null);
    setAnalysis(null);
    setWires([]);
    setWireStart(null);
    setTempWire(null);
  };

  const analyzeCircuit = () => {
    // Simple circuit analysis simulation
    const resistors = components.filter(c => c.type === 'resistor');
    const voltages = components.filter(c => c.type === 'voltage');
    
    if (resistors.length === 0 || voltages.length === 0) {
      setAnalysis({ error: 'Circuit needs at least one resistor and one voltage source' });
      return;
    }

    // Check if components are connected
    if (wires.length === 0) {
      setAnalysis({ error: 'Components need to be connected with wires' });
      return;
    }
    
    // Verify connections between voltage source and resistors
    const connectedComponents = new Set();
    
    // Start with voltage sources
    voltages.forEach(voltage => {
      connectedComponents.add(voltage.id);
      
      // Find all connections from this voltage source
      const connections = findConnectedComponents(voltage.id, new Set());
      connections.forEach(id => connectedComponents.add(id));
    });
    
    // Check if all resistors are connected
    const allResistorsConnected = resistors.every(resistor => 
      connectedComponents.has(resistor.id)
    );
    
    if (!allResistorsConnected) {
      setAnalysis({ error: 'Not all resistors are connected to the voltage source' });
      return;
    }

    // Simple series resistance calculation
    const totalResistance = resistors.reduce((sum, r) => {
      const value = parseFloat(r.value.replace(/[^\d.]/g, ''));
      return sum + (isNaN(value) ? 1000 : value);
    }, 0);

    const sourceVoltage = parseFloat(voltages[0].value.replace(/[^\d.]/g, '')) || 5;
    const current = sourceVoltage / totalResistance;
    const power = sourceVoltage * current;

    setAnalysis({
      totalResistance: totalResistance.toFixed(2),
      current: (current * 1000).toFixed(2), // Convert to mA
      power: (power * 1000).toFixed(2), // Convert to mW
      voltage: sourceVoltage.toFixed(2)
    });
  };
  
  // Helper function to find all connected components
  const findConnectedComponents = (componentId, visited) => {
    // Mark this component as visited
    visited.add(componentId);
    
    // Find the component
    const component = components.find(c => c.id === componentId);
    if (!component) return visited;
    
    // Check all connections from this component
    component.connections.forEach(connection => {
      if (!visited.has(connection.connectedTo)) {
        findConnectedComponents(connection.connectedTo, visited);
      }
    });
    
    return visited;
  };

  const getConnectionPointCoordinates = (component, pointType) => {
    if (!component) return { x: 0, y: 0 };
    
    const width = 80; // Component width
    const height = 80; // Component height
    
    switch (pointType) {
      case 'left':
        return { x: component.x, y: component.y + height / 2 };
      case 'right':
        return { x: component.x + width, y: component.y + height / 2 };
      case 'top':
        return { x: component.x + width / 2, y: component.y };
      case 'bottom':
        return { x: component.x + width / 2, y: component.y + height };
      default:
        return { x: component.x + width / 2, y: component.y + height / 2 };
    }
  };

  const handleConnectionPointClick = (component, pointType) => {
    if (!wireStart) {
      // Start a new wire
      const point = getConnectionPointCoordinates(component, pointType);
      setWireStart({
        componentId: component.id,
        point: pointType,
        x: point.x,
        y: point.y
      });
    } else {
      // Complete the wire
      const endPoint = getConnectionPointCoordinates(component, pointType);
      
      // Don't connect to the same point
      if (wireStart.componentId === component.id && wireStart.point === pointType) {
        setWireStart(null);
        setTempWire(null);
        return;
      }
      
      // Create new wire with precise coordinates
      const startComponent = components.find(c => c.id === wireStart.componentId);
      const startCoords = getConnectionPointCoordinates(startComponent, wireStart.point);
      
      const newWire = {
        id: Date.now(),
        startComponentId: wireStart.componentId,
        startPoint: wireStart.point,
        startX: startCoords.x,
        startY: startCoords.y,
        endComponentId: component.id,
        endPoint: pointType,
        endX: endPoint.x,
        endY: endPoint.y
      };
      
      // Update components with connection information
      setComponents(prev => prev.map(comp => {
        if (comp.id === wireStart.componentId) {
          return {
            ...comp,
            connections: [...comp.connections, { 
              wireId: newWire.id, 
              connectedTo: component.id,
              connectionPoint: wireStart.point
            }]
          };
        }
        if (comp.id === component.id) {
          return {
            ...comp,
            connections: [...comp.connections, { 
              wireId: newWire.id, 
              connectedTo: wireStart.componentId,
              connectionPoint: pointType
            }]
          };
        }
        return comp;
      }));
      
      setWires([...wires, newWire]);
      setWireStart(null);
      setTempWire(null);
    }
  };

  const handleCanvasMouseMove = (e) => {
    if (wireStart) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setTempWire({
        startX: wireStart.x,
        startY: wireStart.y,
        endX: x,
        endY: y
      });
    }
  };

  const handleCanvasClick = () => {
    // Cancel wire creation if clicking on empty canvas
    if (wireStart) {
      setWireStart(null);
      setTempWire(null);
    }
  };

  const generateWirePath = (startX, startY, endX, endY) => {
    // Create a curved path for the wire with better control points
    const dx = Math.abs(endX - startX);
    const dy = Math.abs(endY - startY);
    
    // Adjust control points based on distance
    const curveFactor = Math.min(dx, dy) * 0.5 + 30;
    
    // Determine control points based on direction
    let cp1x, cp1y, cp2x, cp2y;
    
    if (dx > dy) {
      // Horizontal dominant direction
      cp1x = startX + curveFactor;
      cp1y = startY;
      cp2x = endX - curveFactor;
      cp2y = endY;
    } else {
      // Vertical dominant direction
      cp1x = startX;
      cp1y = startY + curveFactor;
      cp2x = endX;
      cp2y = endY - curveFactor;
    }
    
    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  };

  return (
    <BuilderContainer>
      <GridBackground />
      <div className="container">
        <Title>Circuit Builder</Title>
        <BuilderDescription>
          Design and analyze electronic circuits with this interactive drag-and-drop tool. 
          Add components, connect them with wires, and simulate circuit behavior in real-time.
        </BuilderDescription>
        
        <BuilderLayout>
          <ComponentPalette>
            <PaletteTitle>Components</PaletteTitle>
            {componentTypes.map((component) => (
              <ComponentItem
                key={component.id}
                draggable
                onDragStart={() => handleDragStart(component)}
              >
                <ComponentIcon>{component.icon}</ComponentIcon>
                <ComponentName>{component.name}</ComponentName>
              </ComponentItem>
            ))}
          </ComponentPalette>

          <Canvas
            ref={canvasRef}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onMouseMove={handleCanvasMouseMove}
            onClick={handleCanvasClick}
          >
            <CanvasGrid />
            
            {/* Wires */}
            <Wire>
              {wires.map(wire => (
                <WirePath
                  key={wire.id}
                  d={generateWirePath(wire.startX, wire.startY, wire.endX, wire.endY)}
                />
              ))}
              
              {tempWire && (
                <WirePath
                  d={generateWirePath(tempWire.startX, tempWire.startY, tempWire.endX, tempWire.endY)}
                  dashed={true}
                />
              )}
            </Wire>
            
            {/* Components */}
            {components.map((component) => (
              <React.Fragment key={component.id}>
                <DroppedComponent
                  style={{ left: component.x, top: component.y }}
                  selected={selectedComponent?.id === component.id}
                  onClick={() => handleComponentClick(component)}
                  draggable
                  onDragEnd={(e) => {
                    const rect = canvasRef.current.getBoundingClientRect();
                    const newX = e.clientX - rect.left - 40;
                    const newY = e.clientY - rect.top - 40;
                    handleComponentMove(component.id, newX, newY);
                  }}
                >
                  <div style={{ fontSize: '1.5rem' }}>{component.icon}</div>
                  <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                    {component.symbol}
                  </div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.8, marginTop: '0.2rem' }}>
                    {component.value}
                  </div>
                </DroppedComponent>
                
                {/* Connection points */}
                {component.connectionPoints.map(point => {
                  const coords = getConnectionPointCoordinates(component, point);
                  const isActive = wireStart && wireStart.componentId === component.id && wireStart.point === point;
                  return (
                    <ConnectionPoint
                      key={`${component.id}-${point}`}
                      active={isActive}
                      style={{
                        left: coords.x - 5,
                        top: coords.y - 5
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleConnectionPointClick(component, point);
                      }}
                    />
                  );
                })}
              </React.Fragment>
            ))}
          </Canvas>

          <PropertiesPanel>
            <PropertyTitle>Circuit Tools</PropertyTitle>
            
            <ActionButton onClick={analyzeCircuit}>
              Analyze Circuit
            </ActionButton>
            
            <ActionButton onClick={clearCanvas} secondary>
              Clear Canvas
            </ActionButton>

            {selectedComponent && (
              <PropertyGroup>
                <PropertyTitle>Component Properties</PropertyTitle>
                
                <PropertyItem>
                  <PropertyLabel>Component Type</PropertyLabel>
                  <div style={{ 
                    padding: '0.8rem', 
                    backgroundColor: 'rgba(26, 26, 26, 0.5)', 
                    borderRadius: '5px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem'
                  }}>
                    {selectedComponent.name}
                  </div>
                </PropertyItem>

                <PropertyItem>
                  <PropertyLabel>Value</PropertyLabel>
                  <PropertyInput
                    type="text"
                    value={selectedComponent.value}
                    onChange={(e) => updateComponentProperty('value', e.target.value)}
                    placeholder="Enter value (e.g., 1k, 5V, 1μF)"
                  />
                </PropertyItem>

                <PropertyItem>
                  <PropertyLabel>Position X</PropertyLabel>
                  <PropertyInput
                    type="number"
                    value={selectedComponent.x}
                    onChange={(e) => updateComponentProperty('x', parseInt(e.target.value))}
                  />
                </PropertyItem>

                <PropertyItem>
                  <PropertyLabel>Position Y</PropertyLabel>
                  <PropertyInput
                    type="number"
                    value={selectedComponent.y}
                    onChange={(e) => updateComponentProperty('y', parseInt(e.target.value))}
                  />
                </PropertyItem>
              </PropertyGroup>
            )}

            {analysis && (
              <PropertyGroup>
                <PropertyTitle>Circuit Analysis</PropertyTitle>
                {analysis.error ? (
                  <div style={{ color: 'var(--color-accent-red)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                    {analysis.error}
                  </div>
                ) : (
                  <ResultsPanel>
                    <ResultItem>
                      <ResultLabel>Total Resistance:</ResultLabel>
                      <ResultValue>{analysis.totalResistance} Ω</ResultValue>
                    </ResultItem>
                    <ResultItem>
                      <ResultLabel>Current:</ResultLabel>
                      <ResultValue>{analysis.current} mA</ResultValue>
                    </ResultItem>
                    <ResultItem>
                      <ResultLabel>Power:</ResultLabel>
                      <ResultValue>{analysis.power} mW</ResultValue>
                    </ResultItem>
                    <ResultItem>
                      <ResultLabel>Source Voltage:</ResultLabel>
                      <ResultValue>{analysis.voltage} V</ResultValue>
                    </ResultItem>
                  </ResultsPanel>
                )}
              </PropertyGroup>
            )}

            <PropertyGroup>
              <PropertyTitle>Instructions</PropertyTitle>
              <InstructionsPanel>
                <InstructionItem>
                  <InstructionNumber>1.</InstructionNumber>
                  <InstructionText>Drag components from the palette to the canvas</InstructionText>
                </InstructionItem>
                <InstructionItem>
                  <InstructionNumber>2.</InstructionNumber>
                  <InstructionText>Click on connection points to create wires</InstructionText>
                </InstructionItem>
                <InstructionItem>
                  <InstructionNumber>3.</InstructionNumber>
                  <InstructionText>Click on components to edit their properties</InstructionText>
                </InstructionItem>
                <InstructionItem>
                  <InstructionNumber>4.</InstructionNumber>
                  <InstructionText>Use "Analyze Circuit" to simulate the circuit</InstructionText>
                </InstructionItem>
              </InstructionsPanel>
            </PropertyGroup>
          </PropertiesPanel>
        </BuilderLayout>
      </div>
    </BuilderContainer>
  );
}

export default CircuitBuilder;