import React from "react";

// Components
import MovieCard from "./MovieCard";

const MovieList = props => {
  const moviesList = props.movies.map(movie => (
    <MovieCard key={movie.id} movie={movie} />
  ));
  return <div className="row">{moviesList}</div>;
};

export default MovieList;
