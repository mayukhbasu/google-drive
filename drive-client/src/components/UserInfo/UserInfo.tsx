import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserInfoState } from '../../types/UserTypes';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../actions/userActions';

import './UserInfo.css';

const UserInfo: React.FC = () => {
  const {loading,userInfo, error} = useSelector((state: UserInfoState) => state);
  console.log(userInfo)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo() as any)
  }, [dispatch])
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