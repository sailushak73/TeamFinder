import axios from "axios";

const messageAPI = axios.create({
  baseURL: "https://teamfinder-l39w.onrender.com/api/messages",
});

export default messageAPI;