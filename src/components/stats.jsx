import React from "react";
import { withResetOnUnmount } from "hocs/resetOnUnmount";
import ParamsPanel from "components/paramsPanel";
import FiltersPanel from "components/filtersPanel";

const Stats = () => (
  <div className="container is-fluid section">
    <div className="columns">
      <div className="column is-three-quarters">
        <ParamsPanel
          statsType={{
            label: "Select stats type",
            items: ["event", "measurement"],
            isActive: true,
            onButtonClick: () => undefined,
            onItemClick: () => undefined,
          }}
          observationType={{
            label: "Select observation type",
            items: ["temperature", "humidity"],
            isActive: false,
            isLoading: false,
            isDisabled: true,
            onButtonClick: () => undefined,
            onItemClick: () => undefined,
          }}
          reset={{
            isDisabled: true,
            onReset: () => undefined,
          }}
        />
      </div>
      <div className="column is-one-quarter">
        <FiltersPanel />
      </div>
    </div>
  </div>
);

export default withResetOnUnmount(Stats);
