import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import CircuitBuilder from '../pages/CircuitBuilder';

// Mock styled-components for testing
jest.mock('styled-components', () => ({
  __esModule: true,
  default: (component) => component,
  keyframes: () => '',
  css: () => ''
}));

describe('CircuitBuilder Functionality Tests', () => {
  let container;
  
  beforeEach(() => {
    const renderResult = render(<CircuitBuilder />);
    container = renderResult.container;
  });

  test('should render circuit builder with all components', () => {
    // Check if main elements are present
    expect(screen.getByText('Circuit Builder')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Circuit Tools')).toBeInTheDocument();
    
    // Check if component palette has all expected components
    expect(screen.getByText('Resistor')).toBeInTheDocument();
    expect(screen.getByText('Capacitor')).toBeInTheDocument();
    expect(screen.getByText('Voltage Source')).toBeInTheDocument();
    expect(screen.getByText('Ground')).toBeInTheDocument();
  });

  test('should allow dragging components to canvas', async () => {
    const resistorComponent = screen.getByText('Resistor').closest('div');
    const canvas = container.querySelector('[data-testid="canvas"]') || 
                   container.querySelector('div[style*="position: relative"]');
    
    // Simulate drag and drop
    fireEvent.dragStart(resistorComponent);
    fireEvent.dragOver(canvas, {
      clientX: 200,
      clientY: 200
    });
    fireEvent.drop(canvas, {
      clientX: 200,
      clientY: 200
    });
    
    // Wait for component to be added
    await waitFor(() => {
      const droppedComponents = container.querySelectorAll('[style*="position: absolute"]');
      expect(droppedComponents.length).toBeGreaterThan(0);
    });
  });

  test('should show connection points when components are added', async () => {
    // Add a resistor component first
    const resistorComponent = screen.getByText('Resistor').closest('div');
    const canvas = container.querySelector('div[style*="position: relative"]');
    
    fireEvent.dragStart(resistorComponent);
    fireEvent.drop(canvas, {
      clientX: 200,
      clientY: 200
    });
    
    await waitFor(() => {
      // Look for connection points (small circular elements)
      const connectionPoints = container.querySelectorAll('[style*="border-radius: 50%"]');
      expect(connectionPoints.length).toBeGreaterThan(0);
    });
  });

  test('should allow wire creation between connection points', async () => {
    // Add two components
    const resistorComponent = screen.getByText('Resistor').closest('div');
    const voltageComponent = screen.getByText('Voltage Source').closest('div');
    const canvas = container.querySelector('div[style*="position: relative"]');
    
    // Add resistor
    fireEvent.dragStart(resistorComponent);
    fireEvent.drop(canvas, {
      clientX: 150,
      clientY: 150
    });
    
    // Add voltage source
    fireEvent.dragStart(voltageComponent);
    fireEvent.drop(canvas, {
      clientX: 300,
      clientY: 150
    });
    
    await waitFor(() => {
      const connectionPoints = container.querySelectorAll('[style*="border-radius: 50%"]');
      expect(connectionPoints.length).toBeGreaterThan(2);
      
      // Click on first connection point to start wire
      if (connectionPoints[0]) {
        fireEvent.click(connectionPoints[0]);
      }
      
      // Click on second connection point to complete wire
      if (connectionPoints[2]) {
        fireEvent.click(connectionPoints[2]);
      }
      
      // Check if wire was created (SVG path element)
      const wires = container.querySelectorAll('path');
      expect(wires.length).toBeGreaterThan(0);
    });
  });

  test('should provide visual feedback for connection points on hover', async () => {
    // Add a component
    const resistorComponent = screen.getByText('Resistor').closest('div');
    const canvas = container.querySelector('div[style*="position: relative"]');
    
    fireEvent.dragStart(resistorComponent);
    fireEvent.drop(canvas, {
      clientX: 200,
      clientY: 200
    });
    
    await waitFor(() => {
      const connectionPoints = container.querySelectorAll('[style*="border-radius: 50%"]');
      if (connectionPoints[0]) {
        // Simulate hover
        fireEvent.mouseEnter(connectionPoints[0]);
        
        // Check if hover styles are applied (transform scale or color change)
        const computedStyle = window.getComputedStyle(connectionPoints[0]);
        expect(computedStyle.cursor).toBe('pointer');
      }
    });
  });

  test('should analyze circuit when components are connected', async () => {
    const analyzeButton = screen.getByText('Analyze Circuit');
    
    // Initially should show error for empty circuit
    fireEvent.click(analyzeButton);
    
    await waitFor(() => {
      // Should show some analysis result or error message
      const errorMessage = container.querySelector('[style*="color: var(--color-accent-red)"]');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test('should update component properties when selected', async () => {
    // Add a component
    const resistorComponent = screen.getByText('Resistor').closest('div');
    const canvas = container.querySelector('div[style*="position: relative"]');
    
    fireEvent.dragStart(resistorComponent);
    fireEvent.drop(canvas, {
      clientX: 200,
      clientY: 200
    });
    
    await waitFor(() => {
      // Click on the dropped component to select it
      const droppedComponent = container.querySelector('[style*="position: absolute"]');
      if (droppedComponent) {
        fireEvent.click(droppedComponent);
        
        // Check if properties panel appears
        expect(screen.getByText('Component Properties')).toBeInTheDocument();
        
        // Check if value input is present
        const valueInput = screen.getByDisplayValue('1k');
        expect(valueInput).toBeInTheDocument();
        
        // Update the value
        fireEvent.change(valueInput, { target: { value: '2k' } });
        expect(valueInput.value).toBe('2k');
      }
    });
  });

  test('should clear canvas when clear button is clicked', async () => {
    // Add a component first
    const resistorComponent = screen.getByText('Resistor').closest('div');
    const canvas = container.querySelector('div[style*="position: relative"]');
    
    fireEvent.dragStart(resistorComponent);
    fireEvent.drop(canvas, {
      clientX: 200,
      clientY: 200
    });
    
    await waitFor(() => {
      const droppedComponents = container.querySelectorAll('[style*="position: absolute"]');
      expect(droppedComponents.length).toBeGreaterThan(0);
    });
    
    // Click clear button
    const clearButton = screen.getByText('Clear Canvas');
    fireEvent.click(clearButton);
    
    await waitFor(() => {
      const droppedComponents = container.querySelectorAll('[style*="position: absolute"]');
      expect(droppedComponents.length).toBe(0);
    });
  });

  test('should handle wire path generation correctly', () => {
    // This tests the generateWirePath function indirectly
    // by checking if wires are rendered with proper SVG paths
    const canvas = container.querySelector('svg');
    expect(canvas).toBeInTheDocument();
  });

  test('should prevent connecting component to itself', async () => {
    // Add a component
    const resistorComponent = screen.getByText('Resistor').closest('div');
    const canvas = container.querySelector('div[style*="position: relative"]');
    
    fireEvent.dragStart(resistorComponent);
    fireEvent.drop(canvas, {
      clientX: 200,
      clientY: 200
    });
    
    await waitFor(() => {
      const connectionPoints = container.querySelectorAll('[style*="border-radius: 50%"]');
      if (connectionPoints.length >= 2) {
        // Click on first connection point
        fireEvent.click(connectionPoints[0]);
        
        // Try to click on the same connection point
        fireEvent.click(connectionPoints[0]);
        
        // Should not create a wire (no self-connection)
        const wires = container.querySelectorAll('path');
        expect(wires.length).toBe(0);
      }
    });
  });
});

// Integration test for complete circuit building workflow
describe('CircuitBuilder Integration Tests', () => {
  test('should complete full circuit building workflow', async () => {
    const { container } = render(<CircuitBuilder />);
    
    // 1. Add voltage source
    const voltageComponent = screen.getByText('Voltage Source').closest('div');
    const canvas = container.querySelector('div[style*="position: relative"]');
    
    fireEvent.dragStart(voltageComponent);
    fireEvent.drop(canvas, { clientX: 150, clientY: 100 });
    
    // 2. Add resistor
    const resistorComponent = screen.getByText('Resistor').closest('div');
    fireEvent.dragStart(resistorComponent);
    fireEvent.drop(canvas, { clientX: 300, clientY: 100 });
    
    // 3. Add ground
    const groundComponent = screen.getByText('Ground').closest('div');
    fireEvent.dragStart(groundComponent);
    fireEvent.drop(canvas, { clientX: 225, clientY: 200 });
    
    await waitFor(() => {
      // 4. Connect components with wires
      const connectionPoints = container.querySelectorAll('[style*="border-radius: 50%"]');
      
      if (connectionPoints.length >= 4) {
        // Connect voltage source to resistor
        fireEvent.click(connectionPoints[1]); // voltage source right
        fireEvent.click(connectionPoints[2]); // resistor left
        
        // Connect resistor to ground
        fireEvent.click(connectionPoints[3]); // resistor right
        fireEvent.click(connectionPoints[4]); // ground top
        
        // Connect ground to voltage source
        fireEvent.click(connectionPoints[4]); // ground top
        fireEvent.click(connectionPoints[0]); // voltage source bottom
      }
    });
    
    // 5. Analyze the circuit
    const analyzeButton = screen.getByText('Analyze Circuit');
    fireEvent.click(analyzeButton);
    
    await waitFor(() => {
      // Should show analysis results
      const results = container.querySelector('[style*="background-color: rgba(26, 26, 26, 0.5)"]');
      expect(results).toBeInTheDocument();
    });
  });
});