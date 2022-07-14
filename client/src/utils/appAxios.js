import axios from "axios";
export const appAxios = axios.create({
  baseURL: "http://localhost:3040",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  },
});

