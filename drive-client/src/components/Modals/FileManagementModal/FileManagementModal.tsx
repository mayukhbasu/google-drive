import React, { useEffect, useRef } from 'react';
import './FileManagementModal.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleFileUpload: (fileName: File) => void
}

const FileManagementModal: React.FC<ModalProps> = ({isOpen, onClose, handleFileUpload}) => {
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if(!files) return;
    const fileName = files[0].name;
    console.log(fileName);
    handleFileUpload(files[0])
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
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
                    <button onClick={handleFileUploadClick}>Upload New File</button>
                    <button onClick={() => console.log('Upload New Folder')}>Upload New Folder</button>
                </div>
                <input 
                    type="file" 
                    style={{ display: 'none' }} 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                />
            </div>
        </div>
  );
};

export default FileManagementModal;