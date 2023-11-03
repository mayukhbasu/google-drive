// LoginPage.tsx

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Welcome to Drive</h1>
      <button className={styles.googleButton} onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
