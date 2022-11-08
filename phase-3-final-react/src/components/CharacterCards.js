import React from "react";

const CharacterCards = ({ c }) => {
  console.log(c.image);

  return (
    <div className='card'>
      <h2>{c.name}</h2>
      <img src={c.image_url} alt={c.name} className='Character' />
    </div>
  );
};

export default CharacterCards;
