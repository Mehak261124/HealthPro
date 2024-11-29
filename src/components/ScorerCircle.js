import React from "react";
import "./ScoreCircle.css";

export default function ScoreCircle({ score }) {
  return (
    <div className="score-circle-container">
      {/* Outer Circle */}
      <div
        className="outer-circle"
        style={{
          background: `conic-gradient(#5BD489 ${score}%, rgba(63, 112, 77, 0.33) ${score}%)`,
        }}
      >
        {/* Border Effect */}
        <div className="outer-border"></div>

        {/* Inner Circle */}
        <div className="inner-circle">
          <span className="percentage-text">{score}%</span>
        </div>
      </div>
    </div>
  );
}
