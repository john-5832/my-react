import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // State to track time
  const intervalRef = useRef(null); // Ref to store the interval ID

  // Start the stopwatch
  const startTimer = () => {
    if (intervalRef.current === null) { // Only start if not already running
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time by 1 every second
      }, 1000);
    }
  };

  // Stop the stopwatch
  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current); // Clear the interval
      intervalRef.current = null; // Reset the ref to null
    }
  };

  // Reset the stopwatch
  const resetTimer = () => {
    stopTimer(); // Stop the timer first
    setTime(0); // Reset time to 0
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {time} seconds</p>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
