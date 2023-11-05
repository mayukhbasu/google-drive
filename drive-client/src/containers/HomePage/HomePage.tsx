import React from 'react';
import Header from '../../components/Header/Header';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/logoutActions';

const HomePage = () => {

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser() as any)
  }
  return (
    <div>
      <Header onLogout={handleLogout}/>
      This is home page
    </div>
  );
};

export default HomePage;