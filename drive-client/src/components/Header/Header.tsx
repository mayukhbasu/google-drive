import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  onLogout: () => void;
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ onLogout, userName }) => {
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
        profile details
      </div>
      <div className={styles.userInfo}>
        <span>{userName}</span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
