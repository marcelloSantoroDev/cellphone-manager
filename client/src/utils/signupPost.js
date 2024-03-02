import axios from "axios";

const signupPost = async (name, email, password) => {
    const { data } = await axios.post('http://localhost:3001/user', {name, email, password});
    return data;
}

export default signupPost;