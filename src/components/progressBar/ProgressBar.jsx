import React from "react";
import "./progressBar.scss";

const ProgressBar = ({ to, selectedAnswers }) => {
  const getPercentComplete = () => {
    if (selectedAnswers === 0) {
      return "auto";
    } else {
      return Math.round((selectedAnswers / to) * 100);
    }
  };
  return (
    <div className="progress-bar__wrapper">
      <div className="progress-bar__header">
        <span className="progress-bar__value">0</span>
        <span className="progress-bar__value">{to}</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{ width: `${getPercentComplete()}%` }}
        ></div>
      </div>
      <div
        className={selectedAnswers === 0 ? "progress-bar__footer default" : "progress-bar__footer"}
        style={{ width: `${getPercentComplete()}%` }}
      >
        <span className="progress-bar__value">{selectedAnswers}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
