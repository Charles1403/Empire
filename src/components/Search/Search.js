import React, {useContext} from "react";
import { AppContext } from "../../App";

const Search = () => {
    const {searchTerm, setSearchTerm, searchMovies} = useContext(AppContext)
    return (
        <>
            <h1>Empire</h1>
            <div className="search">
                <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
                />
                <button onClick={() => searchMovies(searchTerm)}>enter</button>
            </div>
        </>
    )
}

export default Search;