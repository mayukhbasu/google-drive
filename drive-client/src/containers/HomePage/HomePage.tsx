import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/logoutActions';
import CreateButton from '../../components/CreateButton/CreateButton';
import FileManagementModal from '../../components/FileManagementModal/FileManagementModal';

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser() as any)
  }
  return (
    <div>
      <Header onLogout={handleLogout}/>
      <FileManagementModal isOpen={isModalOpen} onClose={toggleModal}/>
      <CreateButton onClick={toggleModal}/>
    </div>
  );
};

export default HomePage;