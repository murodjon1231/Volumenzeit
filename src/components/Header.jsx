// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold text-gray-800">Часы</Link>
      <nav className="space-x-6">
        <Link to="/catalog" className="text-gray-600 hover:text-black">Каталог</Link>
        <Link to="/about" className="text-gray-600 hover:text-black">О нас</Link>
        <Link to="/contact" className="text-gray-600 hover:text-black">Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;
