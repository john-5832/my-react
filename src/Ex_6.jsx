import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>Current Time:</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default DigitalClock;
