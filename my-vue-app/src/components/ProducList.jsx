import React from 'react';
import ProductosCard from './productos';

const ProducList = ({productos}) => {
    return (
     <>
   
   {
    
    
    productos.map(producto=> (
        <ProductosCard key={producto.id} producto={producto}/>

    ))

   }

     
     </>   
    )
}

export default ProducList;
