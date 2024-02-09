"use client";

import React from "react";
import UserCard from "./components/userCard";
import { Line } from "@/components/Line";
import UseCustomHooks from "@/hooks/useCustomHooks";
import LastUpdate from "./components/lastUpdate";
import SkeletonCard from "@/components/skeleton/SkeletonCard";
import GraphCard from "./components/dailyGraphCard";
import MonthltGraphCard from "./components/monthlyGraphCard";

const Page = () => {
  const { data, loading } = UseCustomHooks();

  return (
    <main className="analytics">
      <LastUpdate />

      {loading ? (
        <SkeletonCard number={5} />
      ) : (
        <div className="card_container">
          <UserCard name={"USERS ONLINE"} number={data?.usersOnline} />
          <UserCard
            name={"USERS ACTIVE TODAY"}
            number={data?.usersActiveToday}
          />
          <UserCard
            name={"USERS ACTIVE THIS MONTH"}
            number={data?.usersActiveThisMonth}
          />
          <UserCard
            name={"PEAK CONCURRENCY THIS MONTH"}
            number={data?.peakConcurrency}
          />
          <UserCard name={"DASHBOARD"} number={data?.dashboard} />
        </div>
      )}
      {/* {!loading && } */}

      <Line variant={"divider"} />

      <div className="graph_container">
        <GraphCard />
        <MonthltGraphCard  />
      </div>
    </main>
  );
};

export default Page;
