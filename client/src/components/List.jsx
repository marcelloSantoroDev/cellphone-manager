import React, { useContext } from 'react'
import ListCard from './reusables/ListCard'
import AppContext from '../context/AppContext'

function List() {
  const { productsList } = useContext(AppContext);
  return (
    <div className='list-card-container' >
      <h1>Products</h1>
      {productsList.map((product) => (
        <ListCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default List