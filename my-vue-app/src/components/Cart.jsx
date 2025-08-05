import React from 'react';
import './estatico/Cart.css'

const Cart = ({ carItems, isOpen, onclose, borrarProducto}) => {
    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2>Carrito de compra</h2>
                <button onClick={onclose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {carItems.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito está vacío</p>
                ) : (
                    <ul className='cart-item'>
                        {carItems.map((item, index) => (
                            <li key={index} style={{ color: 'green' }}>
                                {item.nombre} - {item.precio}
                                <button onClick={() => borrarProducto(item)}><i class="fa-solid fa-cart-shopping"></i></button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Cart;
