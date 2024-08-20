import { useEffect, useState } from 'react';
import Form from './components/Form';
import CharacterButton from './components/CharacterButton';
import CharacterDisplay from './components/CharacterDisplay';
import UpdateButton from './components/UpdateButton';

import './App.css';

function App() {
  const apiKey = "634f0ab4163609b696796cfd64fecc59";
  const [character, setCharacter] = useState(null);
  const [updateCharacter, setUpdateCharacter] = useState(0);

  const getCharacter = async (searchTerm) => {
    const baseUrl = 'https://https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0';
    const url = `${baseUrl}?apikey=${apiKey}&name=${searchTerm}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.data && data.data.results && data.data.results.length > 0) {
        setCharacter(data.data.results[0]);
      } else {
        setCharacter(null); // Handle cases where no character is found
      }
    } catch (err) {
      console.error(err);
      setCharacter(null); // Handle errors
    }
  };

  useEffect(() => {
    const characterArray = ['Black Panther', 'Captain America', 'Spiderman', 'Hulk', 'Iron Man'];
    const firstCharacter = characterArray[Math.floor(Math.random() * characterArray.length)];
    getCharacter(firstCharacter);
  }, [updateCharacter]);

  return (
    <>
      <h1>Marvel Characters</h1>
      <UpdateButton updateCharacter={updateCharacter} setUpdateCharacter={setUpdateCharacter} />
      <Form charactersearch={getCharacter} />
      <CharacterButton newCharacter='Thor' charactersearch={getCharacter} />
      <CharacterButton newCharacter='Dr Strange' charactersearch={getCharacter} />
      <CharacterButton newCharacter='Black Widow' charactersearch={getCharacter} />
      <CharacterButton newCharacter='Vision' charactersearch={getCharacter} />
      <CharacterButton newCharacter='Captain Marvel' charactersearch={getCharacter} />
      <CharacterDisplay character={character} />
    </>
    
  );
}

export default App;
