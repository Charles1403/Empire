import React, { useContext } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { AppContext } from "../../App";


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
                <div className="empty">
                <h2>No movies found</h2>
                </div>
            )}
        </>
    )
}

export default MovieList;