import axios from "axios";

const API = axios.create({
  baseURL: "https://teamfinder-139w.onrender.com/api/auth",
});

export default API;