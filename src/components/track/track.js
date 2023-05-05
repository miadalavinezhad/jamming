import Reach from 'react';
import './track_style.css';
import songCover from '../../img/songCover.jpg';
import addIcon from '../../img/add.png';

function handleMouseEnter(event)
{
    event.target.style.backgroundColor = '#fff';
}

function handleMouseLeave(event)
{
    event.target.style.backgroundColor = '#212a3e';
}

function Track(props)
{
    return (
        <div id='track'>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={addIcon} />
            </button>

            <h3>Title</h3>
            <p id='artist'>Artist</p>
            <p id='album'>Album</p>
            <p id='year'>Year</p>

            <img src={songCover} alt='cover'/>
        </div>
    );
}

export default Track;