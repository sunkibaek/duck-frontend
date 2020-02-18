import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import GraphQL from "../../services/GraphQL";
import { FoodCategory } from "types";

const ALERT_TIMEOUT = 3000;

const MainContainer = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  useEffect(() => {
    if (isAlertVisible) {
      setTimeout(() => {
        setIsAlertVisible(false);
      }, ALERT_TIMEOUT);
    }
  }, [isAlertVisible]);

  return (
    <div className="container py-5">
      <Header />

      <Body
        onFormSubmit={async formInputs => {
          setIsFormSubmitting(true);

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

          setIsFormSubmitting(false);
          setIsAlertVisible(true);
        }}
        isFormSubmitting={isFormSubmitting}
      />

      {isAlertVisible ? (
        <div className="container fixed-top pt-3">
          <div className="alert alert-primary" role="alert">
            Submitted successfully!
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MainContainer;
