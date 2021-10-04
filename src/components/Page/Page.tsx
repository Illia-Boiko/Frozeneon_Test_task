import React from 'react';
import { Header } from '../Header';
import { Main } from '../Main';

export const Page: React.FC = () => {
  return (
    <div className="Page">
      <Header />
      <Main />
    </div>
  );
};
