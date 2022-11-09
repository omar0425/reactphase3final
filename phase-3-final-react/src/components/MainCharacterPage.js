import React from "react";
import CharacterCards from "./CharacterCards";
import CreateDojoForm from "./CreateDojoForm";
const MainCharacterPage = ({ characters,dojoList }) => {


  const charCards = characters.map((c) => (
    <CharacterCards
      c={c}
      name={c.name}
      portrayed={c.portrayed_by}
      image={c.image_url}
      id={c.id}
      key={c.id}
      dojoList={dojoList}
      
      
      
    />
  ));

  return (
    <div>
      <CreateDojoForm />
      {charCards}
    </div>
  );
};

export default MainCharacterPage;
