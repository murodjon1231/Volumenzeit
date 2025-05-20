import React, { useState } from 'react';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMessageToTelegram = async () => {
    const botToken = '6410356545:AAGRbvJnRmLcIvEZbpgoT2ZWv3RCVua_fmw';
    const chatId = '6226950895'; 

    const text = `
📥 Yangi Xabar:
👤 Ismi: ${fullName}
📧 Email: ${email}
💬 Xabar: ${message}
`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });
      alert('Xabar muvaffaqiyatli yuborildi!');
      setFullName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Telegramga yuborishda xatolik:', error);
      alert('Xabar yuborilmadi. Qayta urinib ko‘ring.');
    }
  };

  return (
    <div className="flex justify-between items-center w-full h-screen bg-[#F5F5F5] px-[100px]">
      <div>
        <h1 className='font-spaceage font-normal text-[42px] leading-[50px] tracking-[0%]'>Contact Us</h1>
        <p className='text-[#939393] font-poppins font-normal text-[14px] leading-[28px] tracking-[0%] w-[500px] pt-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect
        </p>
        <div>
          <input
            className='w-[400px] border-[#EAECF5] p-4 border rounded-2xl mt-5'
            type="text"
            placeholder='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <input
            className='w-[400px] border-[#EAECF5] p-4 border rounded-2xl mt-5'
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className='w-[400px] border-[#EAECF5] p-4 border rounded-2xl mt-5 pb-28'
            type="text"
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button
            className='bg-[#735CFF] p-4 rounded text-[#FFFFFF] mt-5'
            onClick={sendMessageToTelegram}
          >
            Send Message
          </button>
        </div>
      </div>
      <div>
        <img src="/img5.svg" alt="" />
      </div>
    </div>
  );
};

export default Contact;
