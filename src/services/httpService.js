import axios from 'axios';
import logger from './logService'

axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');

axios.interceptors.response.use(null,
    error => {
        const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
        if (!expectedError) {
            logger.log("Logging the error", error)
            alert("An unexpected error occurred.");
        }
        return Promise.reject(error);
    }
);
function setJwt(jwt) {
    axios.defaults.headers.common['x-auth-token'] = jwt;
}
export default {
    setJwt,
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};