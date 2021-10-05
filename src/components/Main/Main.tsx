import React from 'react';
import { Route } from 'react-router-dom';
import { Bank } from '../Bank';
import { MonsterBoxes } from '../MonsterBoxes';
import { Navigation } from '../Navigation';

export const Main: React.FC = () => {
  return (
    <main className="Main">
      <div className="Main__content content">
        <Navigation />
        <Route path="/" exact>
          <MonsterBoxes />
        </Route>
        <Route path="/bank" exact>
          <Bank />
        </Route>
      </div>
    </main>
  );
};
