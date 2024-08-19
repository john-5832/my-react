import React, { useReducer } from 'react';

// Initial state for the cart
const initialState = {
  items: [], // List of items in the cart
  totalQuantity: 0 // Total quantity of all items
};

// Reducer function to handle different actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if the item is already in the cart
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItemIndex >= 0) {
        // Update the quantity of the existing item
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add the new item to the cart
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        totalQuantity: state.totalQuantity + 1
      };

    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);

      return {
        ...state,
        items: filteredItems,
        totalQuantity: state.totalQuantity - action.payload.quantity
      };

    case 'CLEAR_CART':
      return initialState; // Reset the cart to the initial state

    default:
      return state;
  }
};

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState); // Initialize useReducer with the reducer and initial state
  
    const addItem = (item) => {
      dispatch({ type: 'ADD_ITEM', payload: item }); // Dispatch the ADD_ITEM action
    };
  
    const removeItem = (item) => {
      dispatch({ type: 'REMOVE_ITEM', payload: item }); // Dispatch the REMOVE_ITEM action
    };
  
    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' }); // Dispatch the CLEAR_CART action
    };
  
    return (
      <div>
        <h1>Shopping Cart</h1>
        <button onClick={() => addItem({ id: 1, name: 'Apple' })}>Add Apple</button>
        <button onClick={() => addItem({ id: 2, name: 'Orange' })}>Add Orange</button>
        <button onClick={clearCart}>Clear Cart</button>
  
        <h2>Cart Items</h2>
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.name} (x{item.quantity})
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
  
        <p>Total Quantity: {state.totalQuantity}</p>
      </div>
    );
  };
  
  export default ShoppingCart;
  