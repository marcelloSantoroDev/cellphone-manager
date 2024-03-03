import { useParams } from 'react-router-dom';
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom'
import './CSS/Edit.css'

function Edit() {
  const {productsList, setProductsList, editProduct, setEditProduct } = useContext(AppContext);
  const {id} = useParams();
  const history = useHistory();
  // const product = productsList.find(product => product.id === +id);

    const handleChange = (e) => {
    const {name, value} = e.target;
    setEditProduct({...editProduct, [name]: value});
  }

  const handleEdit = () => {
    const listWithoutTarget = productsList.filter(product => product.id !== +id);
    setProductsList([...listWithoutTarget, editProduct]);
    history.push('/products-list');
  }

  return (
      <>
      <Link to='/products-list' className='link' >Return</Link>
      <hr />
      <div className='edit-product-container'>
      <form className='edit-product-form' action="">
        <input
        value={editProduct.name }
        name='name'
        type="text"
        placeholder='Name'
        onChange={handleChange}
        />
        <input
        value={editProduct.brand }
        name='brand'
        type="text"
        placeholder='Brand'
        onChange={handleChange}
        />
        <input
        value={editProduct.model }
        name='model'
        type="text"
        placeholder='Model'
        onChange={handleChange}
        />
        <input
        value={editProduct.price }
        name='price'
        type="text"
        placeholder='Price'
        onChange={handleChange}
        />
        <input
        value={editProduct.color }
        name='color'
        type="text"
        placeholder='Color'
        onChange={handleChange}
        />
        <button onClick={handleEdit}>Edit</button>
      </form>
    </div>
    </>
  )
}

export default Edit