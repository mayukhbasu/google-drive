import React from 'react';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/logoutActions';
import CreateButton from '../../components/CreateButton/CreateButton';

const HomePage = () => {

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser() as any)
  }
  return (
    <div>
      <Header onLogout={handleLogout}/>
      <CreateButton/>
    </div>
  );
};

export default HomePage;