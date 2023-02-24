import React from "react"
import { useState } from "react";

export default function SortButton({ currentOrder, setOrder }) {
    const [isChronological, setIsChronological] = useState(true);
  
    function handleClick() {
      setIsChronological(!isChronological);
      setOrder(isChronological ? "reverse chronological" : "chronological");
    }
  
    return (
        <div className="flex justify-center">
            <button 
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 rounded m-4 w-48"
            onClick={handleClick}>
                Sort: {isChronological ? "Chronologically" : "Reverse Chronologically"}
            </button>
        </div>
    );
  }