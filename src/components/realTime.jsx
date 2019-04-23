import React from "react";
import RealTimeParamsPanel from "containers/realTimeParamsPanel";

const RealTime = () => (
  <div className="container is-fluid section">
    <div className="columns is-centered">
      <div className="column is-three-quarters">
        <RealTimeParamsPanel onParamsSelected={() => undefined} onReset={() => undefined} />
      </div>
    </div>
  </div>
);

export default RealTime;
