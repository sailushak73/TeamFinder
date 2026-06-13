import axios from "axios";

const postAPI = axios.create({
  baseURL: "https://teamfinder-l39w.onrender.com/api/posts",
});

export default postAPI;