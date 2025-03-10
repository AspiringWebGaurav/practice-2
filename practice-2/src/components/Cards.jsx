import React, { useState, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from '../redux/slices/index.js'

const Cards = () => {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  const [isAnimating, setIsAnimating] = useState(false);
  const countIntervalRef = useRef(null);

  const handleCount = (type) => {
    setIsAnimating(true);
    if (type === "increase") {
      dispatch(increment());
    } else if (type === "decrease") {
      dispatch(decrement());
    } else {
      dispatch(reset());
    }
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Start continuous counting on mouse down
  const startCounting = (type) => {
    handleCount(type); // Initial count
    countIntervalRef.current = setInterval(() => {
      handleCount(type);
    }, 150); // Adjust this number to control counting speed
  };

  // Stop counting on mouse up or mouse leave
  const stopCounting = () => {
    if (countIntervalRef.current) {
      clearInterval(countIntervalRef.current);
      countIntervalRef.current = null;
    }
  };

  return (
    <div className="h-screen flex flex-col p-4">
      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80vh]">
        {/* Increase Card */}
        <div className="h-full bg-green-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Increase
          </h2>
          <button
            onMouseDown={() => startCounting("increase")}
            onMouseUp={stopCounting}
            onMouseLeave={stopCounting}
            onTouchStart={() => startCounting("increase")}
            onTouchEnd={stopCounting}
            className="bg-white text-green-500 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full 
              hover:bg-green-100 transition-colors flex items-center justify-center active:scale-95 
              select-none touch-none"
          >
            <FaPlus className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </button>
        </div>

        {/* Count Card */}
        <div className="h-full bg-blue-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Count
          </h2>
          <span
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-transform duration-300
              ${isAnimating ? "animate-count-change" : ""}`}
          >
            {counter}
          </span>
        </div>

        {/* Decrease Card */}
        <div className="h-full bg-red-500 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            Decrease
          </h2>
          <button
            onMouseDown={() => startCounting("decrease")}
            onMouseUp={stopCounting}
            onMouseLeave={stopCounting}
            onTouchStart={() => startCounting("decrease")}
            onTouchEnd={stopCounting}
            className="bg-white text-red-500 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full 
              hover:bg-red-100 transition-colors flex items-center justify-center active:scale-95
              select-none touch-none"
          >
            <FaMinus className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
          </button>
        </div>
      </div>

      {/* Reset Button */}
      <div className="h-[20vh] mt-1">
        <button
          onClick={() => handleCount("reset")}
          className="w-full h-full bg-gray-800 text-white text-xl sm:text-2xl lg:text-3xl font-bold 
            rounded-lg hover:bg-gray-700 transition-colors active:scale-95"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Add this at the top of your file or in your global CSS
const style = document.createElement("style");
style.textContent = `
  @keyframes countChange {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .animate-count-change {
    animation: countChange 0.3s ease-in-out;
  }
`;
document.head.appendChild(style);

export default Cards;
