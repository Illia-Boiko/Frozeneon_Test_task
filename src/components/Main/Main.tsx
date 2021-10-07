import React from 'react';
import { Route } from 'react-router-dom';
import { Bank } from '../Bank';
import { ComingSoon } from '../ComingSoon';
import { MonsterBoxes } from '../MonsterBoxes';
import { Navigation } from '../Navigation';

export const Main: React.FC = () => {
  return (
    <main className="Main">
      <div className="Main__content">
        <Navigation />
        <Route path="/" exact>
          <MonsterBoxes />
        </Route>
        <Route path="/bank" exact>
          <Bank />
        </Route>
        <Route path="/sets" exact>
          <ComingSoon info="Наборы" />
        </Route>
        <Route path="/special" exact>
          <ComingSoon info="Спецпредложения" />
        </Route>
        <Route path="/promoCodes" exact>
          <ComingSoon info="Промокоды" />
        </Route>
      </div>
    </main>
  );
};
