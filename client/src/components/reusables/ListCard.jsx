import React, { useContext } from 'react';
import './CSS/ListCard.css';
import AppContext from '../../context/AppContext';

function ListCard(props) {
    const {name, brand, model, price, color} = props.product;
    const {productsList, setProductsList} = useContext(AppContext);

    const handleRemove = () => {
      const newList = productsList.filter(product => product.name !== name);
      setProductsList(newList);
    } 

  return (
    <div className='card-container'>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Brand:</strong> {brand}</p>
    <p><strong>Model:</strong> {model}</p>
    <p><strong>Price:</strong> {price}</p>
    <p><strong>Color:</strong> {color}</p>
    <button onClick={handleRemove} className='remove-button'>Remove</button> 
    </div>
  )
}

export default ListCard