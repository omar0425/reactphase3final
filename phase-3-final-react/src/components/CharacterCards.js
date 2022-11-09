import React from "react";
import DojoSelector from "./DojoSelector";

const CharacterCards = ({ c,dojoList }) => {

  return (
    <div className='card'>
      <h2>{c.name}</h2>
      <img src={c.image_url} alt={c.name} className='Character' />
      <DojoSelector dojoList = {dojoList} />

      
    </div>
  );
};

export default CharacterCards;
