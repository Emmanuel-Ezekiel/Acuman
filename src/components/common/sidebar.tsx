"use client";

import React, { useState } from "react";
import { SidebarLogo, Dropdown } from "@/assets/svgs";
import { SiderBarData, SiderBarData2 } from "@/constants/sidebarData";
import { Line } from "../Line";
import Link from "next/link";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(1);

  const handleItemClick = (id: number) => {
    setSelectedItem(id);
  };

  const handleItemClick2 = (id: number) => {
    setSelectedItem(id);
  };

  return (
    <aside>
      <div className="Logo_container">
        <div className="Logo_Box">
          <SidebarLogo />
          <h4>App Name</h4>
        </div>

        <div className="dropdown">
          <Dropdown />
        </div>
      </div>

      <ul>
        {SiderBarData.map((item) => (
          <Link href={item.link}>
            <li
              key={item.id}
              className={selectedItem === item.id ? "clicked-item" : "item"}
              onClick={() => handleItemClick(item.id)}
            >
              {item.icon}
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <Line variant={"line"} />

      <ul className="bottomSidebar">
        {SiderBarData2.map((item) => (
          <li
            key={item.id}
            style={{ color: item.id === 2 ? "#D53120" : "#9999BC" }}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
