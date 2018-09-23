import Koa from 'koa';
import morgan from 'koa-morgan';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'Hello World!';
});

app.use(morgan('dev')).use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
