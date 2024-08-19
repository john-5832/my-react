import React, { useState } from 'react';

const ItemList = () => {
  // Initialize state with an array of items
  const [items, setItems] = useState(["Apple", "Orange", "Banana"]);

  // Initialize state for the new item input
  const [newItem, setNewItem] = useState("");

  // Handle adding a new item
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]); // Add new item to the list
      setNewItem(""); // Clear input field
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {/* Use map to render each item in the list */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} // Update newItem state as user types
        placeholder="Enter new item"
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ItemList;
