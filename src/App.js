import React, { useState } from "react";
import { useEffect } from "react";

import MoiveCard from "./movieCard";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=9e5cb58c';

const movie1 = {
    "Title": "Superman & Lois",
    "Year": "2021–2024",
    "imdbID": "tt11192306",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzdmYjAyODUtMTFkOS00MDg1LTljMDAtNzhiYTg5NjY1NjM5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
}

const App = () =>{

    const [moivee, setMovies] = useState([]);
    const [searcTerm, setSearchTerm] = useState([]);


    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() =>{
     searchMovies('batMAN')
    }, [])
    return(
        <div className="app">
            <h1>
                Movie LAND
            </h1>

            <div className="search">
                <input 
                placeholder="SEARCH FOR MOVIES"
                value={searcTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searcTerm)}
                />

            </div>

            {
                moivee?.length > 0 
                ?(
                    <div className="container">
                        {moivee.map((movie) => ( <MoiveCard movie={movie} />))}
                    </div> 
                 ) : (
                    <div className="empty">
                        <h2>
                            no movies found
                        </h2>
                    </div>
                 )
            }

          

        </div>
    )

}


export default App;