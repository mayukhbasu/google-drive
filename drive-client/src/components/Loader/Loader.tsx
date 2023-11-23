import React from 'react';
import './Loader.css';

const Loader: React.FC<{loading: boolean}> = ({loading}) => {
  if(!loading) return null;
  return (
    <div>
      <div className="loading-backdrop">
        <div className="loading-spinner"></div>
    </div>
    </div>
  );
};

export default Loader;