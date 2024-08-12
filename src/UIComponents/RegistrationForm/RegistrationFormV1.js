import React from 'react';

const RegistrationFormV1 = () => {
  return (
    <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg max-w-sm mx-auto border border-gray-200">
      <h2 className="text-3xl font-semibold mb-8 text-teal-600">Registration Form V1</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-teal-800">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-teal-400 focus:outline-none focus:border-teal-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-teal-800">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-teal-400 focus:outline-none focus:border-teal-600"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationFormV1;
