import apiClient from './apiClient';

export const getCities = async () => {
  try {
    const response = await apiClient.get('/cities');
    return response.data;
  } catch (error) {
    throw error;
  }
};


