import React from 'react'
import Nav from './components/Nav'
import { useState } from 'react'

function Login() {

    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product) => {
      setCartItems(prev => {
        const item = prev.find(p => p.id === product.id);
        if (item) {
          return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
        }
        return [...prev, { ...product, quantity: 1 }];
      });
    };
  
    const removeFromCart = (id) => {
      setCartItems(prev => prev.filter(p => p.id !== id));
    };

  return (
  <>

   <Nav cartItems={cartItems} removeFromCart={removeFromCart}  />

  </>
  )

}

export default Login;