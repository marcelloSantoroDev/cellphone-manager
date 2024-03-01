import React from 'react'
import {productApi} from '../mocks/productApi.mock'
import ListCard from './reusables/ListCard'

function List() {
  return (
    <div className='list-card-container' >
      <h1>Products</h1>
      {productApi.map((product) => (
        <ListCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default List