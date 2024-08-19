import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // State to hold the current countdown value
  const [count, setCount] = useState(100); // Starts countdown from 10
  const [isActive, setIsActive] = useState(false); // To track if the timer is active

  // useEffect to handle the countdown logic
  useEffect(() => {
    let timer;

    // Only start the timer if it's active and the count is greater than 0
    if (isActive && count > 0) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000); // Decrease the count every 1 second
    }

    // Cleanup function to clear the interval when the component unmounts or count changes
    return () => clearInterval(timer);
  }, [isActive, count]); // Dependency array with isActive and count

  // Function to start the countdown
  const startTimer = () => {
    setIsActive(true);
  };

  // Function to reset the countdown
  const resetTimer = () => {
    setIsActive(false);
    setCount(100); // Reset to initial value (10)
  };

  return (
    <div>
      <h1>Countdown: {count}</h1>
      <button onClick={startTimer} disabled={isActive || count === 0}>
        Start Countdown
      </button>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default CountdownTimer;