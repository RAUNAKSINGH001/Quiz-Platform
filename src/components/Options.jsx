import React from 'react'
import {useState , useEffect} from 'react';

function Options({option }) {
    const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={`px-2 py-3 rounded-2xl    ${
            isSelected ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
          }
        hover:bg-blue-100 `}>
           
        <h1 onClick={(ele)=>setIsSelected(!isSelected)}>{option}</h1>
    </div>
  )
}

export default Options
