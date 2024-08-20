import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <p className="text-lg font-bold text-gray-800">
          ResumeAI
        </p>
      </div>
      <ul className="flex items-center justify-end space-x-12 mr-8">
        <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
            </Link>
        </li>
        <li>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
                About
            </Link>
        </li>
        <li>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
            </Link>
        </li>
        <li>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
                Login
            </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
