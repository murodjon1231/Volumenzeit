import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className='text-3xl mb-4'>Oops, SOmething
        Went Wrong</h1>
      <img src="/watch5.svg" alt="" />
      <Link to="/" className="px-6 py-3 bg-[#735CFF] text-white rounded mt-4 hover:bg-gray-800 transition">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
