import axios from "axios";

export const API = axios.create({
    // baseURL: "http://localhost:3000"
    baseURL: "https://food-explorer-api-28br.onrender.com"
});