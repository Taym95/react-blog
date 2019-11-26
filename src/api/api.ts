  
import axios from 'axios';
const options =  {
    baseURL: 'http://localhost:9000/',
}
const myAxios = axios.create(options);


export {myAxios};