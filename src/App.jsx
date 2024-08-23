import { useEffect, useState } from 'react';
import Form from './components/Form';
import CharacterButton from './components/CharacterButton';
import CharacterDisplay from './components/CharacterDisplay';
import UpdateButton from './components/UpdateButton';
import './index.css';
import './App.css';

function App() {
  const apiKey = "a44c72302a8384fc9b1baf14ebc2396e"; 
  const [character, setCharacter] = useState(null); 
  const [updateCharacterId, setUpdateCharacterId] = useState(0);

  const getCharacterId = async (searchTerm) => {
    const baseUrl = 'https://superheroapi.com/api/current.json?key=a44c72302a8384fc9b1baf14ebc2396e/character-id/image';
    const url = `${baseUrl}${apiKey}/search/${image}`; 

  
    }
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setCharacter(data.results[0]);
      } else {
        setCharacter(null); 
      }
    } catch (err) {
      console.error(err);
      setCharacter(null); 
    }
  };

  useEffect(() => {
    const characterArray = ['Black Panther', 'Captain America', 'Spiderman', 'Hulk', 'Iron Man'];
    const firstCharacter = characterArray[Math.floor(Math.random() * characterArray.length)];
    getCharacterId(firstCharacter);
  }, [updateCharacterId]);

  return (
    <>
      <h1>Super Heroes</h1>
      <UpdateButton updateCharacterId={updateCharacterId} setUpdateCharacterId={setUpdateCharacterId} />
      <Form characterSearch={getCharacterId} />
      <CharacterButton newCharacterId='Thor' characterSearch={getCharacterId} />
      <CharacterButton newCharacterId='Doctor Strange' characterSearch={getCharacterId} />
      <CharacterButton newCharacterId='Black Widow' characterSearch={getCharacterId} />
      <CharacterButton newCharacterId='Vision' characterSearch={getCharacterId} />
      <CharacterButton newCharacterId='Captain Marvel' characterSearch={getCharacterId} />
      <CharacterDisplay character={character} />
    </>
  );
}

export default App;
