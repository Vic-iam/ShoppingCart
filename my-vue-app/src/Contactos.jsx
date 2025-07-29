import React from 'react'
import Nav from './components/Nav'
import { useState } from 'react'

function Contactos()  {

    const [cartItems, setCartItems] = useState([]);
  
    const removeFromCart = (id) => {
      setCartItems(prev => prev.filter(p => p.id !== id));
    };

  return (
    
  <>
  
  <Nav cartItems={cartItems} removeFromCart={removeFromCart} />

   <h2 style={{color: "white",position: "absolute" , bottom: "200px"}} >hola</h2>

   </>

  )

}

export default Contactos