import React from 'react';
import cards from '../../cardsInfo.json';
import { Card } from '../Card';

export const CardsBox: React.FC = () => {
  return (
    <section
      className="CardsBox Main__CardsBox"
    >
      <h2 className="CardsBox__title">
        Кристаллы Незера
      </h2>
      <ul className="CardsBox__list">
        {cards.map(card => (
          <li
            className="CardsBox__item"
            key={card.id}
          >
            <Card card={card} />
          </li>
        ))}
      </ul>
      <div className="CardsBox__scroll-eclipse"></div>
    </section>
  );
};
