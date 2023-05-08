import React from 'react';
import Track from '../track/track';
import { useState } from 'react';

const initial_results = [
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
        name:'Magic',
        artist:'coldplay',
        album:'ghost stories',
        id:3
    },
    {
        name:'Magic',
        artist:'coldplay',
        album:'ghost stories',
        id:4
    },
    {
        name:'Magic',
        artist:'coldplay',
        album:'ghost stories',
        id:5
    },
    {
        name:'Magic',
        artist:'coldplay',
        album:'ghost stories',
        id:6
    }
];

function SearchResults()
{
    const [results, setResults] = useState(initial_results);
    const [result_playList, setResult_playList] = useState([]);

    let resultArr = (
        results.map(song => <li key={song.id}>
                                <Track 
                                name={song.name} 
                                artist={song.artist} 
                                album={song.album} 
                                onClick={() => 
                                {
                                    setResults(results.filter(result => result.id !== song.id));
                                    setResult_playList([...result_playList, song]);
                                }} />
                            </li>)
    );
    console.log(resultArr);

    let resultArr_playList = (
        result_playList.map(song => <li key={song.id}>
                                <Track 
                                name={song.name} 
                                artist={song.artist} 
                                album={song.album} 
                                onClick={() => 
                                {
                                    setResult_playList(results.filter(result => result.id !== song.id));
                                    setResults([...results, song])
                                }} />
                            </li>)
    );


    return [<ul>{resultArr}</ul>, <ul>{resultArr_playList}</ul>];
}

export default SearchResults;