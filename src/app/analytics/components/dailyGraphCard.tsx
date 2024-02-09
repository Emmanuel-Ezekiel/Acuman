import React from "react";
import DailyChart from "./charts/dailyChart";
import { ButtonDown } from "@/assets/svgs";

const GraphCard = () => {
  return (
    <div className="graphCard">
      <div className="graphContainer">
        <div className="Btns">
          <span>DAILY ACTIVE USERS</span>

          <button>
            30 Days <ButtonDown />{" "}
          </button>

          <button>
            All Activites <ButtonDown />{" "}
          </button>
        </div>

        <DailyChart color={"#EA8D51"} />

        <div className="day">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SUN</span>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
