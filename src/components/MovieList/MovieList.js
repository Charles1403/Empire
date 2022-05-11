import React, { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";


const MovieList = () => {
    const {movies} = useContext(AppContext)
    return (
        <>
            {movies?.length > 0 ? (
                <div className="container">
                {movies.map((movie, i) => (
                    <MovieCard movie={movie}  key={i}/>
                ))}
                </div>
            ) : (
               <NotFound/>
            )}
        </>
    )
}

export default MovieList;