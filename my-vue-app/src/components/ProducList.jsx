import React, { useContext } from 'react';
import ProductosCard from './Productos';
import { CartContext } from './context/CartContext';

const ProducList = () => { 

  const {productos} = useContext(CartContext)

  return (
    <>
      <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", padding: "70px"
      }}>
        {
          productos.map(producto => (
            <ProductosCard key={producto.id} producto={producto} />
            
          ))
        }
      </div>

    </>
  )
}

export default ProducList;
