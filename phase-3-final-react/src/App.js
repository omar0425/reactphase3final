
import './App.css';
import Nav from './components/Nav';

import { useEffect,useState } from 'react';
import MainCharacterPage from './components/MainCharacterPage';

function App() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9292/characters")
    .then((r) => r.json())
    .then((characters) => setCharacters(characters));
  }, []);
  const [dojoList,setDojoList] = useState([{"id":"", "name": ""}])
  
  useEffect(() => {
    fetch("http://localhost:9292/dojos")
      .then((r) => r.json())
      .then((dojos) => setDojoList(dojos));
    }, []);


    
  return (

    <div className="App">
    <MainCharacterPage characters={characters}  dojoList ={dojoList}/>
     </div>
  );
}

export default App;
