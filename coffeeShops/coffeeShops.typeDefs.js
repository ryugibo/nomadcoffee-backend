import { gql } from "apollo-server";

export default gql`
  type CoffeeShop {
    id: Int!
    name: String!
    latitude: String!
    longitude: String!
    user: User!
    photos: [CoffeeShopPhoto]
    categories: [Categoty]
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
    shops: [CoffeeShop]
    totalShops: Int
  }
`;
