import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

// Data
import movies from "./data";

// Components
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import MyList from "./MyList";

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <Switch>
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route path="/mylist" component={MyList} />
        <Route
          path="/"
          render={props => <MoviesList {...props} movies={movies} />}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
