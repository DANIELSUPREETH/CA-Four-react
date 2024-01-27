import React from 'react';

const Result = ({ score, totalQuestions, handleRestart }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="result-box">
      <b><p>Your Result:</p>
      <p>
        Score: {score} / {totalQuestions}
      </p>
      <p>Percentage: {percentage}%</p></b>
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
