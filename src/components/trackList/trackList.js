import React from 'react';
import './trackList_style.css';
import SearchResults from '../searchResults/searchResults';

function TrackList()
{
    return (
        <div id='results'>
            <h2>Songs</h2>
            <SearchResults />
        </div>
    );
}

export default TrackList;