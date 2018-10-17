import React from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
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
      <MovieDetail />
    </div>
  );
}

export default App;
