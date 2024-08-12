import React from 'react';


const dummyUser = {
  name: 'Abhishek Maurya',
  email: 'abhi@example.com',
  username: 'abmaurya07'
};

const UserProfile = ({ user = dummyUser }) => {

  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
};

export default UserProfile;