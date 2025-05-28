import Nav from "./components/Nav"
import ProducList from './components/ProducList'
import { useState } from 'react'

function Home() {


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

      <ProducList addToCart={addToCart} />

    </>
    
  )
}
export default Home