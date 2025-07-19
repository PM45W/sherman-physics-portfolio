import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(212, 175, 55, 0.3);
  border-top: 3px solid var(--color-accent-gold);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  font-family: var(--font-mono);
  color: var(--color-accent-gold);
  font-size: 0.9rem;
  text-align: center;
`;

const LazyLoader = ({ children, fallback = null }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
      <LoaderContainer>
        <LoadingText>Error loading component</LoadingText>
      </LoaderContainer>
    );
  }

  if (isLoading) {
    return fallback || (
      <LoaderContainer>
        <Spinner />
        <LoadingText>Loading quantum components...</LoadingText>
      </LoaderContainer>
    );
  }

  return children;
};

export default LazyLoader; 