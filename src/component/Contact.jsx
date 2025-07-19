import React, { useState } from 'react'; 
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', 'f8076ade-2795-4ff7-b001-fff146d7264a');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      setName('');
      setEmail('');
      setMessage('');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
    initial={{ opacity:0, x : 100 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity:1, x : 0  }}
        viewport={{ once: false, amount: 0.2 }}
    
    className="w-full flex justify-center h-auto items-center px-9 mt-3" id="Contact">
      <form onSubmit={onSubmit} className="flex flex-wrap justify-center items-center w-auto md:w-[600px]">
        <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-4 mb-8 md:mb-0">
          {/* Name Field */}
          <div className="w-full md:w-1/2 my-3">
            <div className="relative">
              <input
                type="text"
                required
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 peer outline-blue-900 rounded-md p-4"
              />
              <label
                className={`absolute left-4 transition-all duration-300 ${
                  name ? 'top-[-10px] text-sm text-blue-900' : 'top-[16px] text-gray-500'
                } peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-900 bg-white`}
              >
                Your Name
              </label>
            </div>
          </div>
          {/* Email Field */}
          <div className="w-full md:w-1/2 my-3">
            <div className="relative">
              <input
                type="email"
                required
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 peer outline-blue-900 rounded-md p-4"
              />
              <label
                className={`absolute left-4 transition-all duration-300 ${
                  email ? 'top-[-10px] text-sm text-blue-900' : 'top-[16px] text-gray-500'
                } peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-900 bg-white`}
              >
                Email
              </label>
            </div>
          </div>
        </div>
        {/* Message Field */}
        <div className="w-full my-3">
          <div className="relative">
            <textarea
              name="Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 peer rounded-md w-full p-4 h-32 md:h-40 outline-blue-900 resize-none"
            ></textarea>
            <label
              className={`absolute left-4 transition-all duration-300 ${
                message ? 'top-[-10px] text-sm text-blue-900' : 'top-[24px] text-gray-500'
              } peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-900 bg-white`}
            >
              Message
            </label>
          </div>
        </div>
        {/* Submit Button */}
        <div className="items-center justify-center flex flex-col my-4">
          <button
            type="submit"
            className="  px-10 py-1 border-2 border-blue-900 bg-blue-900 rounded-md text-xl hover:border-blue-900 hover:bg-white hover:text-blue-900 transition-all duration-300 text-white"
          >
            Submit
          </button>
          <span className="text-right text-gray-500 my-4">{result}</span>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
