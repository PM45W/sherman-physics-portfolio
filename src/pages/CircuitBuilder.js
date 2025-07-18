import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
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

const FlowContainer = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  height: 70vh;
  
  @media (max-width: 1024px) {
    height: 50vh;
  }
  
  .react-flow__node {
    background-color: rgba(26, 26, 26, 0.9);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 1rem;
    min-width: 120px;
    text-align: center;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: var(--color-accent-gold);
      transform: translateY(-2px);
    }
    
    &.selected {
      border-color: var(--color-accent-gold);
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }
  }
  
  .react-flow__handle {
    width: 12px;
    height: 12px;
    background-color: var(--color-accent-gold);
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    
    &:hover {
      background-color: var(--color-accent-red);
      transform: scale(1.2);
    }
  }
  
  .react-flow__edge-path {
    stroke: var(--color-accent-gold);
    stroke-width: 3;
    stroke-dasharray: none;
  }
  
  .react-flow__edge.selected .react-flow__edge-path {
    stroke: var(--color-accent-red);
    stroke-width: 4;
  }
  
  .react-flow__controls {
    background-color: rgba(10, 10, 10, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
  
  .react-flow__controls-button {
    background-color: rgba(26, 26, 26, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--color-text);
    
    &:hover {
      background-color: var(--color-accent-gold);
      color: var(--color-bg);
    }
  }
  
  .react-flow__minimap {
    background-color: rgba(10, 10, 10, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
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
  color: var(--color-text);
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
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${props => props.secondary ? 'transparent' : 'var(--color-accent-gold)'};
  border: 1px solid var(--color-accent-gold);
  color: ${props => props.secondary ? 'var(--color-accent-gold)' : 'var(--color-bg)'};
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  
  &:hover {
    background-color: ${props => props.secondary ? 'var(--color-accent-gold)' : 'var(--color-accent-red)'};
    color: var(--color-bg);
    border-color: ${props => props.secondary ? 'var(--color-accent-gold)' : 'var(--color-accent-red)'};
  }
`;

const ResultsPanel = styled.div`
  background-color: rgba(26, 26, 26, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1rem;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
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
  padding: 1rem;
`;

const InstructionItem = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
`;

const InstructionNumber = styled.span`
  color: var(--color-accent-gold);
  margin-right: 0.5rem;
  font-weight: bold;
`;

const InstructionText = styled.span`
  color: var(--color-text);
`;

// Custom node component for circuit components
const CircuitNode = ({ data, selected }) => {
  return (
    <div className={`circuit-node ${selected ? 'selected' : ''}`}>
      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{data.icon}</div>
      <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '0.3rem' }}>
        {data.symbol}
      </div>
      <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>
        {data.value}
      </div>
    </div>
  );
};

// Component types with their properties
const componentTypes = [
  {
    id: 'resistor',
    name: 'Resistor',
    icon: '⚡',
    symbol: 'R',
    value: '1kΩ',
    type: 'resistor',
    resistance: 1000
  },
  {
    id: 'capacitor',
    name: 'Capacitor',
    icon: '⚡',
    symbol: 'C',
    value: '1μF',
    type: 'capacitor',
    capacitance: 0.000001
  },
  {
    id: 'inductor',
    name: 'Inductor',
    icon: '⚡',
    symbol: 'L',
    value: '1mH',
    type: 'inductor',
    inductance: 0.001
  },
  {
    id: 'voltage-source',
    name: 'Voltage Source',
    icon: '🔋',
    symbol: 'V',
    value: '5V',
    type: 'voltage-source',
    voltage: 5
  },
  {
    id: 'current-source',
    name: 'Current Source',
    icon: '⚡',
    symbol: 'I',
    value: '1A',
    type: 'current-source',
    current: 1
  },
  {
    id: 'led',
    name: 'LED',
    icon: '💡',
    symbol: 'LED',
    value: 'Red',
    type: 'led',
    forwardVoltage: 2
  }
];

const nodeTypes = {
  circuit: CircuitNode,
};

function CircuitBuilderContent() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const { project } = useReactFlow();

  // Handle edge connections
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  // Handle node selection
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
  }, []);

  // Handle node deselection
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  // Add component to canvas
  const onDragStart = (event, componentType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(componentType));
    event.dataTransfer.effectAllowed = 'move';
  };

  // Handle drop on canvas
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const componentType = JSON.parse(event.dataTransfer.getData('application/reactflow'));
      const position = project({ x: event.clientX, y: event.clientY });

      const newNode = {
        id: `${componentType.id}-${Date.now()}`,
        type: 'circuit',
        position,
        data: { ...componentType },
        sourcePosition: 'right',
        targetPosition: 'left',
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [project, setNodes]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  // Update node data
  const updateNodeData = (nodeId, newData) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: { ...node.data, ...newData },
          };
        }
        return node;
      })
    );
  };

  // Clear canvas
  const clearCanvas = () => {
    setNodes([]);
    setEdges([]);
    setSelectedNode(null);
    setAnalysis(null);
  };

  // Analyze circuit
  const analyzeCircuit = () => {
    if (nodes.length === 0) {
      setAnalysis({ error: 'No components on canvas' });
      return;
    }

    try {
      // Simple circuit analysis - find voltage sources and calculate basic properties
      const voltageSources = nodes.filter(node => node.data.type === 'voltage-source');
      const resistors = nodes.filter(node => node.data.type === 'resistor');
      
      if (voltageSources.length === 0) {
        setAnalysis({ error: 'No voltage source found in circuit' });
        return;
      }

      const totalVoltage = voltageSources.reduce((sum, source) => sum + (source.data.voltage || 0), 0);
      const totalResistance = resistors.reduce((sum, resistor) => sum + (resistor.data.resistance || 0), 0);
      
      if (totalResistance === 0) {
        setAnalysis({ error: 'No resistors found in circuit' });
        return;
      }

      const current = (totalVoltage / totalResistance) * 1000; // Convert to mA
      const power = (totalVoltage * totalVoltage / totalResistance) * 1000; // Convert to mW

      setAnalysis({
        totalResistance: totalResistance.toFixed(2),
        current: current.toFixed(2),
        power: power.toFixed(2),
        voltage: totalVoltage.toFixed(2),
      });
    } catch (error) {
      setAnalysis({ error: 'Error analyzing circuit: ' + error.message });
    }
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
                onDragStart={(event) => onDragStart(event, component)}
              >
                <ComponentIcon>{component.icon}</ComponentIcon>
                <ComponentName>{component.name}</ComponentName>
              </ComponentItem>
            ))}
          </ComponentPalette>

          <FlowContainer>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onNodeClick}
              onPaneClick={onPaneClick}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
              fitView
              attributionPosition="bottom-left"
            >
              <Background />
              <Controls />
              <MiniMap />
            </ReactFlow>
          </FlowContainer>

          <PropertiesPanel>
            <PropertyTitle>Circuit Tools</PropertyTitle>
            
            <ActionButton onClick={analyzeCircuit}>
              Analyze Circuit
            </ActionButton>
            
            <ActionButton onClick={clearCanvas} secondary>
              Clear Canvas
            </ActionButton>

            {selectedNode && (
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
                    {selectedNode.data.name}
                  </div>
                </PropertyItem>

                <PropertyItem>
                  <PropertyLabel>Value</PropertyLabel>
                  <PropertyInput
                    type="text"
                    value={selectedNode.data.value}
                    onChange={(e) => updateNodeData(selectedNode.id, { value: e.target.value })}
                    placeholder="Enter value (e.g., 1k, 5V, 1μF)"
                  />
                </PropertyItem>

                {selectedNode.data.type === 'voltage-source' && (
                  <PropertyItem>
                    <PropertyLabel>Voltage (V)</PropertyLabel>
                    <PropertyInput
                      type="number"
                      value={selectedNode.data.voltage || 0}
                      onChange={(e) => updateNodeData(selectedNode.id, { voltage: parseFloat(e.target.value) || 0 })}
                      step="0.1"
                    />
                  </PropertyItem>
                )}

                {selectedNode.data.type === 'resistor' && (
                  <PropertyItem>
                    <PropertyLabel>Resistance (Ω)</PropertyLabel>
                    <PropertyInput
                      type="number"
                      value={selectedNode.data.resistance || 0}
                      onChange={(e) => updateNodeData(selectedNode.id, { resistance: parseFloat(e.target.value) || 0 })}
                      step="1"
                    />
                  </PropertyItem>
                )}

                {selectedNode.data.type === 'capacitor' && (
                  <PropertyItem>
                    <PropertyLabel>Capacitance (F)</PropertyLabel>
                    <PropertyInput
                      type="number"
                      value={selectedNode.data.capacitance || 0}
                      onChange={(e) => updateNodeData(selectedNode.id, { capacitance: parseFloat(e.target.value) || 0 })}
                      step="0.000001"
                    />
                  </PropertyItem>
                )}

                {selectedNode.data.type === 'inductor' && (
                  <PropertyItem>
                    <PropertyLabel>Inductance (H)</PropertyLabel>
                    <PropertyInput
                      type="number"
                      value={selectedNode.data.inductance || 0}
                      onChange={(e) => updateNodeData(selectedNode.id, { inductance: parseFloat(e.target.value) || 0 })}
                      step="0.001"
                    />
                  </PropertyItem>
                )}
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
                  <InstructionText>Connect components by dragging from one handle to another</InstructionText>
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

function CircuitBuilder() {
  return (
    <ReactFlowProvider>
      <CircuitBuilderContent />
    </ReactFlowProvider>
  );
}

export default CircuitBuilder;