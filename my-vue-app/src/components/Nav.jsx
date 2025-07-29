import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import styles from './nav.module.css';

function Nav({ cartItems, removeFromCart }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h2>Talento<span className={styles.tech}>Tech</span></h2>
            </div>

            <button
                className={styles.toggle}
                onClick={() => setMenuOpen(prev => !prev)}
            >
                ☰
            </button>
            

            <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
                <ul>
                    <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                    <li><Link to="/productos" onClick={() => setMenuOpen(false)}>Productos</Link></li>
                    <li><Link to="/contactos" onClick={() => setMenuOpen(false)}>Contactos</Link></li>
                </ul>

            </div>
        </nav>
    );
}

export default Nav;