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
			questionText: 'Which of the following is NOT a potential outcome of HDFN?',
			answerOptions: [
				{ answerText: 'Maternal anemia', isCorrect: true },
				{ answerText: 'Erythroblastosis fetalis', isCorrect: false },
				{ answerText: 'Hepatosplenomegaly', isCorrect: false },
				{ answerText: 'Hydrops fetalis', isCorrect: false },
			],
		},
        {
			questionText: 'Which of the following ',
			answerOptions: [
				{ answerText: 'Platelet refractoriness', isCorrect: false },
                { answerText: 'TRALI', isCorrect: false },
				{ answerText: 'Transfusion-associated GvHD', isCorrect: false },
				{ answerText: 'Alloimmunization in sickle cell disease', isCorrect: true },
				
			],
		},
        {
			questionText: 'Which HLA class is found on platelets and almost all nucleated cells in the body?',
			answerOptions: [
				{ answerText: 'HLA Class I', isCorrect: true },
				{ answerText: 'HLA Class II', isCorrect: false },
				{ answerText: 'HLA Class III', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'ABO compatibility is more important than HLA compatibility for which types of transplants?',
			answerOptions: [
				{ answerText: 'Liver and lung', isCorrect: false },
				{ answerText: 'Corneal and ligament', isCorrect: false },
				{ answerText: 'Heart and kidney', isCorrect: true },
				{ answerText: 'Hemaopoetic stem cell', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a Class II HLA gene?',
			answerOptions: [
				{ answerText: 'C4b', isCorrect: false },
				{ answerText: 'Complement C2', isCorrect: false },
				{ answerText: 'HLA-A', isCorrect: false },
				{ answerText: 'HLA-DQ', isCorrect: true },
			],
		},
        {
			questionText: 'Which class of HLA molecules present endogenous peptides?',
			answerOptions: [
				{ answerText: 'HLA Class I', isCorrect: true },
				{ answerText: 'HLA Class II', isCorrect: false },
				{ answerText: 'HLA Class III', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'HLA Class I molecules are recognized by which type of T cell?',
			answerOptions: [
				{ answerText: 'CD4 T-helper lymphocytes', isCorrect: false },
				{ answerText: 'CD8 cytotoxic T lymphocytes', isCorrect: true },
				{ answerText: 'CD56 Natural Killer (NK cells)', isCorrect: true },
				{ answerText: 'CD20 memory B cells', isCorrect: false },
			],
		},

		{
			questionText: 'Which 2 complement proteins are also HLA class III proteins and RBC antigens?',
			answerOptions: [
				{ answerText: 'C1q and C1r', isCorrect: false },
				{ answerText: 'C3b and C3d', isCorrect: false },
				{ answerText: 'C4b and C4a', isCorrect: true },
				{ answerText: 'C8 and C9', isCorrect: false },
			],
		},
        {
            questionText: 'Which HLA class is found only on B-lymphocytes, macrophages, dendritic cells, and activated T cells?":',
            answerOptions: [
                { answerText: 'HLA Class I', isCorrect: false },
                { answerText: 'HLA Class II', isCorrect: true },
                { answerText: 'HLA Class III', isCorrect: false },
                { answerText: 'None of the above', isCorrect: false },
            ],
        },
        {
			questionText: 'How would serologic lymphocytotoxicity cell death score of 18% be interpreted?',
			answerOptions: [
				{ answerText: 'Negative', isCorrect: false },
				{ answerText: 'Doubtful positive', isCorrect: false },
				{ answerText: 'Weak positive', isCorrect: true },
				{ answerText: 'Positive', isCorrect: false },
			],
		},
        {
			questionText: 'What "cellular crossmatch" test is rarely used but involves culturing lymphocytes from 2 individuals together?',
			answerOptions: [

				{ answerText: 'Panel Reactive Antibody (PRA)', isCorrect: false },
				{ answerText: 'Serologic lymphocytotoxicity test', isCorrect: false },
				{ answerText: 'Sequence-based typing', isCorrect: false },
                { answerText: 'Mixed lymphocyte culture (MLC)', isCorrect: true },
			],
		},
        {
			questionText: 'Platelets have HLA antigens of which class?',
			answerOptions: [
				{ answerText: 'CLass I', isCorrect: true },
				{ answerText: 'Class II', isCorrect: false },
				{ answerText: 'Class III', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
        {
			questionText: 'What condition involves HLA antibodies in donor plasma reacting with and fixing complement to recipient granulocytes, leading to severe capillary leakage and pulmonary edema?',
			answerOptions: [
				{ answerText: 'FNHTR', isCorrect: false },
				{ answerText: 'TRALI', isCorrect: true },
				{ answerText: 'TA-GvHD', isCorrect:  false},
				{ answerText: 'TACO', isCorrect: false },
			],
		},
        {
			questionText: 'Which class of HLA molecules present exogenous/extracellular peptides?',
			answerOptions: [
				{ answerText: 'HLA Class I', isCorrect: false },
				{ answerText: 'HLA Class II', isCorrect: true },
				{ answerText: 'HLA Class III', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
	];

	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		};
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setShowScore(true)
		};
	};

	return (
		<div class="transbox">
			<h1>Hemolytic Disease of the Fetus and Newborn (HDFN)</h1>
            <p>({questions.length} questions)</p>
            <br/>
			<div className='app'>
				{showScore ? (
					<div>
                        <div className='score-section'>You got {score} out of {questions.length} questions correct!</div>
                        <br/>
                        <a href="/HDFN" class="button">Retry</a>
                        <br/>
                        <a href="/" class="button">Home</a>
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>
							</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answerOptions.map((answerOption, index) => (
								<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
