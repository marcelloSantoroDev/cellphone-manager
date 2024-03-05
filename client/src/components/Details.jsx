import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './CSS/Details.css';
import { Link } from 'react-router-dom';

function Details() {
    const { productsList } = useContext(AppContext);
    const { id } = useParams();
    const product = productsList.find(product => product.id === +id);
  return (
    <div>
      <Link to='/products-list' className='link' >Return</Link>

    <div className='main-info'>
    <p><strong>{product.name} {product.model}</strong> </p>
    </div>
    {product.data.map(({price, color}, index)=> (
      <div className='price-color-container' key={index}>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Price:</strong> {price}</p>
      </div>
    ))}
    </div>
  )
}

export default Details