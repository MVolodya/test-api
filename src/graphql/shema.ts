import { makeExecutableSchema } from 'apollo-server-koa';
import { resolvers as userResolvers, typeDef as User } from './user';

const typeDefs = `
  type Query {
    getUser(email: String): [User]
  }
`;

const resolvers = {
  Query: {
    getUser: userResolvers.User
  }
};

// @ts-ignore
export const schema = makeExecutableSchema({
  typeDefs: [ typeDefs, User],
  resolvers: [ resolvers, userResolvers ],
});
