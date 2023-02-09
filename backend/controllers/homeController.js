module.exports.homePage = (req, res) => {
    return res.send(`Hi, from the ${process.env.NODE_ENV} server`);
}