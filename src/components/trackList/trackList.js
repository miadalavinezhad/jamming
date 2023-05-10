import React from 'react';
import { useState } from 'react';
import './trackList_style.css';
import searchResults from '../searchResults/searchResults';
import Track from '../track/track';

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
                        onClick={() => onClick(song)}
                        />
                    </li>
        })
    );

    return (
        <div id='results'>
            <h2>Songs</h2>
            <ul>{ tracks }</ul>
        </div>
    );
}

export default TrackList;