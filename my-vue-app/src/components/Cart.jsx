import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './estatico/Cart.css';

function Cart({ cartItems, removeFromCart }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleComprar = () => {
        navigate('/Compras');
    };

    return (
        <div className="cart-container">
            <button
                onClick={() => setOpen(prev => !prev)}
                className="cart-button"
            >
                🛒 Carrito ({cartItems.length})
            </button>

            {open && (
                <div className="cart-dropdown">
                    {cartItems.length === 0 ? (
                        <p>El carrito está vacío</p>
                    ) : (
                        <>
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-name">{item.nombre}</div>
                                    <div className="item-details">
                                        {item.quantity} x ${item.price.toLocaleString()} = ${ (item.price * item.quantity).toLocaleString() }
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="remove-btn"
                                    >
                                        Quitar
                                    </button>
                                </div>
                            ))}
                            <h4 className="total">Total: ${total.toLocaleString()}</h4>
                            <button className="buy-btn" onClick={handleComprar}>Comprar</button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;
