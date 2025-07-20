import React from "react";
import Options from "./Options";
import { useState, useEffect } from "react";
import quizData from "../assets/quizData.js";
function Question({ subject, questionNo, layout }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      {quizData[subject].map((ques, idx) => (
        <div
          key={idx}
          className="px-4 py-3 flex flex-col gap-2 rounded-2xl h-[54vh] bg-gray-50"
        >
          <h1>Question : {idx+1} </h1>
          <h1>{ques.question}</h1>
          <div
            id="opti"
            className="px-4 flex gap-2 py-4 flex-col bg-gray-200 text-black h-[40vh] rounded-2xl "
          >
            {ques.options.map((option, i) => (
                <div key={i}>
                  <Options option={option} />
                </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Question;