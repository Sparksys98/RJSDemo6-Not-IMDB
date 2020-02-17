import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
        <Route path="/movies/:movieID" component={MovieDetail} />
        <Route path="/mylist" component={MyList} />
        <Route
          path="/"
          render={props => <MovieList {...props} movies={movies} />}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
