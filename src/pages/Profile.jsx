import React, { useState } from "react";
import "../styles/profile.css";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Aspirant001",
    avatar: "https://api.dicebear.com/6.x/thumbs/svg?seed=jeeguy",
    stats: {
      solved: 120,
      accuracy: 84,
      streak: 6,
    },
  });

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your progress?")) {
      setUser({
        ...user,
        stats: { solved: 0, accuracy: 0, streak: 0 },
      });
    }
  };

  return (
    <>
    <Navbar/>
    <div className="profile container">
      <h2>👤 Your Profile</h2>

      <div className="profile-card">
        <img src={user.avatar} alt="avatar" className="avatar" />
        <h3>{user.name}</h3>

        <div className="stats">
          <div><strong>Questions Solved:</strong> {user.stats.solved}</div>
          <div><strong>Accuracy:</strong> {user.stats.accuracy}%</div>
          <div><strong>Streak:</strong> {user.stats.streak} 🔥</div>
        </div>

        <button onClick={handleReset} className="reset-btn">
          Reset Progress
        </button>
      </div>
    </div>
    </>
  );
};

export default Profile;
