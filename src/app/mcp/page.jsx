"use client";
import React, { useState, useEffect } from "react";
import questionsData from "../../data/data";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (!isAnswered) {
      const currentAnswer = questionsData[currentQuestion].correctAnswer;
      const isCorrect = currentAnswer === selectedOption;

      setScore((prevScore) => (isCorrect ? prevScore + 10 : prevScore + 2));
      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 15);
    } else {
      // Quiz completed
      alert(
        `Quiz completed! Your final score is ${score} and total time taken is ${timeTaken} seconds.`
      );
    }
  };

  useEffect(() => {
    let timer;
    if (!isAnswered) {
      
      timer = setTimeout(() => {
        setTimeTaken((prevTime) => prevTime + 15);
        handleNextQuestion();
      }, 15000);
    }
    return () => clearTimeout(timer);
  }, [currentQuestion, isAnswered]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-96 mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Question {currentQuestion + 1}
      </h2>
      <p className="text-gray-800 mb-4">
        {questionsData[currentQuestion].question}
      </p>
      <div className="flex justify-between space-x-4">
        <button
          onClick={() => handleAnswer("agree")}
          disabled={isAnswered}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none"
        >
          Agree
        </button>
        <button
          onClick={() => handleAnswer("disagree")}
          disabled={isAnswered}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none"
        >
          Disagree
        </button>
      </div>
      {isAnswered && (
        <div className="mt-4">
          {/* <p className="text-green-500 font-bold">
            {questionsData[currentQuestion].correctAnswer === "agree"
              ? "Agree"
              : "Disagree"}{" "}
            was the correct answer!
          </p>
          <p className="text-gray-700">Score: {score}</p>
          <p className="text-gray-700">Time taken: {timeTaken} seconds</p> */}
          <button
            onClick={handleNextQuestion}
            className="mt-4 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
