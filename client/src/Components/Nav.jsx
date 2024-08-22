import Logo from '../assets/Logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <img src={Logo} alt="Logo" className="h-14 mr-1 object-fit-contain" />
      <Link to="/" className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text">ResumeAI</Link>
      <ul className="flex items-center ml-4">
        <li className="mr-4">
          <Link to="/about" className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out">About</Link>
        </li>
        <li className="mr-4">
          <Link to="/contact" className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out">Contact</Link>
        </li>
        <li className="mr-4">
          <Link to="/pricing" className="text-gray-600 hover:text-blue-900 transition duration-300 ease-in-out">Pricing</Link>
        </li>
      </ul>
      <div className="ml-auto flex items-center">
        <Link to="/login" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mr-4">Log In</Link>
        <Link to="/sign-up" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Nav;
