import React from 'react';
import Header from '../../components/Header/Header';

const HomePage = () => {
  return (
    <div>
      <Header onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } userName={''}/>
      This is home page
    </div>
  );
};

export default HomePage;