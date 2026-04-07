import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(ShopContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any fresh produce yet.</p>
        <Link to="/dashboard" className="bg-brand-600 text-white px-6 py-3 rounded-md font-medium hover:bg-brand-700 transition">
          Browse Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900">Your Shopping Cart</h2>
        <button onClick={clearCart} className="text-red-500 hover:text-red-700 font-medium text-sm">Clear Cart</button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        <ul className="divide-y divide-gray-100">
          {cart.map((item) => (
            <li key={item.id} className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-3xl">
                  {item.image}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm">₹{item.price.toFixed(2)} / {item.unit}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="font-medium px-4 py-1 bg-gray-50 rounded-full">Qty: {item.quantity}</span>
                <span className="text-xl font-bold text-brand-600 w-24 text-right">₹{(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-end">
        <div className="flex justify-between w-64 text-lg font-medium text-gray-600 mb-2">
          <span>Subtotal:</span>
          <span>₹{calculateTotal()}</span>
        </div>
        <div className="flex justify-between w-64 text-2xl font-extrabold text-gray-900 mb-6 border-t border-gray-100 pt-2">
          <span>Total:</span>
          <span className="text-brand-600">₹{calculateTotal()}</span>
        </div>
        <button className="bg-brand-600 text-white w-64 py-3 rounded-lg font-bold text-lg hover:bg-brand-700 shadow-md transition-all">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
