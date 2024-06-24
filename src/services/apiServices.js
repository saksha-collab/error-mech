import axiosInstance from '../api/axiosInstance';


export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};
