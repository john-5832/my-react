import React, { useRef } from 'react';

const InputFocus = () => {
  // Create a ref for the input element
  const inputRef = useRef(null);

  // Function to focus the input field
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element using the ref
    }
  };

  return (
    <div>
      <h1>Focus Input Example</h1>
      <input
        ref={inputRef} // Attach the ref to the input element
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
