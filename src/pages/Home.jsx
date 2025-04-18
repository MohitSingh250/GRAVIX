import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => (
    <>
    
    <Navbar/>
    <section className="hero-section">
        <div className="hero-left">
            <h1 className="hero-title">Fuel <br />Your JEE <br />Prep with <span>Precision.</span></h1>
            <p className="hero-subtitle">Practice questions, take mock tests, and track your progress with real-time insights.</p>
            <div className="hero-btn"> 
                <Link to="/signup">
                <button className="getstarted-btn">Get Started</button>
                </Link>
                <Link to="/signup">
                <button className="mock-test">Take a Mock Test</button>
                </Link>
            </div>
        </div>
        <div className="hero-right">
            <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="IIT" />
        </div>
    </section>
    <section className="ace-sec">
        <h2>Everything you need to ace JEE</h2>
        <div className="ace-cards">
            <div className="ace-card" style={{backgroundColor:"#eeeeee"}}>
                <i className="fa-solid fa-book"></i>
                <h3>Practice by Subject & Topic</h3>
                <p>Customized practice sessions for Physics, Chemistry, and Maths</p>
            </div>
            <div className="ace-card" style={{backgroundColor:"#dddddd "}}>
                <i className="fa-solid fa-clock"></i>
                <h3>Real Mock Tests with Timer</h3>
                <p>Experience exam-like environment with timed mock tests</p>
            </div>
            <div className="ace-card" style={{backgroundColor:" #cccccc"}}>
                <i className="fa-solid fa-chalkboard-user"></i>
                <h3>Smart Dashboard & Tracking</h3>
                <p>Monitor your progress with detailed analytics and insights</p>
            </div>
            <div className="ace-card" style={{backgroundColor:"#bbbbbb "}}>
                <i className="fa-solid fa-award"></i>
                <h3>Leaderboards & Badges</h3>
                <p>Compete with peers and earn recognition for your achievements</p>
            </div>
        </div>
    </section>
    <section className="path-sec">
        <h2>Your Path to JEE Success</h2>
        <div className="path-cards">
            <div className="path-card">
                <img src="https://cdn-icons-png.flaticon.com/512/5822/5822138.png" alt="" />
                <h3>Sign Up</h3>
                <p>Create your account</p>
            </div>
            <div className="path-card">
                <img src="https://cdn-icons-png.freepik.com/256/5656/5656368.png?semt=ais_hybrid" alt="" />
                <h3>Choose Topics</h3>
                <p>Select your subjects</p>
            </div>
            <div className="path-card">
                <img src="https://cdn-icons-png.flaticon.com/512/1646/1646417.png" alt="" />
                <h3>Practice Questions</h3>
                <p>Solve MCQs daily</p>
            </div>
            <div className="path-card">
                <img src="https://cdn-icons-png.freepik.com/256/14250/14250522.png" alt="" />
                <h3>Track Progress</h3>
                <p>Monitor performance</p>
            </div>
            <div className="path-card">
                <img src="https://cdn.pixabay.com/photo/2017/12/21/08/44/badge-3031340_1280.png" alt="" />
                <h3>Beat Competition</h3>
                <p>Top the rankings</p>
            </div>
        </div>
    </section>
    <div className="feedback-sec">
        <img src="https://www.allen.ac.in/jee-toppers/assets/img/mridul-agarwal.png" alt="" />
        <p className="p1">"This platform helped me boost my JEE score significantly. <br />The practice questions and mock tests were exactly what I needed!"</p>
        <p className="p2">Bhupendra, Batch 2024</p>
    </div>
    <div className="join-sec">
        <h1>Don't just study harder — study smarter for JEE success.</h1>
        <Link to="/signup">
            <button className="getstarted-btn">Get Started</button>
        </Link>

    </div>
    <Footer/>
    </>
);

export default Home;

