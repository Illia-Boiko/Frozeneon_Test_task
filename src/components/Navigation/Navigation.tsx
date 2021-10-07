import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="Navigation Main__Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <NavLink
            to="/"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Монстр Боксы
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to="/bank"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Банк
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to="/sets"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Наборы
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to="/special"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Спец
            <br className="Navigation__brake" />
            предложения
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to="/promoCodes"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Промо
            <br className="Navigation__brake" />
            коды
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
