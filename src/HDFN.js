import React, { useState } from 'react';

export default function HDFN() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      questionText: 'What percentage of pregnancies have ABO HDFN?',
      answerOptions: [
        { answerText: '<1%', isCorrect: false },
        { answerText: '5%', isCorrect: false },
        { answerText: '20%', isCorrect: true },
        { answerText: '35%', isCorrect: false },
      ],
    },
    {
      questionText:
        'Which of the following is NOT a potential outcome of HDFN?',
      answerOptions: [
        { answerText: 'Maternal anemia', isCorrect: true },
        { answerText: 'Erythroblastosis fetalis', isCorrect: false },
        { answerText: 'Hepatosplenomegaly', isCorrect: false },
        { answerText: 'Hydrops fetalis', isCorrect: false },
      ],
    },
    {
      questionText:
        'Which of the following does NOT impact the severity of HDFN?',
      answerOptions: [
        { answerText: 'Antibody specificity', isCorrect: false },
        { answerText: 'Antibody titer', isCorrect: false },
        { answerText: 'First vs subsequent pregnancy', isCorrect: false },
        {
          answerText: 'Antibody to carbohydrate antigen vs protein antigen',
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        'Giving RhIG both prenatally and postpartum reduces the risk of Rh HDFN to less than:',
      answerOptions: [
        { answerText: '0.2%', isCorrect: true },
        { answerText: '0.8%', isCorrect: false },
        { answerText: '2%', isCorrect: false },
        { answerText: '8%', isCorrect: false },
      ],
    },
    {
      questionText:
        'When monitoring HDFN, the threshold to do IUT if <35 weeks or induce labor if >35 weeks is a hematocrit of:',
      answerOptions: [
        { answerText: '<26%', isCorrect: false },
        { answerText: '<28%', isCorrect: false },
        { answerText: '<30%', isCorrect: true },
        { answerText: '<32%', isCorrect: false },
      ],
    },
    {
      questionText:
        'Which of the following is NOT an ideal criterion when choosing blood for an IUT?',
      answerOptions: [
        { answerText: 'O negative', isCorrect: false },
        { answerText: 'Fresh units <7 days old', isCorrect: false },
        { answerText: 'Irradiated', isCorrect: false },
        { answerText: 'Whole blood', isCorrect: true },
      ],
    },
    {
      questionText:
        'Phototherapy is performed on a neonate if bilirubin is at or above:',
      answerOptions: [
        { answerText: '10 mg/dL', isCorrect: false },
        { answerText: '12 mg/dL', isCorrect: true },
        { answerText: '14 mg/dL', isCorrect: false },
        { answerText: '16 mg/dL', isCorrect: false },
      ],
    },
    {
      questionText: 'What light wavelength range is used for phototherapy?',
      answerOptions: [
        { answerText: '300-360 nm', isCorrect: false },
        { answerText: '360-420 nm', isCorrect: false },
        { answerText: '420-480 nm', isCorrect: true },
        { answerText: '480-540 nm', isCorrect: false },
      ],
    },

    {
      questionText: 'Which antibody is responsible for 80% of FNAIT cases?',
      answerOptions: [
        { answerText: 'Anti-GPIIb/IIIa', isCorrect: false },
        { answerText: 'Anti-GPIb/IX', isCorrect: false },
        { answerText: 'Anti-GPIa/IIa', isCorrect: false },
        { answerText: 'Anti-HPA-1a', isCorrect: true },
      ],
    },
    {
      questionText: 'What percentage of the population is HPA-1a negative?',
      answerOptions: [
        { answerText: '0.5%', isCorrect: false },
        { answerText: '2%', isCorrect: true },
        { answerText: '8%', isCorrect: false },
        { answerText: '32%', isCorrect: false },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="transbox">
      <h1>Hemolytic Disease of the Fetus and Newborn (HDFN)</h1>
      <p>({questions.length} questions)</p>
      <br />
      <div className="app">
        {showScore ? (
          <div>
            <div className="score-section">
              You got {score} out of {questions.length} questions correct!
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
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
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
}
