import React,{useEffect,useState} from "react";
import CreateDojoForm from "./CreateDojoForm";
const MainCharacterPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/characters")
      .then((r) => r.json())
      .then((characters) => console.log(characters));
  }, []);




  return (
    <div>
      <CreateDojoForm />

    </div>
  );
};

export default MainCharacterPage;
