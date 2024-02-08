import React from "react";
import { fetchDashboardFromServer } from "@/services/api/apis";
import { dashboardTypes } from "@/constants/types";
const UseCustomHooks = () => {
  const [data, setData] = React.useState<dashboardTypes>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const [error, setError] = React.useState({
    Dashboard: "",
  });

  //  get Dashboard data
  const fetchDashboard = async () => {
    setLoading(true);
    const { error, data }: any = await fetchDashboardFromServer();
    if (error) setError(error);
    else setData(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchDashboard();
  }, []);

  return { data, fetchDashboard, loading, setLoading };
};

export default UseCustomHooks;
