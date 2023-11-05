import React from 'react';
import styles from './Header.module.css';
import UserInfo from '../UserInfo/UserInfo';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Replace with your logo */}
       
        <h1>Drive</h1>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Search in Drive" />
      </div>
      <div className='userInfo'>
        <UserInfo/>
      </div>
      <div className={styles.userInfo}>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
