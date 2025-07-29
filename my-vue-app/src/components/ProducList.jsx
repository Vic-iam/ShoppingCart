
import React from 'react';
import Productos from './productos';

const ProducList = ({productos}) => {
    return (
     <>
   
   {

    Productos.map(producto=> (
        <Productos key={producto.id} producto={producto}/>

    ))

   }

     
     </>   
    )
}

export default ProducList;
