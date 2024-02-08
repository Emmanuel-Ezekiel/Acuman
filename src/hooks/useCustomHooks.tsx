import React from "react";
import {
  fetchDashboardFromServer,
  fetchChatDashboardFromServer,
} from "@/services/api/apis";
import { AnalyticsTypes, chatTypes } from "@/constants/types";
const UseCustomHooks = () => {
  const [data, setData] = React.useState<AnalyticsTypes>();
  const [chatData, setChatData] = React.useState<chatTypes>();
  const [loading, setLoading] = React.useState<boolean>(false);

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

  React.useEffect(() => {
    fetchUserAnalytics();
    fetchChatDashboard();
  }, []);

  return { data, fetchUserAnalytics, loading, setLoading, chatData };
};

export default UseCustomHooks;
