import React from 'react';
import ProductosCard from './productos';

const ProducList = ({ productos }) => {
  return (
    <>
      <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap",
        height: "450px", position: "absolute", bottom: "80px", flex: "1"
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
