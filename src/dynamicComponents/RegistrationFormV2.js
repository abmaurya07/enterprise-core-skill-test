import React from 'react';

const RegistrationFormV2 = () => {
  return (
    <div>
      <h2>Registration Form V2</h2>
      <form>
        <label>Full Name: </label>
        <input type="text" name="fullName" />
        <br />
        <label>Email Address: </label>
        <input type="email" name="email" />
        <br />
        <label>Phone Number: </label>
        <input type="tel" name="phone" />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationFormV2;
