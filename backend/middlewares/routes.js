const homeRouter = require('../routers/homeRouter');
const userRouter = require('../routers/userRouter');

module.exports = (app) => {
    app.use(homeRouter);
    app.use('/user', userRouter);
}