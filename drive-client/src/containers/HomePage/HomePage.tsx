import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/logoutActions';
import CreateButton from '../../components/Buttons/CreateButton/CreateButton';
import FileManagementModal from '../../components/Modals/FileManagementModal/FileManagementModal';
import { fileUploadToGCS } from '../../actions/fileActions';

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser() as any)
  }

  const handleFileUpload = (file: File) => {
    dispatch(fileUploadToGCS(file) as any)
  }
  return (
    <div>
      <Header onLogout={handleLogout}/>
      <FileManagementModal handleFileUpload={handleFileUpload} isOpen={isModalOpen} onClose={toggleModal}/>
      <CreateButton onClick={toggleModal}/>
    </div>
  );
};

export default HomePage;