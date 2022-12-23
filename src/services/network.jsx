import axios from "axios";

const PORT = 3004;
const BASE_URL = "http://localhost:" + PORT;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default instance;
