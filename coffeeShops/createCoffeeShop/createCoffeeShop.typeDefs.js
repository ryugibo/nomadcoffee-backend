import { gql } from "apollo-server";

export default gql`
  type CreateCoffeeShopResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createCoffeeShop(
      name: String!
      latitude: String!
      longitude: String!
      categories: [String]
    ): CreateCoffeeShopResult
  }
`;
