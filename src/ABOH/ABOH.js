import { useState } from 'react';
import { questionsABOH } from './questionsABOH';

const ABOH = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsABOH.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="transbox">
      <h1>A, B, O, and H Blood Groups</h1>
      <p>({questionsABOH.length} questions)</p>
      <br />
      <div className="app">
        {showScore ? (
          <div>
            <div className="score-section">
              You got {score} out of {questionsABOH.length} questions correct!
            </div>
            <br />
            <a href="/ABO" className="button">
              Retry
            </a>
            <br />
            <a href="/" className="button">
              Home
            </a>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>
              </div>
              <div className="question-text">
                {questionsABOH[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questionsABOH[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                ),
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { ABOH };
