import React from 'react';
import { useState } from 'react';
import './trackList_style.css';
import searchResults from '../searchResults/searchResults';
import Track from '../track/track';
import SearchBar from '../searchBar/searchBar';

function TrackList({ songs, onClick })
{       

    const tracks = (
        songs.map(song => 
        {
            return <li key={song.id}>
                        <Track
                        key={song.id}
                        name={song.name}
                        album={song.album}
                        artist={song.artist}
                        onClick={(e) => onClick(e, song)} // Passing argument to event handler
                        />
                    </li>
        })
    );

    return (
        <div id='results'>
            <SearchBar />
            <ul>{ tracks }</ul>
        </div>
    );
}

export default TrackList;