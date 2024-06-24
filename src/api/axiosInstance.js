import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-base-url.com', // Replace with your API base URL
});

export const setupInterceptors = (setError) => {
    
  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      const { response } = error;
      if (response) {
        setError(`Error: ${response.status} - ${response.statusText}`);
      } else if (error.request) {
        setError('No response received from server');
      } else {
        setError(`Error: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );
};

export default axiosInstance;
