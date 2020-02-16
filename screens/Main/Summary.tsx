import React, { FC } from "react";
import SummaryItem from "./SummaryItem";

interface ISummaryProps {
  date: string;
  location: string;
  howMany: string;
  food: string;
  foodQuantity: string;
}

const Summary: FC<ISummaryProps> = ({
  date,
  location,
  howMany,
  food,
  foodQuantity
}) => (
  <aside>
    <h4 className="mb-4 text-muted">Summary</h4>

    <div className="card">
      <ul className="list-group list-group-flush">
        <SummaryItem
          name="Date time"
          description="When they are fed?"
          value={date}
        />

        <SummaryItem
          name="Place"
          description="Where are they fed?"
          value={location}
        />

        <SummaryItem
          name="How many ducks"
          description="How many are fed?"
          value={`${howMany} ducks`}
        />

        <SummaryItem
          name="Food"
          description="What are they fed?"
          value={food}
        />

        <SummaryItem
          name="Food quantity"
          description="How much are they fed?"
          value={`${foodQuantity} boxes`}
        />
      </ul>
    </div>
  </aside>
);

export default Summary;
