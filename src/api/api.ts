import axios from 'axios';

const options = {
    baseURL: process.env.REACT_APP_BACKEND_URL,
};
const myAxios = axios.create(options);

export { myAxios };
