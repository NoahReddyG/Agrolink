import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Auth = () => {
  const navigate = useNavigate();
  const { login } = useContext(ShopContext);
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    if (email) {
      login(email); // Trigger global state login
      navigate('/dashboard'); // Route back to dashboard
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md border border-gray-100 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Login / Register</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500" 
            placeholder="farmer@example.com" 
          />
        </div>
        <button type="submit" className="w-full bg-brand-600 text-white py-2 rounded-md hover:bg-brand-500 transition-colors">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Auth;
