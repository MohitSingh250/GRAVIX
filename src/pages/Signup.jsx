import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../components/Firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });

      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1 className="logo">JEEPrepX</h1>
        <p className="tagline">Your Gateway to IIT Success</p>
        <ul className="features">
          <li>Expert Faculty & Mentors</li>
          <li>Comprehensive Study Material</li>
          <li>Performance Analytics</li>
        </ul>
      </div>

      <div className="auth-right">
        <div className="tabs">
          <Link to="/login"><button className="tab">Login</button></Link>
          <button className="tab active">Sign Up</button>
        </div>

        <form onSubmit={handleSignup} className="auth-form">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="form-row">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#" className="forgot">Forgot password?</a>
          </div>

          <button className="auth-btn">Create Your Account</button>
        </form>

        <div className="divider"><span>Or continue with</span></div>

        <div className="social-buttons">
          <button className="google-btn">🔵 Google</button>
          <button className="facebook-btn">🔷 Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
