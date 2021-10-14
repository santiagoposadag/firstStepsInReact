import React from "react";

const Producto = ({producto, productos, cart, addToCart, setProductos, enCarrito}) => {
    const {nombre, precio, id} = producto;

    //agreagr una funcion 
    const seleccionarProducto = (id)=>{
        const producto = productos.filter((producto)=> producto.id === id)[0];
        addToCart([...cart, producto]);
        const newProductos = productos.filter(producto => producto.id !== id)
        setProductos(newProductos)
    };

    //elimina un producto del carrito.
    const eliminarProductoCart = id => {
        const removedProductFormCart = cart.filter(product => product.id === id)[0];
        setProductos([...productos, removedProductFormCart])
        const newProductosInCart = cart.filter(producto => producto.id !== id);
        addToCart(newProductosInCart);
    }

    

    return (
    <div>
        <h2>{nombre}</h2>
        <p>$ {precio}</p>
        
        {enCarrito
        ?   <button 
            type="button"
            onClick={() => seleccionarProducto(id)}
            >comprar</button>
        :   <button 
            type="button"
            onClick={() => eliminarProductoCart(id)}
            >Eliminar</button>
        }
    </div>);
}
 
export default Producto;