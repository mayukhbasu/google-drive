import React, { useEffect } from 'react';
import './Toaster.css'

interface ToasterProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Toaster: React.FC<ToasterProps> = ({message, show, onClose}) => {
  useEffect(() => {
    if(show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer)
    }
  }, [show, onClose])
  if(!show) return null;
  return (
    <div className={`toaster ${show ? 'show': ''}`} role="alert" aria-live="assertive" aria-atomic="true">
      <div className='toaster-message'>
        {message}
      </div>
      
      <button onClick={onClose} className='toaster-close-button' aria-label="Close">
        X
      </button>
    </div>
  );
};

export default Toaster;