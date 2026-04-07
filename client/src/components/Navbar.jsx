import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const { user, cart, logout } = useContext(ShopContext);
  
  // Calculate total items in cart safely
  const cartItemCount = cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-brand-600">
            Agrolink AI
          </Link>
          <div className="flex space-x-6 items-center">
            <Link to="/dashboard" className="text-gray-700 font-medium hover:text-brand-600 transition-colors">
              {user?.role === 'farmer' ? 'Dashboard' : 'Marketplace'}
            </Link>
            
            {user?.role !== 'farmer' && (
              <Link to="/cart" className="text-gray-700 font-medium hover:text-brand-600 transition-colors relative flex items-center">
                Cart
                {cartItemCount > 0 && (
                  <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            )}
            
            <Link to="/profile" className="text-gray-700 font-medium hover:text-brand-600 transition-colors">Profile</Link>
            
            {user ? (
              <div className="flex items-center gap-4 border-l pl-4 border-gray-200">
                <span className="text-sm text-gray-500 hidden sm:block">Hi, <strong className="text-gray-900">{user.email.split('@')[0]}</strong></span>
                <button onClick={logout} className="text-sm font-bold text-red-600 hover:text-red-800 transition-colors">Logout</button>
              </div>
            ) : (
              <Link to="/auth" className="bg-brand-600 text-white px-5 py-2 rounded-md font-medium hover:bg-brand-500 shadow-sm hover:shadow-md transition-all">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
