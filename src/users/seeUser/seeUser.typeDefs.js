import { gql } from "apollo-server-express";

export default gql`
  type SeeUserResult {
    ok: Boolean!
    error: String
    user: User
  }
  type Query {
    seeUser(
      username: String!
      followersLastId: Int
      followingLastId: Int
    ): SeeUserResult
  }
`;
