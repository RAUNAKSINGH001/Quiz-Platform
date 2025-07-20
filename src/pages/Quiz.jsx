import React from 'react'
import Question from '../components/Question'
import {useParams} from 'react-router-dom'
function Quiz() {
const {subject} =useParams();
const {questionNo} =useParams();
const {layout} =useParams();

  return (
    <div className='cursor-pointer my-[12vh] text-black text-xl border-amber-200 w-[90vw] rounded-2xl border-2  flex items-center flex-col justify-center py-[4vh]'>
      <Question subject={subject} questionNo={questionNo} layout={layout}/>
    </div>
  )
}

export default Quiz;