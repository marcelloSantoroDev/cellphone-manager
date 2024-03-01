import React from 'react';
import './CSS/ListCard.css';

function ListCard(props) {
    const {name, brand, model, price, color} = props.product;
  return (
    <div className='card-container'>
  <p><strong>Name:</strong> {name}</p>
  <p><strong>Brand:</strong> {brand}</p>
  <p><strong>Model:</strong> {model}</p>
  <p><strong>Price:</strong> {price}</p>
  <p><strong>Color:</strong> {color}</p>

    </div>
  )
}

export default ListCard