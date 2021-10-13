import React from 'react';
import './carrito.css';
import Producto from './Producto'

const Carrito = ({cart}) => {
    return ( <div className="carrito">
        <h2>Tu carrito de compras</h2>
        {
            cart.map(product => (
                <Producto key={product.id} producto={product}/>
            ))
        }
    </div> );
}
 
export default Carrito;
