import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Quiz from "./Component/Quiz";
import Timer from "./Component/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earn, setEarn] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that spacializes in what type of product?",
      answers: [
        { text: "Phones", correct: false },
        { text: "watches", correct: true },
        { text: "food", correct: false },
        { text: "cosmetic", correct: false },
      ],
    },
    {
      id: 2,
      question: "when did the website  facebbok launch",
      answers: [
        { text: 2005, correct: false },
        { text: 2006, correct: true },
        { text: 2009, correct: false },
        { text: 2010, correct: false },
      ],
    },
    {
      id: 3,
      question:
        "What is the main characters name in the Harry Potter book series?",
      answers: [
        { text: "Zephyria", correct: false },
        { text: "Harry Potter", correct: true },
        { text: "Wondertown", correct: false },
        { text: "Wonder mole", correct: false },
      ],
    },
    {
      id: 4,
      question: "Which gas is responsible for the ozone layer depletion?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: false },
        { text: "Chlorofluorocarbons (CFCs)", correct: true },
        { text: "Nitrogen", correct: false },
      ],
    },
    {
      id: 5,
      question: "What is the smallest prime number?",
      answers: [
        { text: "1", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
        { text: "5", correct: false },
      ],
    },
    {
      id: 6,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false }
      ]
    },
    {
      id: 7,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "Leo Tolstoy", correct: false }
      ]
    },
    {
      id: 8,
      question: "What is the largest mammal?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Hippopotamus", correct: false }
      ]
    },
    {
      id: 9,
      question: "Which gas do plants use for photosynthesis?",
      answers: [
        { text: "Oxygen", correct: false },
        { text: "Carbon Dioxide", correct: true },
        { text: "Hydrogen", correct: false },
        { text: "Nitrogen", correct: false }
      ]
    },
    {
      id: 10,
      question: "Which planet is known as the 'Morning Star'?",
      answers: [
        { text: "Venus", correct: true },
        { text: "Mars", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      id: 11,
      question: "Who painted the 'Starry Night'?",
      answers: [
        { text: "Vincent van Gogh", correct: true },
        { text: "Leonardo da Vinci", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false }
      ]
    },
    {
      id: 12,
      question: "What is the chemical symbol for the element gold?",
      answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Hg", correct: false },
        { text: "Pt", correct: false }
      ]
    },
    {
      id: 13,
      question: "Who wrote the play 'Hamlet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Jane Austen", correct: false },
        { text: "Mark Twain", correct: false },
        { text: "Charles Dickens", correct: false }
      ]
    },
    {
      id: 14,
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Venus", correct: false },
        { text: "Mars", correct: false },
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false }
      ]
    },
    {
      id: 15,
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "Vincent van Gogh", correct: false },
        { text: "Leonardo da Vinci", correct: true },
        { text: "Pablo Picasso", correct: false },
        { text: "Michelangelo", correct: false }
      ]
    },
  ];
  const pyramidmoney = useMemo(() =>
    [
      {
        id: 1,
        amount: "$100",
      },
      {
        id: 2,
        amount: "$5000",
      },
      {
        id: 3,
        amount: "$7000",
      },
      {
        id: 4,
        amount: "$800",
      },
      {
        id: 5,
        amount: "$9000",
      },
      {
        id: 6,
        amount: "$1030",
      },
      {
        id: 7,
        amount: "$7663",
      },
      {
        id: 8,
        amount: "$7663",
      },
      {
        id: 9,
        amount: "$7688",
      },
      {
        id: 10,
        amount: "$10000",
      },
      {
        id: 11,
        amount: "$11000",
      },
      {
        id: 12,
        amount: "$120001",
      },
      {
        id: 13,
        amount: "$1200034",
      },
      {
        id: 14,
        amount: "$1500044",
      },
      {
        id: 15,
        amount: "$20000443",
      },
    ].reverse()
  );
  useEffect(() => {
    questionNumber > 1 &&
      setEarn(pyramidmoney.find((m) => m.id === questionNumber - 1).amount);
  }, [pyramidmoney, questionNumber]);
  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <div className="earning">You earn:{earn}</div>
        ) : (
          <>
            <div className="top">
              <div className="counter">
                <Timer setStop={setStop}
                questionNumber={questionNumber}/>
              </div>
            </div>
            <div className="bottom">
              <Quiz
                data={data}
                setStop={setStop}
                setQuestionNumber={setQuestionNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>

      <div className="pyramid">
        <ul className="moneylist">
          <h1 className="heading">Amounts</h1>
          {pyramidmoney.map((item) => (
            <li
              className={
                questionNumber === item.id
                  ? "listmoneyitem active"
                  : "listmoneyitem"
              }
            >
              <span className="listitemnum">{item.id}</span>
              <span className="listitemamount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
