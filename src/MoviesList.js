import React from "react";

// Components
import MovieCard from "./MovieCard";

function MoviesList(props) {
  const moviesList = props.movies.map(movie => (
    <MovieCard movie={movie} key={movie.id} />
  ));
  return <div className="row">{moviesList}</div>;
}

export default MoviesList;
