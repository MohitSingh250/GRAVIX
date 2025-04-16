import React, { useState } from "react";
import data from "../data/bookmarks.json";
import "../styles/bookmarks.css";
import Navbar from "../components/Navbar";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(data);

  const handleNoteChange = (id, newNote) => {
    const updated = bookmarks.map((q) =>
      q.id === id ? { ...q, note: newNote } : q
    );
    setBookmarks(updated);
  };

  return (
    <>
    <Navbar/>
    <div className="bookmarks container">
      <h2>📌 Bookmarked Questions</h2>

      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((q) => (
          <div className="bookmark-card" key={q.id}>
            <h4>{q.subject}</h4>
            <p><strong>Q:</strong> {q.question}</p>
            <ul>
              {q.options.map((opt, idx) => (
                <li
                  key={idx}
                  className={opt === q.answer ? "correct" : ""}
                >
                  {opt}
                </li>
              ))}
            </ul>

            <textarea
              placeholder="Your note..."
              value={q.note}
              onChange={(e) => handleNoteChange(q.id, e.target.value)}
            />

            <small>Correct Answer: <strong>{q.answer}</strong></small>
          </div>
        ))
      )}
    </div>
    </>
  );
};

export default Bookmarks;
