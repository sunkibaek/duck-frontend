import React from "react";
import SummaryItem from "./SummaryItem";

const Summary = () => (
  <aside>
    <h4 className="mb-4">Summary</h4>

    <div className="card">
      <ul className="list-group list-group-flush">
        <SummaryItem
          name="Date time"
          description="When they are fed?"
          value="2020/02/16 09:50"
        />

        <SummaryItem
          name="Place"
          description="Where are they fed?"
          value="Local pond"
        />

        <SummaryItem
          name="How many ducks"
          description="How many are fed?"
          value="20 ducks"
        />

        <SummaryItem
          name="Food"
          description="What are they fed?"
          value={"Animal - Fish"}
        />

        <SummaryItem
          name="Food quantity"
          description="How much are they fed?"
          value="20 boxes"
        />
      </ul>
    </div>
  </aside>
);

export default Summary;
