import React from 'react';

const RegistrationFormV1 = () => {
  return (
    <div>
      <h2>Registration Form V1</h2>
      <form>
        <label>Name: </label>
        <input type="text" name="name" />
        <br />
        <label>Email: </label>
        <input type="email" name="email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationFormV1;
