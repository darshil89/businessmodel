"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const questionsData = [
  {
    id: 1,
    question: "Doing a job right is more important than making people happy.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 2,
    question:
      "I believe that listening to others' opinions can sometimes lead to better decisions than relying on my own judgment.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 3,
    question:
      "At times, I have so many thoughts I can't decide which one to choose.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 13,
    question: "I don't like to make guesses.",
    options: ["agree", "disagree"],
    correctAnswer: "disagree",
  },
  {
    id: 14,
    question: "I enjoy beginning new projects even if they are risky.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 15,
    question: "I achieve what I want in life by working hard for it.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 25,
    question: "I usually stick to my plans when I decide to do something.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 26,
    question:
      "I often stand up for my beliefs when others don't agree with me.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 27,
    question:
      "I often find that I achieve more when I work with others than alone.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },

  {
    id: 37,
    question: "I usually don't need or want help with a task.",
    options: ["agree", "disagree"],
    correctAnswer: "disagree",
  },
  {
    id: 38,
    question:
      "I like to be fairly good at many things instead of excellent at just one.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 39,
    question:
      "I'm willing to take chances if there's a fair possibility of success.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },

  {
    id: 49,
    question: "If I might fail, I prefer not to try.",
    options: ["agree", "disagree"],
    correctAnswer: "disagree",
  },
  {
    id: 50,
    question:
      "To be successful, you have to be in the right place at the right time.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 51,
    question:
      "If a task is giving me trouble, I leave it and do something else.",
    options: ["agree", "disagree"],
    correctAnswer: "disagree",
  },
];

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

  const [counterScore, setCounterScore] = useState(1);

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
    if (counterScore == 3) {
      setFirstScore(score);
    } else if (counterScore == 6) {
      setSecondScore(score - firstScore);
    } else if (counterScore == 9) {
      setThirdScore(score - firstScore - secondScore);
    } else if (counterScore == 12) {
      setFourthScore(score - firstScore - secondScore - thirdScore);
    } else if (counterScore == 15) {
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
        if (!isQuizCompleted) {
          setTimeTaken((prev) => prev + 1);
        }
        if (counter == 1) {
          handleNextQuestion();
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentQuestion, isAnswered, counter]);

  if (!isQuizCompleted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Question {currentQuestion + 1}
        </h2>

        <p className="text-gray-700 text-xl mb-4">
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
    const data1 = {
      labels: [
        "Passion Of Success",
        "Independent Drive",
        "Innovative Spirit",
        "Strategic Risk Management",
        "Resolute Motivation",
      ],
      datasets: [
        {
          label: "Analysis of your score",
          data: [firstScore, secondScore, thirdScore, fourthScore, fifthScore],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    //donut chart for calculating your score / total score
    const data2 = {
      labels: ["Your Score", "Total Score"],
      datasets: [
        {
          label: "Judgement",
          data: [score, 150],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg text-center">
        <div className="text-3xl text-gray-500 font-bold mb-4">Results</div>
        {/* <div className="result-box bg-blue-300 text-white py-3 px-6 mb-4">
          Passion Of Success: {firstScore}
        </div>
        <div className="result-box bg-green-300 text-white py-3 px-6 mb-4">
          Independent Drive: {secondScore}
        </div>
        <div className="result-box bg-yellow-200 text-white py-3 px-6 mb-4">
          Innovative Spirit: {thirdScore}
        </div>
        <div className="result-box bg-red-300 text-white py-3 px-6 mb-4">
          Strategic Risk Management: {fourthScore}
        </div>
        <div className="result-box bg-red-300 text-white py-3 px-6 mb-4">
          Resolute Motivation: {fifthScore}
        </div> */}
        <div className="result-box bg-orange-300 text-white py-3 px-6 mb-4">
          Overall Score: {score / 1.5} %
        </div>
        <div className="result-box bg-purple-300 text-white py-3 px-6 mb-4">
          Total Time: {timeTaken + 15 } seconds
        </div>

        <div>
          <Bar data={data1} />
        </div>

        <div>
          <Doughnut
            data={data2}
            options={{
              maintainAspectRatio: false,
              aspectRatio: 1,
            }}
            width={500}
            height={500}
          />
        </div>
      </div>
    );
  }
};

export default QuizApp;
