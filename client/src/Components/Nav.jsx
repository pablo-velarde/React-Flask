import React from 'react';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <a href="#" className="text-lg font-bold text-gray-800">
          ResumeAI
        </a>
      </div>
      <ul className="flex items-center justify-end space-x-12 mr-8">
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
