import axios from "axios";

const API = axios.create({
  baseURL: "https://teamfinder-l39w.onrender.com/api/auth",
});

export default API;