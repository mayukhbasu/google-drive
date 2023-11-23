import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/logoutActions';
import CreateButton from '../../components/Buttons/CreateButton/CreateButton';
import FileManagementModal from '../../components/Modals/FileManagementModal/FileManagementModal';
import { fileUploadToGCS } from '../../actions/fileActions';
import Toaster from '../../components/Toastr/Toaster';
import { FileUploadFailureResponse, FileUploadSuccessResponse } from '../../types/fileActionTypes';

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toaster, setToaster] = useState({show: false, message: ''})

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser() as any)
  }

  const handleFileUpload = (file: File) => {
    dispatch(fileUploadToGCS(file) as any).then((response: FileUploadSuccessResponse) => {
      if(response.message) {
        setToaster({ show: true, message: 'File uploaded successfully!' });
      }
    }).catch((error: FileUploadFailureResponse) => {
      setToaster({ show: true, message: 'Upload failed!' });
    }) 
    
  };

  const closeToaster = () => {
    setToaster({show: false, message: ''})
  }
  return (
    <div>
      <Header onLogout={handleLogout}/>
      <FileManagementModal handleFileUpload={handleFileUpload} isOpen={isModalOpen} onClose={toggleModal}/>
      <CreateButton onClick={toggleModal}/>
      <Toaster message={toaster.message} onClose={closeToaster} show={toaster.show}/>
    </div>
  );
};

export default HomePage;