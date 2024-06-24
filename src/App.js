// import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import { setupInterceptors } from './api/axiosInstance';
import SomeComponent from './components/SomeComponent';
import { Alert, AlertTitle, Container } from '@mui/material';

const App = () => {
  const [error, setError] = useState('');

  useEffect(() => {
    setupInterceptors(setError);
  }, []);

  return (
    <Container>
      {error && (
        
        <Alert severity="error" onClose={() => setError('')}>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      <SomeComponent setError={setError} />
    </Container>
  );
};

export default App;