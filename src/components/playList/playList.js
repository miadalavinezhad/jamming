import React from 'react';
import { useState } from 'react';
import Track from '../track/track';
import './playList_style.css';

function PlayList({ songs, onClick })
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
                        onClick={(e) => onClick(e, song)}
                        />
                    </li>
        })
    );


    return (
        <div id='playList'>
            <input type='text' id='playList-name' placeholder="What's your playlist name?" />
            <ul>{ tracks }</ul>
            <input type='submit' id='submit' value='Add to Spotify' />
        </div>
    );

}

export default PlayList;