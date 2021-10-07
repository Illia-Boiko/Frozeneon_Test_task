import React from 'react';
import cards from '../../cardsInfo.json';
import { Card } from '../Card';

export const MonsterBoxes: React.FC = () => {
  return (
    <section
      className="MonsterBoxes Main__MonsterBoxes"
    >
      <h2 className="MonsterBoxes__title">
        Кристаллы Незера
      </h2>
      <ul className="MonsterBoxes__list">
        {cards.map(card => (
          <li
            className="MonsterBoxes__item"
            key={card.id}
          >
            <Card card={card} />
          </li>
        ))}
      </ul>
      <div className="MonsterBoxes__scroll-eclipse"></div>
    </section>
  );
};
