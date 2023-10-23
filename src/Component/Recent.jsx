import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Recent = () => {
    const [album, setAlbum] = useState([]);

    useEffect(() =>{
        axios
        .get('https://sportify.p.rapidapi.com/api/sports', {
          headers: {
             'X-RapidAPI-Key': 'a46ab7ed82msh99d6971629852b0p16c1a3jsnec10ba166c0c',
             'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
          },
        })
        .then((response) => {
            setAlbum(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },[])
  return (
    <div className='text-start'>
      <h1>Recent Album</h1>
      <ul>
        {album.map(song =>(
            <li key={song.id}>{song.title} by {song.artist}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recent
