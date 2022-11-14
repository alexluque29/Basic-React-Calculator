import React from "react";
import "../styles/button.css";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <>
      <div
        className="button"
        onClick={() => handleClick(symbol)}
        style={{ backgroundColor: color }}
      >
        {symbol}
      </div>
    </>
  );
};

export default Button;
