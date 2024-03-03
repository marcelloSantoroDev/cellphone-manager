import React, { useContext } from 'react'
import ListCard from './reusables/ListCard'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'

function List() {
  const { productsList } = useContext(AppContext);
  return (
    <div className='list-card-container' >
      <Link to='/add-product' className='link' >Add Product</Link>
      <hr />
      <h1>Products</h1>
      {productsList.map((product) => (
        <ListCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default List