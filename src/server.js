import { ApolloServer } from 'apollo-server';
import { schema } from './graphql/shema';
import { PORT } from 'babel-dotenv'

const server = new ApolloServer({schema});

server.listen(PORT).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
