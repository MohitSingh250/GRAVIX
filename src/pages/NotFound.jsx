
import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <img src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt="Confused student"/>
      <h1 className="code">404</h1>
      <h2 className="title">Oops! Page not found.</h2>
      <p className="subtitle">Get back to learning!</p>
      <p className="text">
        The page you're looking for seems to have taken a study break. Let’s get
        you back to your preparation journey!
      </p>
      <Link to="/" className="backhome-btn">
        🏠 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
