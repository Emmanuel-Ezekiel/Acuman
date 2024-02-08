import { Api } from '../index';
import handleError from './errorHandler';

export const fetchMessagesFromServer = async () => {
    try {
      const result = await Api.get(`/messages?page=${3}&limit=${5}`);
      return {data: result};
    } catch (error) {
      return handleError(error);
    }
  };

export const fetchDashboardFromServer = async () => {
    try {
       // Check if cached data exists in localStorage
    const cachedData = localStorage.getItem('cachedData');

    // If cached data exists and forceRefresh is false, return cached data
    if (cachedData) {
      return {data: JSON.parse(cachedData)}; // Return cached data
    }

      const result = await Api.get('/dashboard');
      localStorage.setItem('cachedData', JSON.stringify(result?.data?.data));
      return {data: result?.data?.data};
    } catch (error) {
      return handleError(error);
    }
};


  export const fetchChatDashboardFromServer = async () => {
    try {
      const result = await Api.get('/chat_dashboard'); 
      return {data: result};
    } catch (error) {
      return handleError(error);
    }
  };

 