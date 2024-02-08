"use client";

import React from "react";
import MessageCard from "./components/messageCard";
import UseCustomHooks from "@/hooks/useCustomHooks";
import SkeletonCard from "@/components/skeleton/SkeletonCard";
import Table from "./components/table";
import Pagination from "./components/pagination";
import TabContainer from "./components/tabContainer";
const Chat = () => {
  const { chatData, loading, setPage, page, tableData, totalPages } =
    UseCustomHooks();
  const [activeTab, setActiveTab] = React.useState("tab1");
  const [searchTerm, setSearchTerm] = React.useState<string>("");
 

  const handleSearchChange = (input: string) => {
    const filteredInput = input.replace(/[^a-zA-Z]/g, ""); // Remove non-letter characters
    setSearchTerm(filteredInput);
  };

  // Function to handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="chat">
      {loading ? (
        <SkeletonCard number={4} />
      ) : (
        <div className="card_container">
          <MessageCard name={"NO OF USERS"} number={chatData?.numberOfUsers} />
          <MessageCard
            name={"TOTAL MESSAGE SENT"}
            number={chatData?.totalMessagesSent}
          />
          <MessageCard
            name={"TOTAL MEDIA STORAGE USED"}
            number={chatData?.totalStorageUsed}
          />
          <MessageCard
            name={"TOTAL MEDIA SENT"}
            number={chatData?.totalMediaSent}
          />
        </div>
      )}

      <TabContainer
        activeTab={activeTab}
        handleTabClick={handleTabClick}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />

      {activeTab === "tab1" && (
        <div className="table-container">
          <Table data={tableData} searchTerm={searchTerm} />

          <Pagination setPage={setPage} postPerPage={totalPages} page={page} />
        </div>
      )}
      {activeTab === "tab2" && <div></div>}
    </main>
  );
};

export default Chat;
