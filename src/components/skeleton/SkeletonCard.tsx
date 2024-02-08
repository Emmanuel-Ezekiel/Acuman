import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface props {
  number: number
}

const SkeletonCard = ({number}: props) => {
  return (
    <div className="card_container">
      {Array(number)
        .fill(number)
        .map((_, index) => (
          <div className="card" key={index}>
            <Skeleton height={25} width={90} />
            <Skeleton height={23} width={70} />
          </div>
        ))}
    </div>
  );
};

export default SkeletonCard;
