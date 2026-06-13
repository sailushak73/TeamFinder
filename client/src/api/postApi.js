import axios from "axios";

const postAPI = axios.create({
  baseURL: "https://teamfinder-139w.onrender.com/api/posts",
});

export default postAPI;