import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: var(--color-text);
  text-align: center;
`;

const ErrorTitle = styled.h1`
  font-family: var(--font-mono);
  color: var(--color-accent-red);
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
`;

const ErrorMessage = styled.p`
  font-family: var(--font-mono);
  color: var(--color-text);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

const ErrorDetails = styled.pre`
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 5px;
  padding: 1rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--color-accent-red);
  overflow-x: auto;
  max-width: 100%;
  margin-bottom: 2rem;
`;

const ReloadButton = styled.button`
  background: linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(10, 10, 10, 0.8));
  border: 2px solid var(--color-accent-red);
  color: var(--color-accent-red);
  padding: 1rem 2rem;
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-accent-red);
    color: var(--color-bg);
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console for debugging
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Quantum Error Detected</ErrorTitle>
          <ErrorMessage>
            Something unexpected happened in the quantum realm. 
            The wavefunction has collapsed, but we can recover from this superposition of errors.
          </ErrorMessage>
          
          {this.state.error && (
            <ErrorDetails>
              {this.state.error.toString()}
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </ErrorDetails>
          )}
          
          <ReloadButton onClick={this.handleReload}>
            Reload Quantum State
          </ReloadButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 