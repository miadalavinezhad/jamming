import './App.css';
import React from 'react';
import { useState } from 'react';
import SearchBar from './components/searchBar/searchBar';
import Track from './components/track/track';
import SearchResults from './components/searchResults/searchResults';
import TrackList from './components/trackList/trackList';
import PlayList from './components/playList/playList'
import searchResults from './components/searchResults/searchResults';


function App() 
{
  const [TL, setTL] = useState(searchResults);
  const [PL, setPL] = useState([]);

  function handleClickTL(song)
  {
      console.log(song);
      setTL(TL.filter(s => s.id !== song.id));
      setPL([...PL, song]);
  }

  function handleClickPL(song)
  {
      setPL(PL.filter(s => s.id !== song.id));
      setTL([...TL, song]);
  }


  return (
    <div className='App'>
      <SearchBar className='searchBar' />
      <TrackList songs={TL} onClick={handleClickTL} />
      <PlayList songs={PL} onClick={handleClickPL} />
    </div>
  );
}

export default App;
