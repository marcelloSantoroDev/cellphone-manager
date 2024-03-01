import React from 'react';
import './CSS/Add.css';

function Add() {
  return (
    <div className='add-product-container'>
      <form className='add-product-form' action="">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Brand' />
        <input type="text" placeholder='Model' />
        <input type="text" placeholder='Price' />
        <input type="text" placeholder='Color' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Add