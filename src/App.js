import React from 'react';
import './App.css';
// import Handlesubmit from './Ex_1';
import StateCityDropdown from './Ex_2';
import UserForm from './Ex_3';
import CountdownTimer from './Ex_4';
import AutoCountdownTimer from './Ex_5';
import DigitalClock from './Ex_6';
import RandomQuote from './Ex_7';
import ShoppingCart from './Ex_8';
import ItemList from './Ex_9';
import TodoList from './Ex_10';
import InputFocus from './Ex_12';
import ParentComponent from './Ex_.13';
import RegisterForm from './Ex_14';


function App() {
  return (
    <>
    {/* <Handlesubmit/> */}
    <StateCityDropdown />
    <UserForm/>
    <CountdownTimer/>
    <AutoCountdownTimer/>
    <DigitalClock/>
    <RandomQuote/>
    <ShoppingCart/>
    <ItemList/>
    <TodoList/>
    <InputFocus/>
    <ParentComponent/>
    {/* <RegisterForm/> */}
    
    </>
  );
}
export default App;
