import './App.css';
import React from 'react';
import SearchBar from './components/searchBar/searchBar';
import Track from './components/track/track';
import SearchResults from './components/searchResults/searchResults';
import TrackList from './components/trackList/trackList';
import PlayList from './components/playList/playList'


function App() 
{
  return (
    <>
      <SearchBar />
      <TrackList />
      <PlayList />
    </>
  );
}

export default App;
