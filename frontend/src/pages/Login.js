import React from 'react';

const Login = () => {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Login</h2>
      <input className="w-full p-2 border mb-4" placeholder="Email" />
      <input className="w-full p-2 border mb-4" type="password" placeholder="Password" />
      <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </div>
  );
};

export default Login;
