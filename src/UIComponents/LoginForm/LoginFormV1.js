import React, { useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa'; 
import CustomButton from './CustomButton';
const LoginForm = () => { 
  const [username, setUsernameState] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      setLoading(true);
     setTimeout(() => {
      setLoading(false);
         
     }, 1000)

    } catch (err) {
      setError('Invalid credentials');
      setLoading(false);
    }


  };


  return (
    <div className="w-full max-w-md rounded-xl shadow-lg p-8 bg-white/30 backdrop-blur-md border border-gray-300">
      <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setUsernameState(e.target.value)}
          />
          <FaUser className="absolute top-3 right-3 text-gray-400" />
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FaLock className="absolute top-3 right-3 text-gray-400" />
        </div>
       
       <CustomButton type='submit' loading={loading}>
          Login
          </CustomButton>
        
      </form>
      <p className="mt-4 text-center text-gray-600">
        Don&lsquo;t have an account?
        <a className="text-purple-600 font-semibold hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
