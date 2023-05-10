import React from 'react';
import Track from '../track/track';
import { useState } from 'react';

const searchResults = [
    {
        name:'Gole Yakh',
        artist:'Kourosh',
        album:'Brink',
        id:1
    },
    {
        name:'Magic',
        artist:'coldplay',
        album:'ghost stories',
        id:2
    },
    {
        name:'O',
        artist:'coldplay',
        album:'ghost stories',
        id:3
    },
    {
        name:'Midnight',
        artist:'coldplay',
        album:'ghost stories',
        id:4
    },
    {
        name:'Everglow',
        artist:'coldplay',
        album:'ghost stories',
        id:5
    },
    {
        name:'Paradise',
        artist:'coldplay',
        album:'ghost stories',
        id:6
    }
];

/// not used ///
// function SearchResults()
// {
//     const [results, setResults] = useState(initial_results);
    
//     let resultArr = (
//         results.map(song => <li key={song.id}>
//                                 <Track 
//                                 name={song.name} 
//                                 artist={song.artist} 
//                                 album={song.album} 
//                                 onClick={() => 
//                                 {
//                                     setResults(results.filter(result => result.id !== song.id));
//                                 }} />
//                             </li>)
//     );

//     return resultArr;
// }

export default searchResults;