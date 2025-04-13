import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
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
          <button className="tab active">Login</button>
          <Link to="/signup"><button className="tab">Sign Up</button></Link>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
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

          <button className="auth-btn">Login to Your Account</button>
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

export default LoginPage;
