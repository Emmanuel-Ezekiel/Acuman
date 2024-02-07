import React from "react";
import { lineTypes } from "../constants/types";
export const Line = ({ variant }:lineTypes) => {
  return <div className={variant}></div>;
};
