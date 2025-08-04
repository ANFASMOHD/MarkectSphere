import React from 'react';
import imgReg from '../../assets/register.jpg'
function Register() {4
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        
        {/* Image Section */}
   
          <img
            src={imgReg}
            alt="Register"
            className="object-contain max-h-64"
          />
     

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4 text-black">
  
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white text-black"
            />
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}

export default Register;
