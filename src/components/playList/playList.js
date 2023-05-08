import React from 'react';
import './playList_style.css';
import SearchResults from '../searchResults/searchResults';

function PlayList()
{
    return (
        <div id='playList'>
            <input type='text' id='playList-name' placeholder="What's your playlist name?" />
            <SearchResults />
            <input type='submit' id='submit' value='Add to Spotify' />
        </div>
    );

}

export default PlayList;