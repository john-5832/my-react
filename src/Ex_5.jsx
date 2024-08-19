import React, { useState, useEffect } from "react";

const AutoCountdownTimer = () => {
  // State to hold the countdown value
  const [count, setCount] = useState(10); // Start the countdown from 10

  useEffect(() => {
    // Exit early if the count is already zero
    if (count === 0) return;

    // Set up an interval to decrement the count every second
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // Clean up the interval on component unmount or when count changes
    return () => clearInterval(intervalId);
  }, [count]);

  // Function to reset the countdown
  const resetTimer = () => {
    setCount(10); // Reset to initial value (10)
  };

  return (
    <div>
      <h1>Countdown: {count}</h1>
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
};

export default AutoCountdownTimer;
