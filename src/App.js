/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import MovieCard from './components/MovieCard/MovieCard';


const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=6839fd78'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
   

  useEffect(() => {
   searchMovies("batman")
  },[]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
    setMovies(data.Search)
  };

  return (
    <div className='App'>
      <h1>Empire</h1>
       <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button onClick={() => searchMovies(searchTerm)}>enter</button>
      </div>
    </div>
  )

}

export default App;
