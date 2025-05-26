import { useState } from 'react';
import { questionsHDFN } from './questionsHDFN';

const HDFN = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsHDFN.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="transbox">
      <h1>Hemolytic Disease of the Fetus and Newborn (HDFN)</h1>
      <p>({questionsHDFN.length} questions)</p>
      <br />
      <div className="app">
        {showScore ? (
          <div>
            <div className="score-section">
              You got {score} out of {questionsHDFN.length} questions correct!
            </div>
            <br />
            <a href="/HDFN" className="button">
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
                {questionsHDFN[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questionsHDFN[currentQuestion].answerOptions.map(
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

export { HDFN };
