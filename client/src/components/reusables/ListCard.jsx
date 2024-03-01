import React, { useContext } from 'react';
import './CSS/ListCard.css';
import AppContext from '../../context/AppContext';
import { useHistory } from 'react-router-dom'; 

function ListCard(props) {
    const {name, brand, model, price, color, id} = props.product;
    const {productsList, setProductsList} = useContext(AppContext);
    const history = useHistory();

    const handleRemove = () => {
      const newList = productsList.filter(product => product.name !== name);
      setProductsList(newList);
    } 

    const handlePush = () => {
      history.push(`/edit-product-${id}`);
    }

  return (
    <div className='card-container'>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Brand:</strong> {brand}</p>
    <p><strong>Model:</strong> {model}</p>
    <p><strong>Price:</strong> {price}</p>
    <p><strong>Color:</strong> {color}</p>
    <div className='buttons-container'>
    <button onClick={handleRemove} className='remove-button'>Remove</button>
    <button className='edit-button' onClick={handlePush}>Edit</button>
    </div>
    </div>
  )
}

export default ListCard