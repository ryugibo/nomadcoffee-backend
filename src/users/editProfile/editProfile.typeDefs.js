import { gql } from "apollo-server";

export default gql`
  type editProfileResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    editProfile(
      username: String
      password: String
      email: String
      name: String
      location: String
      avatar: Upload
      githubUsername: String
    ): editProfileResult
  }
`;
