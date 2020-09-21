
import { toast } from 'react-toastify';

function init() {
}

function log(message) {
    console.log(message);
    toast.log(message);
}
function error(message) {
    console.error(message);
    toast.error(message);
}

export default { init, log, error };