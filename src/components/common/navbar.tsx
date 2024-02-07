import React from "react";
import { DownArrow } from "@/assets/svgs";
const Navigation = () => {
  return (
    <header>
      <nav>
        <h4>Hello Ayomide! 👋🏼</h4>

        <div className="left_nav">
          <button>Download Report</button>

          <div className="profile">
            <div className="profile_container">
              <h4>AO</h4>
            </div>
            <DownArrow />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
