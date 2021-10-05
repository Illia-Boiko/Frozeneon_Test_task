import React from 'react';

type Props = {
  info: string;
};

export const ComingSoon: React.FC<Props> = ({ info }) => {
  return (
    <section className="ComingSoon">
      <h2 className="ComingSoon__title">
        {`${info} скоро в продаже!`}
      </h2>
    </section>
  );
};
