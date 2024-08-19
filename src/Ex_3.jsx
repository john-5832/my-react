import React, { useState } from "react";

const UserForm = () => {
  // State to store user inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Info:\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* Display real-time input */}
      <div>
        <h3>Real-time Input Display</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default UserForm;
