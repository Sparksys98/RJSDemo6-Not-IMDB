import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <a href="/" className="navbar-brand">
          Not IMDB
        </a>
        <div className="navbar">
          <a href="/mylist" className="nav-item nav-link text-light">
            My List
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
