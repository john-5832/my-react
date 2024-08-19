import React, { useState } from 'react';

// Child Component
const InputField = ({ updateValue }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(e) => updateValue(e.target.value)} // Call the prop function on change
      />
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const [inputValue, setInputValue] = useState(''); // State to manage input value

  // Function to update the input value
  const handleInputChange = (value) => {
    setInputValue(value); // Update the state with the new value
  };

  return (
    <div>
      <h1>Input Value: {inputValue}</h1>
      {/* Pass the handleInputChange function as a prop to InputField */}
      <InputField updateValue={handleInputChange} />
    </div>
  );
};

export default ParentComponent;
