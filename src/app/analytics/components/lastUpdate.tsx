import React, { useState, useEffect } from "react";
import { Refresh } from "@/assets/svgs";
import { calculateTimeAgo } from "@/utils/helpers";
import UseCustomHooks from "@/hooks/useCustomHooks";

const LastUpdate = () => {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const { fetchUserAnalytics, setLoading } = UseCustomHooks();

  // Function to handle refresh
  const handleRefresh = async () => {
    await fetchUserAnalytics(); // Assuming fetchDashboard is a function that fetches data
    setLastUpdated(new Date());

  };

  useEffect(() => {
    const handlePageRefresh = () => {
      setLastUpdated(new Date());
    };

    window.addEventListener("beforeunload", handlePageRefresh);

    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
    };
  }, []);

  return (
    <div className="last_update">
      <p>Last updated {calculateTimeAgo(lastUpdated)}</p>

      <button className="refresh" onClick={handleRefresh}>
        <Refresh />
        Refresh
      </button>
    </div>
  );
};

export default LastUpdate;
