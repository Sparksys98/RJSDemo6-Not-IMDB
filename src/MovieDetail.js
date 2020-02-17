import React from "react";

// Data
import movies from "./data";

const MovieDetail = props => {
  const movieID = props.match.params.movieID;
  const movie = movies.find(movie => movie.id === +movieID);
  return (
    <div className="col-6 mx-auto mt-5 pb-5">
      <div className="card ">
        <h3 className="card-header">{movie.name}</h3>
        <img
          className="card-img-top w-50 mx-auto"
          src={movie.image}
          alt={movie.name}
        />
        <div class="card-body">
          <p class="card-text">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
