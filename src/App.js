import React, { useState } from "react";
import { Circle } from "./Components/Circle";
import "./App.css";

export default function App() {
  const [num, setNum] = useState(0);

  const handleInput = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="nested-circles-container">
      <input
      className="circle-input"
        onChange={(e) => handleInput(e)}
        placeholder="Enter number of circles"
        type="number"
      />
      <Circle numbCircles={num}></Circle>
    </div>
  );
}