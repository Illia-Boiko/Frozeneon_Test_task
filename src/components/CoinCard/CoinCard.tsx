import React from 'react';

type Props = {
  card: Card;
};

export const CoinCard: React.FC<Props> = (props) => {
  const { card } = props;

  return (
    <div className="CoinCard">
      <img
        src={card.image}
        alt="Crystal"
        className="CoinCard__image"
      />
      <p className="CoinCard__amount">
        {card.amount}
      </p>
      <span className="CoinCard__text">
        Handful of Coins
      </span>
      <div className="CoinCard__button-border">
        <button
          type="button"
          className="CoinCard__button"
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
