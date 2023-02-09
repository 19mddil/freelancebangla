const homeRouter = require('../routers/homeRouter');

module.exports = (app) => {
    app.use(homeRouter);
}