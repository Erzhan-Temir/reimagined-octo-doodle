import React from 'react';
import './loading-stub.css';

const LoadingStub = (): JSX.Element => {
  return (
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
};

export default LoadingStub;
