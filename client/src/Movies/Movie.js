import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom'


export default function Movie(props) {
  
    
    const [ film, setMovie ] = useState({})
  
    let id = props.id;
    debugger

  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL
  useEffect(() => {
      axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        console.log('movie response was: ', response)
        console.log('movie was: ', film)
        console.log('movie resp.data is :', response.data)
        setMovie(response.data)
        console.log('movie is Set to: ', film)
        
        
        
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!film) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = film;

  return (
    <div className="save-wrapper">

      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
