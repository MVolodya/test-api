import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import morgan from 'koa-morgan';
import Router from 'koa-router';
import { schema } from './graphql/shema';

const { PORT } = process.env;

const app = new Koa();
const router = new Router();
const server = new ApolloServer({schema});

app.use(morgan('dev')).use(router.routes());

// https://github.com/apollographql/apollo-server/issues/1393
// tslint:disable-next-line
server.applyMiddleware({ app: app as any });

app.listen(PORT);

console.log(`Server running on port: ${PORT}`);
