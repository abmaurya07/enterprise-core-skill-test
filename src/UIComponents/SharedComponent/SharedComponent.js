import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '@store/features/sharedStateSlice';

const SharedComponent = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.sharedState.userData);

  const handleChange = (e) => {
    dispatch(setUserData({ name: e.target.value }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Shared Component</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <p className="mt-4 text-gray-700">
        Current User Data: {userData ? userData.name : 'No data'}
      </p>
    </div>
  );
};

export default SharedComponent;
