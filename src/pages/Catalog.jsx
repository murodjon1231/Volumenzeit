import React from 'react';
import { useNavigate } from 'react-router-dom';
import watchData from '../data/watchData';

const Catalog = () => {
  const navigate = useNavigate();

  const handleAddToCart = (watch) => {
    navigate('/cart', { state: watch });
  };

  return (
    <div>
      <div className="bg-[#735CFF] w-full p-8">
        <h1 className="font-normal text-[42px] leading-[25px] tracking-[0%] font-space-age pt-[88px] pb-[25px] text-white">
          Products
        </h1>
        <p className="font-normal text-[14px] leading-[12px] tracking-[0%] font-poppins pb-[52px] text-white">
          {watchData.length} Total Products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {watchData.map((watch) => (
          <div
            key={watch.id}
            className="border rounded-xl overflow-hidden text-center p-4 shadow-lg bg-white"
          >
            <img
              src={watch.image}
              alt={watch.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-poppins text-lg font-medium mb-2">{watch.name}</h3>
            <p className="font-poppins text-sm text-gray-600 mb-4">{watch.price}</p>
            <button
              onClick={() => handleAddToCart(watch)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-poppins text-sm"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
