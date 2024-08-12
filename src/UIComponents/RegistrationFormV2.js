import React from 'react';

const RegistrationFormV2 = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Registration Form V2</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name:</label>
          <input
            type="text"
            name="fullName"
            className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationFormV2;
