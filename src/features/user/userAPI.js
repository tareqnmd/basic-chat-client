import axiosInstance from '../../utils/axios';

const getUser = async (payload) => {
	const response = await axiosInstance.post('login', { payload });
	return response.data;
};
export default getUser;
