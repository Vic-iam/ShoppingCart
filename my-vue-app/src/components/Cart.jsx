
function Cart({ cartItems, removeFromCart }) {
 const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
        <>
            <div className="cart">
                <h3>🛒 Carrito</h3>
                {cartItems.length === 0 && <p>El carrito está vacío</p>}
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        {item.name} x {item.quantity} = ${item.price * item.quantity}
                        <button onClick={() => removeFromCart(item.id)}>Quitar</button>
                    </div>
                ))}
                {cartItems.length > 0 && <h4>Total: ${total}</h4>}
            </div>

        </>
    )

}

export default Cart