
import React from 'react';
import { CircularProgress } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default LoadingSpinner;
