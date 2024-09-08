import React from "react";
import { Link } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav>
      <ol className=" flex space-x-5 no-underline text-blue-600">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
      </ol>
    </nav>
  );
};

export default NavComponents;
