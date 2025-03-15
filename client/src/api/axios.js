/*   CHAT GPT  FILE */
import axios from "axios"


const Axios = axios.create({
    baseURL: `https://auth-practice-production.up.railway.app/api`,
    headers: { "Content-Type": "application/json"},
    withCredentials: true // 👈 it's required for the cookies
})

export default Axios