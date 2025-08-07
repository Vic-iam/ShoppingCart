import { useContext } from 'react';
import './estatico/Cart.css'
import { CartContext } from './context/CartContext';

const Cart = ({ isOpen, onclose }) => {

        const {cart, handleDeleteFromCart} = useContext(CartContext)
    

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className='cart-header'>
                <h2>Carrito de compra</h2>
                <button onClick={onclose} className='close-button'>X</button>
            </div>
            <div className='cart-content'>
                {cart.length === 0 ? (
                    <p style={{ color: 'red' }}>El carrito está vacío</p>
                ) : (
                    <ul className='cart-item'>
                        {cart.map((item, index) => (
                            <li key={index} style={{ color: 'green' }}>
                                {item.nombre} - {item.precio}
                                <button onClick={() => handleDeleteFromCart(item)}><i class="fa-solid fa-cart-shopping"></i></button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Cart;
