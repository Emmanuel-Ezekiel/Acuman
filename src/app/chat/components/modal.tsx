import React from "react";
import { Line } from "@/components/Line";
import { Eye, Cancel } from "@/assets/svgs";
const Modal = () => {
  return (
    <div className="modal">
      <div className="view">
        <span>View</span>
        <Eye />
      </div>
      <Line variant={"ModaLine"} />
      <div className="disable">
        <span>Disable</span>
        <Cancel />
      </div>
    </div>
  );
};

export default Modal;
