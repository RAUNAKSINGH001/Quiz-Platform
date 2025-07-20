import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Test() {
  const navigateToHome = useNavigate();
  const navigateToQuiz = useNavigate();
  const [subject, setSubject] = useState("C++");
  const [questionNo, setQuestionNo] = useState(20);
  const [layout, setLayout] = useState("scroll");

  return (
    <div className="my-[12vh] w-[90vw] rounded-2xl border-2  flex items-center flex-col justify-center gap-25 py-[4vh]">
      <h1 className="text-6xl text-white font-extrabold">
        Let's start the quiz{" "}
      </h1>
      <div className="rounded-2xl  flex gap-10 px-10 py-2">
        <button
          className=" active:scale-90  hover:bg-white hover:text-black  rounded-2xl px-4  py-4 "
          onClick={(ele) => {
            ele.preventDefault;
            navigateToHome("/");
          }}
        >
          Go back
        </button>

        <div>
          <label
            htmlFor="subject"
            className="rounded-2xl  px-2 py-4 shadow-sm  text-white"
          >
            Choose Subject:
          </label>
          <select
            className="  rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  px-4 py-4"
            name="subject"
            id="subject"
            value={subject}
            onChange={(ele) => setSubject(ele.target.value)}
          >
            <option className="  bg-black" value="C++">
              C++
            </option>
            <option className="  bg-black" value="C">
              C
            </option>
            <option className="  bg-black" value="Python">
              Python
            </option>
            <option className="  bg-black" value="Javascript">
              Javascript
            </option>
            <option className="  bg-black" value="machineLearning">
              Machine Learning
            </option>
            <option className="  bg-black" value="AI">
              AI
            </option>
            <option className="  bg-black" value="CLoud Computing">
              Cloud Computing
            </option>
          </select>
        </div>
        <div>
          <label
            htmlFor="questionNo"
            className="rounded-2xl px-2 py-4 shadow-sm  text-white"
          >
            Choose no. question:
          </label>
          <select
            className="rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  px-4  py-4"
            name="questionNo"
            id="questionNo"
            onChange={(ele) => setQuestionNo(ele.target.value)}
          >
            <option className="  bg-black" value="10">
              10
            </option>
            <option className="  bg-black" value="20">
              20
            </option>
            <option className="  bg-black" value="3p">
              30
            </option>
            <option className="  bg-black" value="40">
              40
            </option>
            <option className="  bg-black" value="50">
              50
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="layout"
            className="rounded-2xl  px-2 py-4 shadow-sm  text-white"
          >
            Choose Layout:
          </label>
          <select
            className="rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  px-4 py-4 "
            name="layout"
            id="layout"
            onChange={(ele) => setLayout(ele.target.value)}
          >
            <option className="  bg-black" value="swipe">
              Swipe
            </option>
            <option className="  bg-black" value="scroll">
              Scroll
            </option>
          </select>
        </div>
        <button
          className=" active:scale-90 bg-blue-600 hover:bg-white hover:text-black rounded-2xl   px-6  py-4 "
          onClick={(ele) => {
            ele.preventDefault;
            navigateToQuiz(`/quiz/${subject}/${questionNo}/${layout}`);
          }}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Test;