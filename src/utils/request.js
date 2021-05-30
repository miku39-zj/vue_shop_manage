/*
 * @Description: 
 */
import axios from 'axios'
let baseUrl = '';

if (process.env.NODE_ENV == 'development') {

    baseUrl = 'http://127.0.0.1:6003/';
} else {
    baseUrl = '';
}
// create an axios instance
const service = axios.create({
    baseURL: baseUrl,
    timeout: 180000, // request timeout

})

// 请求拦截器 对请求预处理
// axios.interceptors.request.use(config => {
//   return config
// })


export default service