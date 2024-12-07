import React from "react";
import { shuffleArray } from "../../utils/shuffleArray";
import { QUESTIONS } from "../../data/questions.data";
import "./question.scss"

const Question = ({ item, handleSelectOption, isSelectOption }) => {
  const shuffledOptions = React.useMemo(() => shuffleArray([...QUESTIONS.find((option) => option.id === item.id).options]), [item]);
	return (
    <li className="questions-list__item" key={item.id}>
      <h3 className="questions-list__title">{item.question}</h3>
      <ul className="questions-list__variants-list">
        {shuffledOptions?.map((option) => (
          <li className="questions-list__variants-list__item" key={option.id}>
            <input
              className="questions-list__variants-list__input"
							disabled={isSelectOption}
              id={option.id}
              type="radio"
							onClick={() => {
								handleSelectOption(option.id);
							}}
              name={option.name}
              required
            />
            <label
              className="questions-list__variants-list__label"
              htmlFor={option.id}
            >
              {option.value}
            </label>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Question;
