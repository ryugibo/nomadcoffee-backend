require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "ee",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`Server is running on http://localhost:${PORT}/`));
