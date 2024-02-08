import React from "react";
import { Refresh } from "@/assets/svgs";
import UserCard from "./components/userCard";
import { Line } from "@/components/Line";
const Page = () => {
  return (
    <main className="analytics">
      <div className="last_update">
        <p>Last updated 1 minute ago</p>

        <button className="refresh">
          <Refresh />
          Refresh
        </button>
      </div>

      <div className="card_container">
        <UserCard name={"USERS ONLINE"} number={300} />
        <UserCard name={"USERS ACTIVE TODAY"} number={300} />
        <UserCard name={"USERS ACTIVE THIS MONTH"} number={300} />
        <UserCard name={"PEAK CONCURRENCY THIS MONTH"} number={300} />
        <UserCard name={"DASHBOARD"} number={300} />
      </div>

      <Line variant={"divider"}/>
    </main>
  );
};

export default Page;
