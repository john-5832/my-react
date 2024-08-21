import React, { useState } from 'react';

// Child component
function Child({ onButtonClick }) {
  return (
    <div>
      <button onClick={onButtonClick}>Click Me!</button>
    </div>
  );
}

// Parent component
function Parent() {
  // State in the parent component
  const [message, setMessage] = useState("Hello, World!");

  // Function to update the state
  const handleClick = () => {
    setMessage("Button Clicked!");
  };

  return (
    <div>
      <h1>{message}</h1>
      {/* Passing the function as a prop to the child */}
      <Child onButtonClick={handleClick} />
    </div>
  );
}

export default Parent;
