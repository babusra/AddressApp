import apiClient from './apiClient';

export const getAddressList = async () => {
  try {
    const response = await apiClient.get('/addressList');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postAddress = async (addressData: any) => {
  try {
    const response = await apiClient.post('/addressList', addressData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAddress = async (addressId: string) => {
  try {
    const response = await apiClient.delete(`/addressList/${addressId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

