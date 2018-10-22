import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark">
      <Link className="navbar-brand" to="/">
        Not IMDB
      </Link>
      <div className="navbar">
        <NavLink className="nav-item nav-link text-light" to="/mylist">
          My List
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
