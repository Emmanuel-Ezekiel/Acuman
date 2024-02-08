"use client";

import React from "react";
import MessageCard from "./components/messageCard";
import UseCustomHooks from "@/hooks/useCustomHooks";
import SkeletonCard from "@/components/skeleton/SkeletonCard";
const Chat = () => {
  const { chatData, loading } = UseCustomHooks();

  console.log(chatData);

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

      <div className="Tab">
        
      </div>
    </main>
  );
};

export default Chat;
