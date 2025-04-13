import React, { useState } from "react";
import "../styles/questioncard.css";

const QuestionCard = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (opt) => {
    setSelected(opt);
    setShowAnswer(true);
  };

  return (
    <div className="question-card">
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((opt, idx) => (
          <li
            key={idx}
            className={`option ${
              showAnswer
                ? opt === question.answer
                  ? "correct"
                  : opt === selected
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => !showAnswer && handleOptionClick(opt)}
          >
            {opt}
          </li>
        ))}
      </ul>
      {showAnswer && <p className="explanation">💡 {question.explanation}</p>}
    </div>
  );
};

export default QuestionCard;
