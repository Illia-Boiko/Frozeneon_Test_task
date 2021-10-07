import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';

export const Header: React.FC = () => {
  // eslint-disable-next-line no-restricted-globals
  const [size, setSize] = useState(innerWidth);
  const [coins, setCoins] = useState(100254);
  const [crystals, setCrystals] = useState(1254);

  const resize = useCallback(debounce(setSize, 500), []);

  window.addEventListener('resize', () => {
    // eslint-disable-next-line no-restricted-globals
    resize(innerWidth);
  });

  const addCoins = () => {
    setCoins(amount => amount + 1);
  };

  const addCrystals = () => {
    setCrystals(amount => amount + 1);
  };

  return (
    <header className="Header Page__Header">
      <div className="Header__content">
        <button
          type="button"
          className="Header__button Header__button--back"
        >
          <img src="./leftArrow.png" alt="Left Arrow" />
          <span className="Header__button-text">
            Back
          </span>
        </button>
        <div className="Header__bank-items">
          <div className="Header__bank-item">
            <img
              className="Header__coins-image"
              src="./coins.svg"
              alt="Coins"
            />
            <span className="Header__bank-info">
              {size > 768
                ? coins
                : `${(coins / 1000).toFixed(1)}k`}
              <br />
              <span className="Header__currency-name">
                Coins
              </span>
            </span>
            <button
              className="Header__add-button"
              type="button"
              onClick={addCoins}
            >
            </button>
          </div>
          <div className="Header__bank-item">
            <img
              className="Header__crystals-image"
              src="./crystals.svg"
              alt="Crystals"
            />
            <span className="Header__bank-info">
              {crystals}
              <br />
              <span className="Header__currency-name">
                Crystals
              </span>
            </span>
            <br />
            <button
              className="Header__add-button"
              type="button"
              onClick={addCrystals}
            >
            </button>
          </div>
        </div>
        <button
          type="button"
          className="Header__button Header__button--home"
        >
          <img src="./homeIcon.png" alt="Home Icon" />
          <span className="Header__button-text">
            Home
          </span>
        </button>
      </div>
    </header>
  );
};
