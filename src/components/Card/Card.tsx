import React from 'react';

type Props = {
  card: Card;
};

export const Card: React.FC<Props> = (props) => {
  const { card } = props;

  return (
    <div className="Card">
      <div className="Card__ribbon">
        <img
          src="./Vector.svg"
          alt="Ribbon background"
        />
        <img
          className="Card__ribbon-image"
          src="./Vector(1).png"
          alt="Ribbon"
        />
        <img
          className="Card__ribbon-coin"
          src="./RibbonCoin.svg"
          alt="Coin"
        />
        <span className="Card__ribbon-value">
          {card.bonus}
        </span>
      </div>
      <img
        src={card.image}
        alt="Crystal"
        className="Card__image"
      />
      <p className="Card__amount">
        {card.amount}
      </p>
      <span className="Card__text">
        Handful of Coins
      </span>
      <div className="Card__button-border">
        <button
          type="button"
          className="Card__button"
        >
          Купить
          <img
            src={card.currency}
            alt="Currency"
          />
          {card.price}
        </button>
      </div>
    </div>
  );
};
