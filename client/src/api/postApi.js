import axios from "axios";

const postAPI = axios.create({
  baseURL: "http://localhost:5000/api/posts",
});

export default postAPI;