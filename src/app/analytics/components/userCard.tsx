import React from "react";
import { cardTypes } from "@/constants/types";
import { bytesToGigabytes } from "@/utils/helpers";

const UserCard = ({ name, number }: cardTypes) => {

  let displayNumber;

  if (name === "DASHBOARD" && number !== undefined) {
    const numberInGB = bytesToGigabytes(number);
    displayNumber = (
      <span>
        {numberInGB} GB <span style={{ fontSize: "15px" }}> of 512 GB</span>
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

export default UserCard;
