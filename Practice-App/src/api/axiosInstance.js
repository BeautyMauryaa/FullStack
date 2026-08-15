import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5173", // change if needed
});

export default API;