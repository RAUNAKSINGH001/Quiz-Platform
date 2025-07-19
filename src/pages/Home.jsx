import React from 'react'
import HomeComp from '../components/HomeComp'
function Home() {
  return (
    <div className='my-[12vh] w-[90vw] rounded-2xl border-2  flex items-center flex-col justify-center py-[4vh]'>
      <h1 className='text-3xl font-extrabold'>Welcome to the Quizzy...</h1>
      <HomeComp/>
    </div>
  )
}

export default Home
