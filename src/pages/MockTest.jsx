import React, { useState } from "react";
import questionsData from "../data/questions.json";
import "../styles/mocktest.css";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const MockTest = () => {
  const [questions] = useState(shuffle(questionsData).slice(0, 30));
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviews, setReviews] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (opt) => {
    setAnswers({ ...answers, [current]: opt });
  };

  const submitTest = () => setSubmitted(true);

  const handlePrevious = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handleReview = () => {
    setReviews((prevReviews) => ({
      ...prevReviews,
      [current]: !prevReviews[current],
    }));
  };

  const correctCount = questions.filter((q, i) => answers[i] === q.answer).length;

  return (
    <div className="mock-test-page">
      <header className="header">
        <h1>
          Physics Mock Test <span>Paper 1</span>
        </h1>
        {!submitted && <Timer duration={60 * 60} onTimeUp={submitTest} />}
      </header>

      <div className="mock-test-container">
        {!submitted ? (
          <div className="main-content">
            <div className="question-section">
              <div className="question-meta">
                <span>Question {current + 1}/30</span>
                <div className="meta-tags">
                  <span className="subject">Physics</span>
                  <span className="difficulty">Medium</span>
                </div>
              </div>
              <p className="question-text">
                <strong>Q{current + 1}:</strong> {questions[current].question}
              </p>
              <div className="options">
                {questions[current].options.map((opt, idx) => (
                  <label key={idx} className="option-label">
                    <input
                      type="radio"
                      name="answer"
                      onChange={() => handleAnswer(opt)}
                      checked={answers[current] === opt}
                    />
                    <span>{String.fromCharCode(65 + idx)}) {opt}</span>
                  </label>
                ))}
              </div>
              <div className="action-buttons">
                <button className="previous" onClick={handlePrevious}>← Previous</button>
                <button className="clear" onClick={() => handleAnswer(null)}>Clear Response</button>
                <button className="review" onClick={handleReview}>Mark for Review</button>
                <button className="next" onClick={handleNext}>Next →</button>
              </div>
            </div>

            <div className="navigator-section">
              <h3>Question Navigator</h3>
              <div className="navigator-grid">
                {questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`nav-item ${idx === current ? "active" : ""} ${
                      answers[idx] ? "answered" : ""
                    } ${reviews[idx] ? "review" : ""}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              <div className="status-summary">
                <span>✔ Answered ({Object.keys(answers).length})</span>
                <span>⚠ Marked for Review ({Object.keys(reviews).filter((k) => reviews[k]).length})</span>
                <span>✖ Not Answered ({30 - Object.keys(answers).length})</span>
              </div>
              <button className="submit" onClick={submitTest}>Submit Test</button>
            </div>
          </div>
        ) : (
          <div className="result-box">
            <h3>Test Submitted!</h3>
            <p>Score: {correctCount} / {questions.length}</p>
            <p>Accuracy: {((correctCount / questions.length) * 100).toFixed(2)}%</p>
            <button onClick={() => window.location.reload()}>Retake Test</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockTest;
