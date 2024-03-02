import axios from "axios";

const loginPost = async (email, password) => {
    const { data } = await axios.post('http://localhost:3001/login', { email, password });
    return data;
}

export default loginPost;