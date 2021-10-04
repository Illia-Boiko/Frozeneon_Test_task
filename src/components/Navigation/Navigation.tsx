import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <a href="/monster-boxes" className="Navigation__link">
            Монстр Бокси
          </a>
        </li>
        <li className="Navigation__list-item">
          <a href="/bank" className="Navigation__link Navigation__link--active">
            Банк
          </a>
        </li>
        <li className="Navigation__list-item">
          <a href="/" className="Navigation__link">
            Наборы
          </a>
        </li>
        <li className="Navigation__list-item">
          <a href="/" className="Navigation__link">
            Спецпредложения
          </a>
        </li>
        <li className="Navigation__list-item">
          <a href="/" className="Navigation__link">
            Промокоды
          </a>
        </li>
      </ul>
    </nav>
  );
};
