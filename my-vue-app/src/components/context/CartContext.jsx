import { createContext, useState, useEffect, Children } from "react";
import productosdata from "../../data/Productos"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([])
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        try {
            setProductos(productosdata);
            setCargando(false);
        } catch (error) {
            console.log("Error", error);
            setError(true);
            setCargando(false);
        }
    }, [])

    const handleAddToCart = (product) => {
        const productInCart = cart.find((item) => item.id === product.id);
        if (productInCart) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const handleDeleteFromCart = (product) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === product.id) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return null;
                    }
                } else {
                    return item;
                }
            }).filter(item => item !== null);
        })
    }

    return (
        <CartContext.Provider 
        value={{
            cart,productos,cargando,error, handleAddToCart, handleDeleteFromCart
        }}>
            {children}
        </CartContext.Provider>
    )


}