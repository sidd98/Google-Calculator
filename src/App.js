import React, { useState } from "react";
import Button from "./components/buttons/Button";
import DisplayWrapper from "./components/displayWrapper/DisplayWrapper";
import "./App.scss";

export default function App() {
  const [data, setData] = useState("");
  const [exp, setExp] = useState("");
  const [prevExpression, setPrevExpression] = useState("");

  const evaluate = (value) => {
    try {
      const answer = eval(data);
      setData(answer);
      setExp(data + value);
      setPrevExpression(value);
    } catch (error) {
      setData("Error");
    }
  };

  const clear = () => {
    if (prevExpression !== "=") {
      setData(data.slice(0, -1));
    } else {
      setData("");
      setExp(`Answer = ${data}`);
    }
  };
  const onClick = (value) => {
    if (data === "Error" && value !== "clear") {
      setExp(`Answer = ${data}`);
      setData(value);
      setPrevExpression("");
      return;
    }

    switch (value) {
      case "=": {
        if (prevExpression === "=") break;
        evaluate(value);
        break;
      }
      case "clear": {
        clear();
        break;
      }
      default: {
        setData(data + value);
        setPrevExpression(value);
      }
    }
  };

  return (
    <div className="App">
      <DisplayWrapper expression={exp} data={data} />
      <Button onClick={onClick} />
    </div>
  );
}
