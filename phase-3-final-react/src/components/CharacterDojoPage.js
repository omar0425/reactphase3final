import React, { useState, useEffect } from "react";
import DojoCharacterCards from "./DojoCharacterCards";

const CharacterDojoPage = ({ dojoList }) => {
  const [dojoId, setDojoId] = useState(1);

  const [dojoCharacters, setDojoCharacters] = useState({
    characters: [],
  });
  useEffect(() => {
    fetch(`http://localhost:9292/dojo/${dojoId}`)
      .then((r) => r.json())
      .then((characters) => setDojoCharacters(characters));
  }, [dojoId]);

  function onCategoryChange(dojo) {
    setDojoId(dojo);
  }

  const dojoCharCards = dojoCharacters.characters.map((c) => (
    <DojoCharacterCards
      c={c}
      name={c.name}
      portrayed={c.portrayed_by}
      image={c.image_url}
      id={c.id}
      key={c.id}
    />
  ));
  return (
    <div>
      <select
        value={dojoId}
        id={dojoId}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option className= "option" value=''>Choose Dojo</option>
        {dojoList.map((dojo, index) => (
          <option key={index} value={dojo.id}>
            {dojo.name}
          </option>
        ))}
      </select>
      {dojoCharCards}
    </div>
  );
};

export default CharacterDojoPage;
