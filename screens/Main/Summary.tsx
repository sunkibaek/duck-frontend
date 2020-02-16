import React from "react";
import SummaryItem from "./SummaryItem";

const Summary = () => (
  <aside>
    <h4>Summary</h4>

    <div className="card">
      <ul className="list-group list-group-flush">
        <SummaryItem
          name="DateTime"
          description="When they are fed?"
          value="2020/02/16 09:50"
        />

        <SummaryItem
          name="How many ducks"
          description="How many are fed?"
          value="20 ducks"
        />

        <SummaryItem
          name="Place"
          description="Where they are fed?"
          value="Local pond"
        />

        <SummaryItem
          name="Food"
          description="What they are fed?"
          value="Animal - Fish (20 box)"
        />
      </ul>
    </div>
  </aside>
);

export default Summary;
