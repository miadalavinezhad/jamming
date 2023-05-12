import React from 'react';
import { useState } from 'react';
import SearchBar from './components/searchBar/searchBar';
import TrackList from './components/trackList/trackList';
import PlayList from './components/playList/playList'
import searchResults from './components/searchResults/searchResults';
import './App.css';


function App() 
{
  // States for saving songs to be displayed on tracklist and playlist
  const [TL, setTL] = useState(searchResults);
  const [PL, setPL] = useState([]);

  // Remove clicked song from tracklist and add to playlist
  function handleClickTL(e, song)
  {
      console.log(e.target.src);
      setTL(TL.filter(s => s.id !== song.id));
      setPL([...PL, song]);
  }

  // Remove song from playlist and add to tracklist
  function handleClickPL(e, song)
  {
      console.log(e.target.src);
      setPL(PL.filter(s => s.id !== song.id));
      setTL([...TL, song]);
  }


  return (
    <div className='App'>
      <div className='search-result'>
        {/* <SearchBar className="SearchBar" /> */}
        <TrackList className='tracklist' songs={TL} onClick={handleClickTL} />
      </div>
        <PlayList songs={PL} onClick={handleClickPL} />
    </div>
  );
}

export default App;
