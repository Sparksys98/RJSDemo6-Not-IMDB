import React from "react";
import "./App.css";

// Data
import movies from "./data";

// Components
import Navbar from "./Navbar";
import MoviesList from "./MoviesList";
import MovieDetails from "./MovieDetails";
import MyList from "./MyList";

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <MyList />
    </div>
  );
}

export default App;
