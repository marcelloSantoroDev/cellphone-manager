import axios from "axios";

const productPost = async (name, brand, model, price, color) => {
    const { data } = await axios.post("http://localhost:3001/products", { name, brand, model, price, color });
    return data;
}

export default productPost;