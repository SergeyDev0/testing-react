import React from "react";
import { shuffleArray } from "../utils/shuffleArray";
import { QUESTIONS } from "../data/questions.data";
import Question from "../components/question/Question";
import ProgressBar from "../components/progressBar/ProgressBar";

const Home = () => {
  const [selectedAnswers, setSelectedAnswers] = React.useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [isSelectOption, setIsSelectOption] = React.useState(false);
	const [shuffledQuestions, setShuffledQuestions] = React.useState([]);

	// Вынести в функцию и вызывать после окончания всех вопросов
  const correctAnswersCount = selectedAnswers.filter((answer) => answer.isCorrect).length;

	React.useEffect(() => {
		setShuffledQuestions(shuffleArray([...QUESTIONS]));
	}, [])
	
	function reset() {
		setSelectedAnswers([]);
		setCurrentQuestionIndex(0);
		setIsSelectOption(false);
		setShuffledQuestions(shuffleArray([...QUESTIONS]));
		console.log(shuffledQuestions)
	}
	

  const handleSelectOption = async (selectedOptionId) => {
    setIsSelectOption(true);
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(
      (option) => option.id === selectedOptionId
    );

    if (selectedOption) {
      const isCorrect = selectedOption.isCorrect;
      const correctOption = currentQuestion.options.find(
        (option) => option.isCorrect
      );

      setSelectedAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          questionId: currentQuestion.id,
          selectedOptionId: selectedOptionId,
          questionTitle: currentQuestion.question,
          isCorrect: isCorrect,
          correctOption: correctOption,
        },
      ]);
    }
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsSelectOption(false);
      console.log(selectedAnswers);
    }, 1000);
  };

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  if (currentQuestionIndex >= shuffledQuestions.length) {
    return (
      <div className="results">
        {correctAnswersCount === QUESTIONS.length ? (
          <>
            <h1 className="results__title">"Поздравляем!"</h1>
            <p className="results__description">
              Вы ответили правильно на 5 вопросов. <br /> Так держать!
            </p>
          </>
        ) : correctAnswersCount === 0 ? (
          <>
            <h1 className="results__title">Упс &#58;&#10098;</h1>
            <p className="results__description">
              Вы неправильно ответили на все вопросы. <br /> Нужно подучить
              теорию.
            </p>
          </>
        ) : (
          <>
            <h1 className="results__title">Хороший результат!</h1>
            <p className="results__description">
              Вы ответили правильно на 5 вопросов. <br /> Так держать!
            </p>
          </>
        )}
        <ul className="results-list">
          {selectedAnswers.map((answer) => (
            <li
              key={answer.questionId}
              className={
                answer.isCorrect
                  ? "results-list__item good"
                  : "results-list__item bad"
              }
            >
              <h3>{answer.questionTitle}</h3>
              <p>{answer.correctOption.value}</p>
            </li>
          ))}
        </ul>
				{correctAnswersCount !== QUESTIONS.length && (
					<button onClick={reset}>Пройти ещё раз</button>
				)}
      </div>
    );
  } else {
    return (
      <div className="questions">
        <h1 className="questions__title">Тестирование</h1>
        <form
          className={
            isSelectOption 
						? "questions__form selected" 
						: "questions__form"
          }
        >
          <ul className="questions-list">
            {currentQuestion && (
              <Question
                item={currentQuestion}
                handleSelectOption={handleSelectOption}
                isSelectOption={isSelectOption}
              />
            )}
          </ul>
        </form>
        <ProgressBar
          to={shuffledQuestions.length}
          selectedAnswers={selectedAnswers.length}
        />
      </div>
    );
  }
};

export default Home;