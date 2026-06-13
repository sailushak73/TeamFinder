import axios from "axios";

const messageAPI = axios.create({
  baseURL: "http://localhost:5000/api/messages",
});

export default messageAPI;