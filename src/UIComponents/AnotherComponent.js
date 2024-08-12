import React from 'react';
import { useSelector } from 'react-redux';

const AnotherComponent = () => {
  const userData = useSelector(state => state.sharedState.userData);

  return (
    <div>
      <h2>Another Component</h2>
      <p>User Data from Shared State: {userData ? userData.name : 'No data'}</p>
    </div>
  );
};

export default AnotherComponent;
