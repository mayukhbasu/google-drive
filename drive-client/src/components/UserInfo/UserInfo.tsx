import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/userActions';

import './UserInfo.css';
import { RootState } from '../../reducers';

const UserInfo: React.FC = () => {
  const {loading,userInfo, error} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo() as any)
  }, [dispatch]);

  if (loading) {
    return <div>Loading your information...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
    {userInfo && (
      <div className='welcome-message'>
        Welcome, <span className="username">{userInfo.name}</span>
        {/* Render additional user info here */}
      </div>
    )}
  </div>
  );
};

export default UserInfo;