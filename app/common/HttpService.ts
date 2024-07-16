import axios from 'axios'

// Change API URL if needbe
axios.defaults.baseURL = 'https://ecosearch-test.oasisofchange.org'

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
}