import { useState } from 'react';

const ABOH = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      questionText:
        'Which immunodominant sugar is responsible for the H antigen?',
      answerOptions: [
        { answerText: 'N-acetyl-D-galactosamine', isCorrect: false },
        { answerText: 'D-galactose', isCorrect: false },
        { answerText: 'L-fucose', isCorrect: true },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText:
        'Which of the following is NOT associated with acquired B antigen?',
      answerOptions: [
        { answerText: 'Carcinoma of the colon or rectum', isCorrect: false },
        { answerText: 'Mycobacteria pneumoniae', isCorrect: true },
        { answerText: 'Gram-negative bacteria', isCorrect: false },
        { answerText: 'Intestinal obstructions', isCorrect: false },
      ],
    },
    {
      questionText:
        'ABO antigens are sensitive to which of the following chemical treatments?',
      answerOptions: [
        { answerText: 'Ficin', isCorrect: false },
        { answerText: 'Trypsin', isCorrect: false },
        { answerText: 'DTT', isCorrect: false },
        { answerText: 'None of the above', isCorrect: true },
      ],
    },
    {
      questionText:
        'Which of the following is NOT a possible cause of mixed-field agglutination?',
      answerOptions: [
        {
          answerText:
            'Depressed immunoglobulin levels in immunodeficient patients',
          isCorrect: true,
        },
        { answerText: 'Recent transfusion', isCorrect: false },
        { answerText: 'Bone marrow transplant recipient', isCorrect: false },
        { answerText: 'A3 subgroup', isCorrect: false },
      ],
    },
    {
      questionText:
        'E. coli O86 is the heterophile antigen that causes us to make "naturally occurring":',
      answerOptions: [
        { answerText: 'Anti-A', isCorrect: false },
        { answerText: 'Anti-B', isCorrect: true },
        { answerText: 'Anti-A,B', isCorrect: false },
        { answerText: 'Anti-M', isCorrect: false },
      ],
    },
    {
      questionText:
        'How would you resolve rouleaux interference in an ABO type?',
      answerOptions: [
        { answerText: '15-minute room temp incubation', isCorrect: false },
        { answerText: 'Ficin treatment', isCorrect: false },
        { answerText: 'Saline replacement', isCorrect: true },
        { answerText: 'DTT treatment', isCorrect: false },
      ],
    },
    {
      questionText: 'What percentage of the population are secretors?',
      answerOptions: [
        { answerText: '20%', isCorrect: false },
        { answerText: '40%', isCorrect: false },
        { answerText: '60%', isCorrect: false },
        { answerText: '80%', isCorrect: true },
      ],
    },
    {
      questionText:
        'Anti-A1 is considered clinically insignificant unless it reacts at:',
      answerOptions: [
        { answerText: '4C', isCorrect: false },
        { answerText: '20C', isCorrect: false },
        { answerText: '37C', isCorrect: true },
        { answerText: 'None of the above', isCorrect: false },
      ],
    },
    {
      questionText:
        'What test serologically distinguishes A1 from other subgroups of A?',
      answerOptions: [
        { answerText: 'Dolichos biflorus', isCorrect: true },
        { answerText: 'Ulex europaeus', isCorrect: false },
        { answerText: 'Vicea graminea', isCorrect: false },
        { answerText: 'Griffonia simplicifolia', isCorrect: false },
      ],
    },
    {
      questionText:
        'Acquired B antigen is a phenomenon that can occasionally be seen in individuals with blood group:',
      answerOptions: [
        { answerText: 'O', isCorrect: false },
        { answerText: 'A', isCorrect: true },
        { answerText: 'Both O and A', isCorrect: false },
        { answerText: 'None of the above', isCorrect: false },
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
      <h1>A, B, O, and H Blood Groups</h1>
      <p>({questions.length} questions)</p>
      <br />
      <div className="app">
        {showScore ? (
          <div>
            <div className="score-section">
              You got {score} out of {questions.length} questions correct!
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
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
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

export default ABOH;
