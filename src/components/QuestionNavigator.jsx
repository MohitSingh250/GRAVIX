
import React from "react";
import "../styles/navigator.css";

const QuestionNavigator = ({ total, current, answers, onJump }) => {
  return (
    <div className="navigator">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`nav-btn ${i === current ? "active" : ""} ${answers[i] ? "answered" : ""}`}
          onClick={() => onJump(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default QuestionNavigator;
