import axios from "axios"

const authPost = async (token) => {
    const { data } = await axios.post("http://localhost:3001/auth", { token });
    return data;
}

export default authPost;