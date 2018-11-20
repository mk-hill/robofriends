import React from 'react';

// Destructuring props
const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow be shadow-5 tc">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
