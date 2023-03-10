import axios from 'axios';
const axiosInstance = axios.create({
	baseURL: 'http://localhost:3200',
});

export default axiosInstance;
