
import './App.css';
import { useEffect,useState } from 'react';
import MainCharacterPage from './components/MainCharacterPage';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/characters")
      .then((r) => r.json())
      .then((characters) => setCharacters(characters));
  }, []);
  return (
    <div className="App">
   <MainCharacterPage characters={characters} />
    </div>
  );
}

export default App;
