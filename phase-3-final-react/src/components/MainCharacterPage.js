import React, { useState } from "react";
import CharacterCards from "./CharacterCards";
import CreateDojoForm from "./CreateDojoForm";
import CreateCharacterForm from "./CreateCharacterForm";

const MainCharacterPage = ({
  characters,
  dojoList,
  setDojoList,
  setCharacters,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/character", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,

        image_url: formData.image,
      }),
    })
      .then((r) => r.json())
      .then((newCharacter) => setCharacters([...characters, newCharacter]));
  }
    function onDeleteCharacter(id) {
    fetch(`http://localhost:9292/character/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedCharacter) => {
        const modifiedCharacterData = characters.filter(character => character.id !== deletedCharacter.id)
        setCharacters(modifiedCharacterData)
      });
  }

  const charCards = characters.map((c) => (
    <CharacterCards
      c={c}
      name={c.name}
      portrayed={c.portrayed_by}
      image={c.image_url}
      id={c.id}
      key={c.id}
      dojoList={dojoList}
      onDeleteCharacter={onDeleteCharacter}
    />
  ));

  return (
    <div>
      <CreateCharacterForm
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <CreateDojoForm dojoList={dojoList} setDojoList={setDojoList} />
      {charCards}
    </div>
  );
};

export default MainCharacterPage;
