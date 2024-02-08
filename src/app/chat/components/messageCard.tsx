import React from "react";
import { cardTypes } from "@/constants/types";
import SkeletonCard from "@/components/skeleton/SkeletonCard";
import UseCustomHooks from "@/hooks/useCustomHooks";
import { bytesToMegabytes } from "@/utils/helpers";

const MessageCard = ({ name, number }: cardTypes) => {

    let displayNumber;

    if (name === "TOTAL MEDIA STORAGE USED" && number !== undefined) {
      const numberInGB = bytesToMegabytes (number);
      displayNumber = (
        <span>
          {numberInGB} MB
        </span>
      );
    } else {
      displayNumber = number !== undefined ? `${number}` : "";
    }

  return (
    <div className="card">
      <p>{name}</p>
      <h2>{displayNumber}</h2>
    </div>
  );
};

export default MessageCard;
