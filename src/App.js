/* eslint-disable no-unused-vars */
import React, {useState, useEffect, createContext} from 'react'
import MovieCard from './components/MovieCard/MovieCard';
import MovieList from './components/MovieList/MovieList';
import Search from './components/Search/Search';

export const AppContext = createContext()

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
     <AppContext.Provider value={{searchTerm, setSearchTerm, movies, setMovies, searchMovies}}>
      <Search/>
      <MovieList/>
    </AppContext.Provider>
    </div>
  )

}

export default App;
