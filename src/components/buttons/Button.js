import React from "react";
import { buttonOptions } from "../../utils/helper";
import "./Button.scss";

function Button(props) {
  return (
    <div className="button">
      {buttonOptions.map((option) => {
        return (
          <button
            className = {option.class}
            key={option.value}
            value={option.value}
            onClick={(e) => props.onClick(e.target.value)}
          >
            {option.view}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
