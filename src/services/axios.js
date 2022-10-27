import axios from 'axios';

const TOKEN = 'Api-Key VSfHLDHK.MM3MeLZNV9HMDEY5s1zz4Yl79lbRwoux';
const axiosInstance = axios.create({
    baseURL: 'https://parser.api-compas-goo.ru/',
    headers: {
        Authorization: TOKEN,
    },
});

axiosInstance.interceptors.response.use(
    (res) => res,
    (e) => {
        console.error('Возникла ошибка при выполнении запроса к серверу ', e);

        throw new Error(e);
    },
);

export default axiosInstance;
