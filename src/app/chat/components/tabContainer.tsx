import React from "react";
import { Search } from "@/assets/svgs";

const TabContainer = ({ activeTab, handleTabClick, searchTerm, handleSearchChange}: any) => {
    

  return (
    <div className="Tab">
      <div className="btns">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => handleTabClick("tab1")}
        >
          Direct Messages
        </button>
        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => handleTabClick("tab2")}
        >
          Groups
        </button>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          onClick={(e) => e.stopPropagation()}
          className="cardSearch"
        />

        <Search />
      </div>
    </div>
  );
};

export default TabContainer;
