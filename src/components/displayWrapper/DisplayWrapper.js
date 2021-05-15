import React from "react";
import CurrentDisplay from "../currentDisplay/CurrentDisplay";
import PrevDisplay from "../prevDisplay/PrevDisplay";

import './DisplayWrapper.scss';

function DisplayWrapper({ expression, data }) {
  return (
    <div className="display-wrapper">
      <PrevDisplay data={expression} />
      <CurrentDisplay data={data} />
    </div>
  );
}

export default DisplayWrapper;
