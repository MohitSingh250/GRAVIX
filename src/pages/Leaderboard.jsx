import React from "react";
import leaderboard from "../data/leaderboard.json";
import "../styles/leaderboard.css";
import Navbar from "../components/Navbar";

const Leaderboard = () => {
  return (
    <>
    <Navbar/>
    <div className="leaderboard container">
      <h2>🏆 Leaderboard</h2>
      <p className="subtext">Top performers this week</p>

      <div className="leader-list">
        {leaderboard.map((user) => (
          <div
            key={user.rank}
            className={`leader-card ${user.rank <= 3 ? "top" : ""}`}
          >
            <div className="rank">#{user.rank}</div>
            <img src={user.avatar} alt={user.name} className="avatar" />
            <div className="info">
              <h4>{user.name}</h4>
              <p>Score: {user.score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Leaderboard;
