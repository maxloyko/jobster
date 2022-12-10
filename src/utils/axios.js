import axios from "axios";
import {getUserFromLocalStorage} from "./localStorage";

const customFetch = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

customFetch.interceptors.request.use((config) => {
    const user = getUserFromLocalStorage()
    if (user) {
        config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
}, (error) => {
    console.log(error)
})
export default customFetch;