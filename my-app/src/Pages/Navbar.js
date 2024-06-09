import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <nav className="navbar">
      <h1>My React App</h1>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Posts">Posts</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;