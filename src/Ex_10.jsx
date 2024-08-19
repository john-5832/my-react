import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);  // State for tasks
  const [newTask, setNewTask] = useState('');  // State for new task input

  // Add a new task to the list
  const addTask = () => {
    if (newTask.trim()) {  // Check if input is not empty
      setTasks([...tasks, newTask]);  // Add the new task
      setNewTask('');  // Clear the input field
    }
  };

  // Remove a task from the list
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);  // Filter out the task by index
    setTasks(updatedTasks);  // Update the tasks state
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}  // Update the newTask state as the user types
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => removeTask(index)}>Remove</button>  {/* Button to remove the task */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
