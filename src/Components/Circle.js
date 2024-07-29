import React from "react";
import "./Circle.css";

export const Circle = ({ numbCircles }) => {
  let size = numbCircles * 100;
  return (
    <div
      className="circle-new"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {numbCircles > 1 && <Circle numbCircles={numbCircles - 1}></Circle>}
    </div>
  );
};
