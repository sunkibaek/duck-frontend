import ApolloClient, { gql } from "apollo-boost";
import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import fetch from "node-fetch";

const INSERT_FEEDING_LOG = gql`
  mutation InsertFeedingLog(
    $dateTime: String!
    $location: String!
    $howMany: Int!
    $foodCategory: FoodCategory!
    $food: String!
    $foodQuantity: Int!
  ) {
    insertFeedingLog(
      input: {
        dateTime: $dateTime
        location: $location
        howMany: $howMany
        foodCategory: $foodCategory
        food: $food
        foodQuantity: $foodQuantity
      }
    ) {
      id
    }
  }
`;

const MainContainer = () => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const client = new ApolloClient({
    fetch: fetch as any,
    uri: "http://localhost:4000"
  });

  return (
    <div className="container py-5">
      <Header />

      <Body
        onFormSubmit={async formInputs => {
          setIsFormSubmitting(true);

          try {
            await client.mutate({
              mutation: INSERT_FEEDING_LOG,
              variables: {
                dateTime: new Date(
                  `${formInputs.date} ${formInputs.time}`
                ).toISOString(),
                location: formInputs.location,
                howMany: Number(formInputs.howMany),
                foodCategory: formInputs.foodCategory,
                food: formInputs.foodSubcategory,
                foodQuantity: Number(formInputs.foodQuantity)
              }
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
