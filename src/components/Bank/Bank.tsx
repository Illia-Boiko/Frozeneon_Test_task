import React from 'react';
import cards from '../../cardsInfo.json';
import { Card } from '../Card';

export const Bank: React.FC = () => {
  return (
    <section
      className="Bank Main__Bank"
    >
      <h2 className="Bank__title">
        Кристаллы Незера
      </h2>
      <ul className="Bank__list">
        {cards.map(card => (
          <li
            className="Bank__item"
            key={card.id}
          >
            <Card card={card} />
          </li>
        ))}
      </ul>
      <div className="Bank__line"></div>
      <h2 className="Bank__title">
        Монеты Незера
      </h2>
      <ul className="Bank__list">
        {cards.map(card => (
          <li
            className="Bank__item"
            key={card.id}
          >
            <Card card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};
