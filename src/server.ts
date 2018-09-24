import { ApolloServer, gql } from 'apollo-server-koa';
import Koa from 'koa';
import morgan from 'koa-morgan';
import Router from 'koa-router';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const app = new Koa();
const router = new Router();
const server = new ApolloServer({ typeDefs, resolvers });

app.use(morgan('dev')).use(router.routes());

// https://github.com/apollographql/apollo-server/issues/1393
// tslint:disable-next-line
server.applyMiddleware({ app: app as any });

router.get('/', async ctx => {
  ctx.body = 'Hello World!';
});

app.listen(3000);

console.log('Server running on port 3000');
