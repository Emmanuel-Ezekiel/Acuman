import { Api } from '../index';
import handleError from './errorHandler';


/**
 * Fetch messages from the server based on pagination
 * @param page Page number
 * @param postPerPage Number of posts per page
 * @returns Promise with fetched data
 */
export const fetchMessagesFromServer = async (page: number, postPerPage: number) => {
    try {
       // Fetch messages from the server
      const result = await Api.get(`/messages?page=${page}&limit=${postPerPage}`);
      // console.log(result)
      return {data: result?.data};
    } catch (error) {
      return handleError(error);
    }
};


/**
 * Fetch dashboard data from the server
 * @returns Promise with fetched dashboard data
 */
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


/**
 * Fetch chat dashboard data from the server
 * @returns Promise with fetched chat dashboard data
 */
  export const fetchChatDashboardFromServer = async () => {
    try {
      // Fetch chat dashboard data from the server
      const result = await Api.get('/chat_dashboard'); 

       // Return the fetched data
      return {data: result?.data?.data};
    } catch (error) {
      return handleError(error);
    }
  };

 