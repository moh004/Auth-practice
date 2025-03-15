/*   CHAT GPT  FILE */
import axios from "axios"


const Axios = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: { "Content-Type": "application/json"},
    withCredentials: true // 👈 it's required for the cookies
})

export default Axios