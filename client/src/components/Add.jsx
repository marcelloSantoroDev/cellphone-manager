import React, { useContext } from 'react';
import './CSS/Add.css';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

function Add() {
  const {addProduct, setAddProduct} = useContext(AppContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAddProduct({...addProduct, [name]: value});
  }
  return (
    <>
      <Link to='/products-list' className='link' >Return</Link>
      <hr />
    <div className='add-product-container'>
      <form className='add-product-form' action="">
        <input
        value={addProduct.name}
        name='name'
        type="text"
        placeholder='Name'
        onChange={handleChange}
        />
        <input
        value={addProduct.brand}
        name='brand'
        type="text"
        placeholder='Brand'
        onChange={handleChange}
        />
        <input
        value={addProduct.model}
        name='model'
        type="text"
        placeholder='Model'
        onChange={handleChange}
        />
        <input
        value={addProduct.price}
        name='price'
        type="text"
        placeholder='Price'
        onChange={handleChange}
        />
        <input
        value={addProduct.color}
        name='color'
        type="text"
        placeholder='Color'
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Add