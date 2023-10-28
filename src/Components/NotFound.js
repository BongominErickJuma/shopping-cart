import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h2>Sorry!</h2>
      <p>We cound not find the page you requested for</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
