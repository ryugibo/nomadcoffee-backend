import { gql } from "apollo-server";

export default gql`
  type CoffeeShop {
    id: Int!
    name: String!
    latitude: String!
    longitude: String!
    user: User!
    photos: [CoffeeShopPhoto]
    categories: [Category]
  }
  type CoffeeShopPhoto {
    id: Int!
    url: String!
    shop: CoffeeShop!
  }
  type Category {
    id: Int!
    name: String!
    slug: String!
    shops(page: Int!): [CoffeeShop]
    totalShops: Int
  }
`;
