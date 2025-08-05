import React from 'react';
import ProductosCard from './productos';

const ProducList = ({ productos }) => {
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
