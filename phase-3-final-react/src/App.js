
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom"

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
       <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<MainCharacterPage dojoList={dojoList} characters={characters}/>} />
        
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
