import React, { useState, useEffect, Match } from 'react';
import { Route, useParams, useHistory, Switch, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'


import SavedList from './Movies/SavedList';

export default function App (props) {
    const [movieList, setMovieList] = useState([]);
    const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
    console.log('movieList was: ', movieList)
    
    useEffect(() => {
        const getMovies = () => {
            axios
            .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
            .then(response => {
                console.log('movieList response was: ', response)
                console.log('movieList was: ', movieList)
                console.log('movieList resp.data is :', response.data)
                setMovieList(response.data)
                console.log('movieList is Set to: ', movieList)
                // debugger

                // Study this response with a breakpoint or log statements
                // and set the response data as the 'movieList' slice of state
            })
            .catch(error => {
                console.error('Server Error', error);
            });
        }
        getMovies();
    }, []);
    
    const addToSavedList = id => {
        // This is stretch. Prevent the same movie from being "saved" more than once
    };
    
    const id = props.id
    return (
        
        <div>
        
       {/* <SavedList list={[ This is stretch ]} /> */}

        
            <Route render={Movie} 
                id={props.id}
                path={`/movies/:${id}`}
                /> 
            
            <Route exact path='/'>
                <MovieList movies={movieList} />
            </Route>
      
        </div>
  );
}
