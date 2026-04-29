import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">

      <h1>Beauty Wonderland SPA</h1>

      <p>
        Your Beauty, Your Confidence. Where every style tells a story.
      </p>

      <div className="buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>

    </div>
  );
};

export default Home;