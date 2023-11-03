import React from 'react';

const LoginPage = () => {
  const handleLogin = () => {
    // Redirect to your backend endpoint that starts the Google auth flow
    window.location.href = 'http://localhost:5000/auth/google';
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;