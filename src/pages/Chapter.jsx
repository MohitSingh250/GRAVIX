import React, { useState } from "react";
import { useParams } from "react-router-dom";
import questionsData from "../data/questions.json";
import "../styles/chapter.css";

const Chapter = () => {
  const { id } = useParams();
  const [difficulty, setDifficulty] = useState("All");

  const filteredQuestions = questionsData.filter(
    (q) =>
      q.subject.toLowerCase() === id.toLowerCase() &&
      (difficulty === "All" || q.difficulty === difficulty)
  );

  return (
    <div className="chapter-page container">
      <h2>{id.charAt(0).toUpperCase() + id.slice(1)} Questions</h2>

      <div className="filter-section">
        <label>Filter by Difficulty:</label>
        <select onChange={(e) => setDifficulty(e.target.value)}>
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="question-list">
        {filteredQuestions.map((q, index) => (
          <div className="question-card" key={q.id}>
            <p className="question-text">
              <strong>Q{index + 1}:</strong> {q.question}
            </p>
            <ul className="options">
              {q.options.map((opt, idx) => (
                <li key={idx}>{opt}</li>
              ))}
            </ul>
            <p className="answer">
              <strong>Answer:</strong> {q.answer}
            </p>
            <p className="explanation">
              <strong>Explanation:</strong> {q.explanation}
            </p>
            <span className={`tag ${q.difficulty.toLowerCase()}`}>
              {q.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapter;
