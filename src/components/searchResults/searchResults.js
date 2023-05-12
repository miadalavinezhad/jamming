import React from 'react';
import Track from '../track/track';
import { useState } from 'react';

const client_id = 'd234d06a87f64481b94b848a13868b70';
const client_secret = '93c47a3782574ad799fe1c5a55c5b1a1';
const endpoint = 'https://accounts.spotify.com/api/token';

const baseAPIAdd = 'https://api.spotify.com/v1/search?';
const query = 'Coldplay';
const type = 'track';
const limit = 5;

// getting access token from spotify
const key_access = async () => 
{
    try
    {
        const token_response = await fetch(endpoint, 
            {
                method:'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
            });
        
        if (token_response.ok)
        {
            const jsonTokenResponse = await token_response.json();
            const access_token = jsonTokenResponse.access_token;
            return access_token;
        }
        else
        {
            throw new Error('Not successfull!');
        }
        
    }
    catch(e)
    {
        console.log(e);
    }
}


// Getting the search results
const search_result = async (resolve) =>
{
    try
    {
        const endpoint = `${baseAPIAdd}q=${query}&type=${type}&limit=${limit}`;
        const response = await fetch(endpoint, {
            headers: { Authorization:`Bearer ${resolve}`}
        });

        if(response.ok)
        {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
        else
        {
            throw new Error('Search response Not successfull!');
        }
    }
    catch(e)
    {
        console.log(e);
    }
}


key_access().then(resolve => search_result(resolve));

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


export default searchResults;