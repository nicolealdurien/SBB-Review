import { useState } from 'react';
import { questionsHLA } from './questionsHLA';

const HLA = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsHLA.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="transbox">
      <h1>Human Leukocyte Antigens</h1>
      <p>({questionsHLA.length} questions)</p>
      <br />
      <div className="app">
        {showScore ? (
          <div>
            <div className="score-section">
              You got {score} out of {questionsHLA.length} questions correct!
            </div>
            <br />
            <a href="/HLA" className="button">
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
                {questionsHLA[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questionsHLA[currentQuestion].answerOptions.map(
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

export { HLA };
