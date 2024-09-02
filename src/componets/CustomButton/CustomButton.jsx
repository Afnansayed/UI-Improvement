import React, { useState } from "react";
import "./CustomButton.css";

const CustomButton = ({ onToggle }) => {
  const [isPaused, setIsPaused] = useState(true);

  const handleClick = () => {
    setIsPaused(!isPaused);
    onToggle(!isPaused);
  };

  return (
    <div 
      className={`play-button ${isPaused ? "" : "pause"}`} 
      onClick={handleClick}
    >
      <span></span>
    </div>
  );
};

export default CustomButton;
