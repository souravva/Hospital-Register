import React from 'react';

const Register = () => {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Register</h2>
      <input className="w-full p-2 border mb-4" placeholder="Name" />
      <input className="w-full p-2 border mb-4" placeholder="Email" />
      <input className="w-full p-2 border mb-4" type="password" placeholder="Password" />
      <button className="w-full bg-green-500 text-white p-2 rounded">Register</button>
    </div>
  );
};

export default Register;
