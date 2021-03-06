import React from 'react';
import './error-boundary.css';

const ErrorBoundary = (): JSX.Element => {
  return (
    <div className="error-boundary">
      <p>Sorry, something went wrong, please reload the page...</p>
    </div>
  );
};

export default ErrorBoundary;
