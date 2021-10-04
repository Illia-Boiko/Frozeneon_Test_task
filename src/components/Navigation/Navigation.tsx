import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <NavLink
            to="/"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Монстр Бокси
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
            to="/other"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Наборы
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to="/other"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Спецпредложения
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to="/other"
            className="Navigation__link"
            activeClassName="Navigation__link--active"
            exact
          >
            Промокоды
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
