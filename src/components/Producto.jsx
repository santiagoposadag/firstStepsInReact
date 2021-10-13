import React from "react";

const Producto = ({producto, productos, cart, addToCart}) => {
    const {nombre, precio, id} = producto;

    //agreagr una funcion 
    const seleccionarProducto = (id)=>{
        const producto = productos.filter((producto)=> producto.id === id)[0];
        addToCart([...cart, producto]);
    };

    

    return (
    <div>
        <h2>{nombre}</h2>
        <p>$ {precio}</p>
        <button 
            type="button"
            onClick={() => seleccionarProducto(id)}
        >comprar</button>
    </div>);
}
 
export default Producto;