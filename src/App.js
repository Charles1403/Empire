import React, {useState} from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <div className='App'>
       <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button>enter</button>
      </div>
    </div>
  )

}

export default App;
