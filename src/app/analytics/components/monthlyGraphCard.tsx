import React from "react";
import DailyChart from "./charts/dailyChart";
import { ButtonDown } from "@/assets/svgs";

const MonthltGraphCard = () => {
  return (
    <div className="graphCard">
      <div className="graphContainer">
        <div className="Btns">
          <span>MONTHLY ACTIVE USERS</span>

          <button>
            All Activites <ButtonDown />{" "}
          </button>
        </div>
        <DailyChart color={"#15AE73"} />
        <div className="day">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MAY</span>
          <span>JUN</span>
          <span>JUL</span>
          <span>AUG</span>
        </div>
      </div>
    </div>
  );
};

export default MonthltGraphCard;
