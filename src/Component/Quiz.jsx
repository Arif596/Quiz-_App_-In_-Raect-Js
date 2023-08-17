import React, { useEffect, useState } from "react";

export default function Quiz({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handelAnswer = (a) => {
    setSelectAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(6000, () => {
       if(a.correct){
        alert('answer correct')
        setQuestionNumber(prev=>prev+1)
       }
       else{
        alert('answer wrong')
        setStop(true)
       
       }
      });
  };

  return (
    <div className="mainco">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            key={a.text}
            className={selectAnswer === a ? className : "answer"}
            onClick={() => handelAnswer(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
