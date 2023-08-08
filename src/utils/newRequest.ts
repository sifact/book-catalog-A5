import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://book-catelog-a5-server-sifact.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

export default newRequest;
