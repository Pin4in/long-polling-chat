const Router = require('koa-router');
const router = new Router();
const chat = require('./chat');

module.exports = router
  .get('/subscribe', async ctx => {
    const message = await new Promise(resolve => {
      chat.subscribe(resolve);

      ctx.res.on('close', () => chat.disconnect(resolve));
    });


    ctx.body = message;
  })
  .post('/publish', ctx => {
    const { message } = ctx.request.body;

    if (!message || typeof(message) !== 'string') {
      ctx.throw(400);
    }

    chat.publish(message);

    ctx.body = 'Ok';
  })
;
