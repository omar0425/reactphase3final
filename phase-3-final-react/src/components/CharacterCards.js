import React from "react";
import DojoSelector from "./DojoSelector";

const CharacterCards = ({ c,dojoList,id,onDeleteCharacter }) => {

  return (
    <div className='card'>
      <h2>{c.name}</h2>
      <img src={c.image_url} alt={c.name} className='pic' />
      <DojoSelector dojoList = {dojoList} id={id}/>
      <button onClick= {()=>onDeleteCharacter(id)}>Delete Character</button>

      
    </div>
  );
};

export default CharacterCards;
