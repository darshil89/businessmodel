"use client";
import React, { useState, useEffect } from "react";
import questionsData from "../../data/data";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [counter, setCounter] = useState(15);
  //track of score
  const [firstScore, setFirstScore] = useState(0);
  const [secondScore, setSecondScore] = useState(0);
  const [thirdScore, setThirdScore] = useState(0);
  const [fourthScore, setFourthScore] = useState(0);
  const [fifthScore, setFifthScore] = useState(0);
  

  const [counterScore, setCounterScore] = useState(15);

  const handleAnswer = (selectedOption) => {
    if (!isAnswered) {
      const currentAnswer = questionsData[currentQuestion].correctAnswer;
      const isCorrect = currentAnswer === selectedOption;

      setScore((prevScore) => (isCorrect ? prevScore + 10 : prevScore + 2));

      setIsAnswered(true);
    }
  };

  const handleNextQuestion = () => {
    setCounter(15);
    if (counterScore == 12) {
      setFirstScore(score);
    } else if (counterScore == 24) {
      setSecondScore(score - firstScore);
    } else if (counterScore == 36) {
      setThirdScore(score - firstScore - secondScore);
    } else if (counterScore == 48) {
      setFourthScore(score - firstScore - secondScore - thirdScore);
    } else if (counterScore == 60) {
      setFifthScore(
        score - firstScore - secondScore - thirdScore - fourthScore
      );
    }

    setCounterScore((prevScore) => prevScore + 1);
    setIsAnswered(false);
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setIsQuizCompleted(true);
      alert(
        `Quiz completed! Your final score is ${score} and total time taken is ${timeTaken} seconds.`
      );
    }
  };

  useEffect(() => {
    let timer;
    if (!isAnswered) {
      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
        if (counter == 1) {
          handleNextQuestion();
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentQuestion, isAnswered, counter]);

  if (
    firstScore > 0 ||
    secondScore > 0 ||
    thirdScore > 0 ||
    fourthScore > 0 ||
    fifthScore > 0
  ) {
    console.log(firstScore, secondScore, thirdScore, fourthScore, fifthScore);
  }

  if (!isQuizCompleted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Question {currentQuestion + 1}
        </h2>

        <p className="text-gray-800 mb-4">
          {questionsData[currentQuestion].question}
        </p>

        {/* Timer Section */}
        <div className="text-center mb-4">
          <p className="text-lg font-bold text-blue-500">
            Time remaining: {counter}
          </p>
        </div>

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
              {isQuizCompleted ? "Finish" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg text-center">
        <div className="text-3xl font-bold mb-4">Results</div>
        <div className="result-box bg-blue-500 text-white py-3 px-6 mb-4">
          Passion Of Success: {firstScore}
        </div>
        <div className="result-box bg-green-500 text-white py-3 px-6 mb-4">
          Independent Drive: {secondScore}
        </div>
        <div className="result-box bg-yellow-500 text-gray-800 py-3 px-6 mb-4">
          Innovative Spirit: {thirdScore}
        </div>
        <div className="result-box bg-red-500 text-white py-3 px-6 mb-4">
          Strategic Risk Management: {fourthScore}
        </div>
        <div className="result-box bg-purple-gray-500 text-white py-3 px-6 mb-4">
          Overall Score: {score}
        </div>
      </div>
    );
  }
};

export default QuizApp;
