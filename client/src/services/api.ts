import axios from "axios";

export const API = axios.create({
    // baseURL: "http://localhost:3000"
    baseURL: "https://food-explorer-api-d8xi.onrender.com"
});