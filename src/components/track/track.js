import React from 'react';
import './track_style.css';
import songCover from '../../img/songCover.jpg';
import addIcon from '../../img/add.png';


function Track(props)
{
    // Event handlers
    function handleMouseEnter(event)
    {
        event.target.style.backgroundColor = '#252525';
    }

    function handleMouseLeave(event)
    {
        event.target.style.backgroundColor = '#000';
    }


    return (
        <div id='track'>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={props.onClick}>
                <img src={addIcon} />
            </button>

            <h3>{props.name}</h3>
            <p id='artist'>{props.artist}</p>
            <p id='album'>{props.album}</p>
            <p id='year'>Year</p>

            <img src={songCover} alt='cover'/>
        </div>
    );
}

export default Track;