const homeRouter = require('../routers/homeRouter');
const userRouter = require('../routers/userRouter');
const clientJobRouter = require('../routers/clientJobRouter');

module.exports = (app) => {
    app.use(homeRouter);
    app.use('/user', userRouter);
    app.use('/user/client/job', clientJobRouter);
}