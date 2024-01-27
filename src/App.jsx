import React, { useState, useEffect } from 'react';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import questions from './questions';
import './App.css'; // Import the CSS file


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (selectedOption) => {
    const isCorrect = questions[currentQuestion - 1].options.find((opt) => opt.id === selectedOption).isCorrect;
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If it's the last question, set quizCompleted to true
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(1);
    setScore(0);
    setQuizCompleted(false);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <div className="app">
      <button id='notty' onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Dark mode ' : 'Light mode'}</button>
      {quizCompleted ? (
        <Result score={score} totalQuestions={questions.length} handleRestart={handleRestart} />
      ) : (
        <QuestionBox
          question={questions[currentQuestion - 1]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;