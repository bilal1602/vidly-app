import http from './httpService';
import { apiUrl } from '../config.json'

const apiEndPoint = apiUrl + "/users"
export async function register(user) {
    const response = await http.post(apiEndPoint, {
        email: user.username,
        password: user.password,
        name: user.name
    })
    localStorage.setItem("token", response.headers["x-auth-token"]);

}