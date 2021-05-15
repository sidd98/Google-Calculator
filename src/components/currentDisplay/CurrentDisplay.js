import React from "react";
import "./CurrentDisplay.scss";

export default function CurrentDisplay(props) {
  return <div className="input">{props.data === "" ? 0 : props.data}</div>;
}
