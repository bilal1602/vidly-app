
import { toast } from 'react-toastify';

function init() {
}

function log(message) {
    console.log(message);
    toast.log(message);
}


export default { init, log };