import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Assurez-vous que le port correspond à votre backend
});

export default axiosInstance;
