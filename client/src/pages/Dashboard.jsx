const products = [
  { id: 1, name: 'Fresh Tomatoes', price: 40.00, unit: 'kg', stock: 120, image: '🍅' },
  { id: 2, name: 'Organic Potatoes', price: 30.00, unit: 'kg', stock: 300, image: '🥔' },
  { id: 3, name: 'Premium Rice', price: 60.00, unit: 'kg', stock: 50, image: '🍚' },
  { id: 4, name: 'Sweet Corn', price: 25.00, unit: 'kg', stock: 400, image: '🌽' }
];

import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Dashboard = () => {
  const { user, addToCart } = useContext(ShopContext);
  return (
    <div className="py-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
            {user?.role === 'farmer' ? 'Farmer Dashboard' : (user ? 'Marketplace' : 'Browse Products')}
          </h2>
          <p className="text-gray-500">
            {user?.role === 'farmer' ? 'Manage your active listings and track your inventory.' : (user ? 'Discover fresh local produce.' : 'Please login to add items to your cart.')}
          </p>
        </div>
        {!user && (
           <div className="px-4 py-2 bg-yellow-50 text-yellow-800 rounded-md border border-yellow-200 shadow-sm text-sm font-medium">
             Viewing in Guest Mode
           </div>
        )}
        {user?.role === 'farmer' && (
          <button className="bg-brand-600 text-white px-5 py-2.5 rounded-lg shadow hover:bg-brand-500 transition-colors font-medium flex items-center gap-2">
            <span>+</span> Add New Product
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-50 flex items-center justify-center text-6xl">
              {product.image}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-4">Stock: {product.stock} {product.unit}</p>
              <div className="flex justify-between items-center mt-2 pt-4 border-t border-gray-50">
                <span className="text-xl font-extrabold text-brand-600">₹{product.price.toFixed(2)}<span className="text-sm font-normal text-gray-500">/{product.unit}</span></span>
                {user?.role === 'farmer' ? (
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-3 py-1 rounded-md">Edit Product</button>
                ) : user ? (
                  <button onClick={() => addToCart(product)} className="bg-brand-100 text-brand-700 hover:bg-brand-600 hover:text-white px-4 py-1.5 rounded-full text-sm font-bold transition-colors">
                    Add to Cart
                  </button>
                ) : (
                  <span className="text-sm text-gray-400 italic">Login to buy</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
