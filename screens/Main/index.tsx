import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import GraphQL from "../../services/GraphQL";
import { FoodCategory } from "types";

const MainContainer = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  return (
    <div className="container py-5">
      <Header />

      <Body
        onFormSubmit={async formInputs => {
          setIsFormSubmitting(true);

          try {
            await GraphQL.insertFeedingLog({
              dateTime: new Date(
                `${formInputs.date} ${formInputs.time}`
              ).toISOString(),
              location: formInputs.location,
              howMany: Number(formInputs.howMany),
              foodCategory: formInputs.foodCategory as FoodCategory,
              food: formInputs.foodSubcategory,
              foodQuantity: Number(formInputs.foodQuantity)
            });
          } catch (e) {
            console.log(e.message);
          } finally {
            setIsFormSubmitting(false);
          }
        }}
        isFormSubmitting={isFormSubmitting}
      />

      <div className="container fixed-top pt-3">
        <div className="alert alert-primary" role="alert">
          Submitted successfully!
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
