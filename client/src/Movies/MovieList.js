import React, { useState } from 'react';
import { useHistory, Link, Route, Switch, NavLink } from 'react-router-dom'
import Movie from './Movie';
import { v4 as uuidv4 } from 'uuid';

export default function MovieList(props) {
    // console.log('MovieList starts at: ', MovieList)



return (

    <div className="movie-list">
      {props.movies.map(movie => (

            <MovieDetails key={movie.id} movie={movie} />
   
      ))}
      </div>
      )
       

      
            
                
                
            
  

function MovieDetails(props) {
    const { title, director, metascore, id } = props.movie;
    
    const history = useHistory()
    const routeToMovie = (e) => {
        
        console.dir('target', e.target)
        console.dir('parentElement', e.target.parentElement.id)

        console.dir('parentNode', e.target.parentNode.id)
        console.dir('lastChild', e.target.lastChild)


        // debugger
        {history.push(`./movies/${e.target.parentNode.id}`)}
    }
    return (

        <div id={id}>
         
        <div id ={id}uuid={uuidv4()} className="movie-card" onClick={routeToMovie}>
                <h2>{title}</h2>
            <div className="movie-director">
                Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
                Metascore: <strong>{metascore}</strong>
            </div>

            </div>
        </div>

  );

}
}



     
        