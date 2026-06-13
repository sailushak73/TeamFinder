import axios from "axios";

const messageAPI = axios.create({
  baseURL: "https://teamfinder-139w.onrender.com/api/messages",
});

export default messageAPI;