import React, {useState} from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

  //crear listado de productos
  const [productos, setProductos] = useState([
    { id: 1,
    nombre: 'react camisa',
  precio: 80 },
  { id: 2,
    nombre: 'Angular camisa',
  precio: 20 },
  { id: 3,
    nombre: 'Viu camisa',
  precio: 40 },
  { id: 4,
    nombre: 'Svelte camisa',
  precio: 30 },
  { id: 5,
    nombre: 'Vanilla camisa',
  precio: 60 }
  ]);

  //State para un carrito de compras 
  const [cart, addToCart] = useState([])

  const fecha = new Date().getFullYear();

  return (
    <div className="App">
      <Header 
        titulo='Tienda virtual'
        numero={20}
      />
      <h1>Lista de productos</h1>
      {
        productos.map(producto =>{
          return <Producto 
            key={producto.id} 
            productos={productos}
            producto={producto}
            cart={cart}
            addToCart={addToCart}/>;
        })
      }
      <Carrito 
      cart={cart}/>
      <Footer 
        fecha={fecha}
      />
    </div>
  );
}


export default App;
