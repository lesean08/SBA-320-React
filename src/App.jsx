import { useEffect, useState } from 'react';
import Form from './components/Form';
import CharacterButton from './components/CharacterButton';
import CharacterDisplay from './components/CharacterDisplay';
import UpdateButton from './components/UpdateButton';
import './index.css';
import './App.css';

function App() {
  const apiKey = "1034477-Wirefram-A333E1DB"; 
  const [shows, setShows] = useState(null); 
  const [updateShows, setUpdateShows] = useState(0);

  
  const getShows = async (searchTerm) => {
    const baseUrl = 'https://tastedive.com/api/similar?q'; 
    const url = `${baseUrl}?type=shows&k=${apiKey}&q=${searchTerm}`; 

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.Similar && data.Similar.Results && data.Similar.Results.length > 0) {
        setShows(data.Similar.Results[0]);
      } else {
        setShows(null); 
      }
    } catch (err) {
      console.error(err);
      setShows(null); 
    }
  };

  useEffect(() => {
    const showsArray = ['Queen Charlotte', 'Mr. & Mrs. Smith', 'X-Men', 'That 90s Show', 'Tulsa King'];
    const firstShow = showsArray[Math.floor(Math.random() * showsArray.length)];
    getShows(firstShow);
  }, [updateShows]);

  return (
    <>
      <h1>TV SHOWS</h1>
      <UpdateButton updateShows={updateShows} setUpdateShows={setUpdateShows} />
      <Form showsSearch={getShows} />
      <CharacterButton newShow='Fraiser' showsSearch={getShows} />
      <CharacterButton newShow='Beef' showsSearch={getShows} />
      <CharacterButton newShow='Monkie Kid' showsSearch={getShows} />
      <CharacterButton newShow='Vision' showsSearch={getShows} />
      <CharacterButton newShow='Captain Marvel' showsSearch={getShows} />
      <CharacterDisplay shows={shows} />
    </>
  );
}

export default App;
