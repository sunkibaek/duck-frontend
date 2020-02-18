import ApolloClient, { gql } from "apollo-boost";
import fetch from "node-fetch";
import { FoodCategory } from "types";

interface IInsertFeedingLogVariables {
  dateTime: string;
  location: string;
  howMany: number;
  foodCategory: FoodCategory;
  food: string;
  foodQuantity: number;
}

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

const GraphQL = {
  client: new ApolloClient({
    fetch: fetch as any,
    uri: "http://localhost:4000"
  }),

  insertFeedingLog: async ({
    dateTime,
    location,
    howMany,
    foodCategory,
    food,
    foodQuantity
  }: IInsertFeedingLogVariables) => {
    return await GraphQL.client.mutate<
      { id: string },
      IInsertFeedingLogVariables
    >({
      mutation: INSERT_FEEDING_LOG,
      variables: {
        dateTime,
        location,
        howMany,
        foodCategory,
        food,
        foodQuantity
      }
    });
  }
};

export default GraphQL;
