import React from "react";
import {
  fetchDashboardFromServer,
  fetchChatDashboardFromServer,
  fetchMessagesFromServer,
} from "@/services/api/apis";
import { AnalyticsTypes, chatTypes } from "@/constants/types";
const UseCustomHooks = () => {
  const [data, setData] = React.useState<AnalyticsTypes>();
  const [chatData, setChatData] = React.useState<chatTypes>();
  const [tableData, setTableData] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState(1);
  const [postPerPage] = React.useState(5);
  const [totalPages, setTotalPages] = React.useState(1);

  const [error, setError] = React.useState({
    Dashboard: "",
  });

  //  get User Analytics data
  const fetchUserAnalytics = async () => {
    setLoading(true);
    const { error, data }: any = await fetchDashboardFromServer();
    if (error) setError(error);
    else setData(data);
    setLoading(false);
  };

  //  get Chat Dashboard data
  const fetchChatDashboard = async () => {
    setLoading(true);
    const { error, data }: any = await fetchChatDashboardFromServer();
    if (error) setError(error);
    else setChatData(data);
    setLoading(false);
  };


  // Function to handle all Messages
  const fetchMessages = async () => {
    // setLoading(true);
    const { error, data }: any = await fetchMessagesFromServer(
      page,
      postPerPage
    );
    // console.log("table", data)
    if (error) setError(error);
    else setTableData(data?.data);
    setTotalPages(data?.totalPages);
    // setLoading(false);
  };

  React.useEffect(() => {
    fetchUserAnalytics();
    fetchChatDashboard();
  }, []);

  React.useEffect(() => {
    fetchMessages();
  }, [page]);

  return {
    data,
    fetchUserAnalytics,
    loading,
    setLoading,
    chatData,
    tableData,
    setPage,
    postPerPage,
    page,
    totalPages,
    setTableData,
  };
};

export default UseCustomHooks;
