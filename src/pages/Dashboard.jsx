import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import "../styles/dashboard.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import Navbar from "../components/Navbar";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const accuracy = 80;
  const attempts = [10, 12, 8, 15, 20];
  const streak = 5;

  const accuracyData = {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        data: [accuracy, 100 - accuracy],
        backgroundColor: ["#4caf50", "#f44336"],
        borderWidth: 1,
      },
    ],
  };

  const attemptData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Questions Attempted",
        data: attempts,
        backgroundColor: "#4b6cb7",
      },
    ],
  };

  return (
    <>
    <Navbar/>
    <div className="dashboard container">
      <h2>Your Performance</h2>

      <div className="dashboard-grid">
        <div className="card">
          <h4>Accuracy</h4>
          <Doughnut data={accuracyData} />
        </div>

        <div className="card">
          <h4>Weekly Attempts</h4>
          <Bar data={attemptData} />
        </div>

        <div className="dashboard-card">
          <h4>Streak</h4>
          <div className="streak-box">{streak} 🔥</div>
        </div>
      </div>

      <div className="badges">
        <h3>Badges</h3>
        <div className="badge-list">
          <div className="badge">🔥 Streak Master</div>
          <div className="badge">🎯 Accuracy Pro</div>
          <div className="badge">📚 Topic Explorer</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
