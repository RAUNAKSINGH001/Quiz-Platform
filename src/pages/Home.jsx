import React from 'react'
import HomeComp from '../components/HomeComp'
import {NavLink , Link , useNavigate} from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (

    <div className='my-[12vh] w-[90vw] rounded-2xl border-2  flex items-center flex-col justify-center py-[4vh]'>
      <h1 className='text-3xl font-extrabold'>Welcome to the Quizzy...</h1>
      <HomeComp/>
      <button className='rounded-2xl border-2 py-2 px-20 active:scale-90 hover:bg-white hover:text-black' onClick={(ele)=>
        {
          ele.preventDefault
          navigate("/test")
        }
      }>Go to Quiz</button>
    </div>
  )
}

export default Home