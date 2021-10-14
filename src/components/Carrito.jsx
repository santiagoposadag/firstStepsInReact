import React from 'react';
import './carrito.css';
import Producto from './Producto'

const Carrito = ({cart, addToCart, productos, setProductos}) => {
    return ( <div className="carrito">
        <h2>Tu carrito de compras</h2>
        {
            cart.length === 0 
            ? <p>No hay elementos</p>
            : cart.map(product => (
                <Producto key={product.id}
                 producto={product} 
                 cart={cart}
                 addToCart={addToCart}
                 productos={productos}
                 setProductos={setProductos}/>
            ))
        }
    </div> );
}
 
export default Carrito;
