import React, { useState } from 'react';

const QuestionBox = ({ question, currentQuestion, totalQuestions, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [highlighted, setHighlighted] = useState(false);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    handleAnswer(optionId);
  };

  const handleHighlight = () => {
    setHighlighted(true);
  };

  const handleRemoveHighlight = () => {
    setHighlighted(false);
  };

  return (
    <div className={`question-box ${highlighted ? 'highlighted' : ''}`}>
      <p id='outof' style = {{marginLeft:'390px'}}> <b>
        Question: {currentQuestion} out of {totalQuestions}</b>
      </p>
      <h1 className={`question-text ${highlighted ? 'highlighted-text' : ''}`}>{question.text}</h1>
      <div>
        {question.options.map((option) => (
          <div id='option-text'
            key={option.id}
            className={`option ${selectedOption === option.id ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option.id)}
          >
            {option.text}
          </div>
        ))}
      </div>
      <button id='highlight' onClick={handleHighlight} style={{ marginLeft: '380px' }}> <b> Highlight </b></button>
      <button id='remove-highlight' onClick={handleRemoveHighlight} style={{ marginLeft: '50px' }}><b>
        Remove Highlight
        </b></button>
    </div>
  );
};

export default QuestionBox;
