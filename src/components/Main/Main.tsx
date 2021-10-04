import React from 'react';
import { CardsBox } from '../CardsBox';
import { Navigation } from '../Navigation';

export const Main: React.FC = () => {
  return (
    <main className="Main">
      <div className="Main__content content">
        <Navigation />
        <CardsBox />
      </div>
    </main>
  );
};
