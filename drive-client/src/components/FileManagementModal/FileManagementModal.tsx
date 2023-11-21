import React, { useEffect } from 'react';
import './FileManagementModal.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FileManagementModal: React.FC<ModalProps> = ({isOpen, onClose}) => {
  
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      console.log(isOpen);
      const target = event.target as HTMLElement;
      if(target.classList.contains('modal-backdrop')) {
        onClose();
      }
    };
    if(isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    }
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button">X</button>
                <div className="modal-options">
                    <button onClick={() => console.log('Create New Folder')}>New Folder</button>
                    <button onClick={() => console.log('Upload New File')}>Upload New File</button>
                    <button onClick={() => console.log('Upload New Folder')}>Upload New Folder</button>
                </div>
            </div>
        </div>
  );
};

export default FileManagementModal;