import React from "react";

const Answer = ({ answer }) => {
  return (
    <li
      className={
        answer.isCorrect ? "results-list__item good" : "results-list__item bad"
      }
    >
      <h3 className="results-list__item-title">{answer.questionTitle}</h3>
      <p className="results-list__item-description">
        {answer.correctOption.value}
      </p>
    </li>
  );
};

export default Answer;
