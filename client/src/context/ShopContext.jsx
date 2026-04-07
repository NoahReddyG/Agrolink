import { createContext, useState, useEffect } from 'react';

// Create Context
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Attempt to load from local storage
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cart, setCart] = useState(() => {
    // Attempt to load cart from local storage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to local storage whenever user/cart changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Login handler
  const login = (email) => {
    // Check if the email matches the farmer test accounts
    const isFarmer = email.toLowerCase() === 'framer@sell.com' || email.toLowerCase() === 'farmer@sell.com';
    setUser({ email, role: isFarmer ? 'farmer' : 'buyer' });
  };

  // Logout handler
  const logout = () => {
    setUser(null);
    setCart([]); // Clear cart on logout
  };

  // Cart operations
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  return (
    <ShopContext.Provider value={{ user, login, logout, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  );
};
