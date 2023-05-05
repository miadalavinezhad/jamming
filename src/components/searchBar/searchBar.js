import React from 'react';
import './searchBar_style.css';
import search_icon from '../../img/search.png';

function SearchBar()
{
    return (
        <div id='search'>
            <input type='text' placeholder='What do you want to listen to?'/>
            <button><img src={search_icon} alt='search-icon'/></button>
        </div>
    );
}

export default SearchBar;