import React, { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lime-300 p-4 md:p-6 lg:p-3" >
      <div className="container mx-auto md:mx-4 lg:mx-6">
        <div className="flex justify-between items-center md:justify-start lg:justify-between" >
          <div className="md:hidden">
            <button className="flex items-center p-2 text-gray-400 no-underline" onClick={() => setIsOpen(!isOpen)}>
              <svg className="fill-current h-10 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-6  py-2 px-4 ">
            <a href="#" className="rgb(22 163 74) hover:text-gray-300  no-underline md:text-lg lg:text-xl">Home</a>
            <a href="#" className="rgb(22 163 74) hover:text-gray-300 md:text-lg lg:text-xl">About</a>
            <a href="#" className="rgb(22 163 74) hover:text-gray-300 md:text-lg lg:text-xl">Services</a>
            <a href="#" className="rgb(22 163 74) hover:text-gray-300 md:text-lg lg:text-xl">Contact</a>
          </div>
        </div>
        <div className={`${isOpen ? `block` : `hidden`} md:hidden mobile-menu`}>
          <ul>
            <li><a href="#" className="rgb(22 163 74) hover:text-gray-300  no-underline">Home</a></li>
            <li><a href="#" className="rgb(22 163 74)  hover:text-gray-300">About</a></li>
            <li><a href="#" className="rgb(22 163 74)  hover:text-gray-300">Services</a></li>
            <li><a href="#" className="rgb(22 163 74)  hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;