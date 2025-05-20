import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { state: watch } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    phone: '',
    address: '',
    email: ''
  });

  // Telegram bot token
  const BOT_TOKEN = '6410356545:AAGRbvJnRmLcIvEZbpgoT2ZWv3RCVua_fmw';
  // The chat ID where the message will be sent - this should be your chat ID
  // For testing, we'll use a placeholder. You'll need to replace this with the actual chat ID
  const CHAT_ID = '6226950895'; // Replace with your actual chat ID

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const sendToTelegram = async (product, userData) => {
    try {
      // Format current date and time
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('uz-UZ');
      const formattedTime = currentDate.toLocaleTimeString('uz-UZ');
      
      // Prepare message text with user info
      const message = `
🔴 NEW ORDER 🔴
📝 Product: ${product.name}
💰 Price: ${product.price}
📅 Date: ${formattedDate}
⏰ Time: ${formattedTime}

👤 CUSTOMER INFO:
📋 Full Name: ${userData.fullName}
📱 Phone: ${userData.phone}
🏠 Address: ${userData.address}
📧 Email: ${userData.email || 'Not provided'}
      `;
      
      // Send text message first
      const textResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        }),
      });

      if (!textResponse.ok) {
        throw new Error('Failed to send text message to Telegram');
      }
      
      // Then send the image if available
      if (product.image) {
        const photoResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            photo: product.image,
            caption: `Product: ${product.name} | Customer: ${userData.fullName}`
          }),
        });
        
        if (!photoResponse.ok) {
          console.error('Failed to send image to Telegram');
        }
      }
      
      return true;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form data
    if (!userInfo.fullName || !userInfo.phone || !userInfo.address) {
      toast.error('Please fill in all required fields');
      setIsLoading(false);
      return;
    }
    
    // Send purchase info to Telegram bot
    const sentToTelegram = await sendToTelegram(watch, userInfo);
    
    setIsLoading(false);
    
    // Show success message
    toast.success('Mahsulot muvaffaqiyatli sotib olindi!', {
      position: "top-right",
      autoClose: 2000,
      onClose: () => navigate('/'),
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // If failed to send to Telegram, log error but don't affect user experience
    if (!sentToTelegram) {
      console.error('Failed to notify Telegram bot about the purchase');
    }
  };

  if (!watch) {
    return <div className="p-8 text-red-500">Mahsulot topilmadi.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="font-space-age text-4xl text-black mb-8">Your Cart</h1>
      <div className="max-w-md border p-6 rounded-xl shadow-lg bg-white">
        <img
          src={watch.image}
          alt={watch.name}
          className="w-full h-56 object-contain mb-4"
        />
        <h2 className="font-poppins text-xl font-semibold">{watch.name}</h2>
        <p className="font-poppins text-gray-600 text-sm mb-4">{watch.price}</p>
        
        {!showForm ? (
          <button
            onClick={handleShowForm}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-poppins transition-colors"
          >
            Buy Now
          </button>
        ) : (
          <form onSubmit={handleSubmitOrder} className="mt-4">
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={userInfo.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Address *
              </label>
              <textarea
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                rows="2"
                required
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
              } text-white px-6 py-2 rounded font-poppins transition-colors w-full`}
            >
              {isLoading ? 'Processing...' : 'Complete Purchase'}
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;