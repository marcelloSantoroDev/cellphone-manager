import axios from 'axios';

const productsPut = async (id, name, brand, model, price, color) => {
    const { data } = await axios.put(`http://localhost:3001/products/${id}`, { name, brand, model, price, color });
    return data;
}

export default productsPut;