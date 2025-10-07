import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react';

function App() {
  const [carrito,setCarrito] = useState([]);
     //listado de productos de la tienda
    const productos = [
      {id:1, nombre: 'Crash Bandicot', precio: 60000},
      {id:2, nombre: 'Mario Kart', precio: 60000},
      {id:3, nombre: 'Metal Slug', precio: 60000},
      {id:4, nombre: 'Snow Bros', precio: 60000}
    ];

    //funcion agregar un elemento al carrito
    const agregarAlCarrito = (producto)=>{
      setCarrito([...carrito,producto]);
    }

    //funcion de eliminar
    const eliminarDelCarrito = (index) => {
      //filter funciona con dos parametros
      //no se le pasa dato a filter --> _ AL USAR EL GUION BAJO LO DEJAMOS NULO
      //filtrar --> eliminar || mantiene todos los productos menos el q le indicamos
      const nuevoCarrito = carrito.filter((_,i) => i!==index)
      setCarrito(nuevoCarrito);
    }

    //sumamos el total de los productos
    //SUM acumula el total en "p" q representa un producto
    //REDUCE recorre el arreglo del carrito y suma el precio
    const total = carrito.reduce((sum,p) => sum + p.precio, 0);

  return (
    <div className='container py-4'>
      <h1 className='mb-4 text-center'>Carrito de compras</h1>

      {/**INICIO LISTA PRODUCTOS DISPONIBLES*/}
      <h4>Productos Disponibles</h4>
      <div className='row'>
        {productos.map(p => (
          <div key={p.id} className='col-md-4 mb-3'>
            <div className='card h-100'>
              <div className='card-body'>
                <h5 className='card-title'>{p.nombre}</h5>
                <p className='card-text'>{p.precio.toLocaleString()}</p>
                <button onClick= {()=>agregarAlCarrito} className='btn btn-primary'>Agregar al carrito</button>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/**FIN LISTA PRODUCTOS DISPONIBLES*/}

      {/**INICIO SECCION CARRITO */}
      <h4 className='mt-4'>Seccion del carrito</h4>
      {carrito.length === 0 ? (
        <p className='text-muted'>Tu carrito esta vacío</p>
      ):(
      <ul className='list-group mb-3'>
      {carrito.map((item,index) => (
        <li key={index} className='list-group-item d-flex justify-content-between align-items-center'>{item.nombre}
        <div>
          <span className='me-3'>${item.precio.toLocaleString()}</span>
          <button className='btn btn-danger btn-sm'onClick={()=> eliminarDelCarrito(index)}>Eliminar</button>
        </div>
        </li>
      ))}
      </ul>
      )}

      {/**FIN SECCION CARRITO */}

      {/**INICIO MOSTRAR TOTAL */}
      <div className='alert alert-info'>
        Total: 
      </div> 
    </div>
  );
}

export default App;
