// const middlewares = {
//   setDefaultHeaders(req, res, next) {
//     res.setHeader('Content-Type', 'application/json');
//     next();
//   },
// };

module.exports = middlewares;

const middlewares = {
  setDefaultHeaders(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
  },
};

module.exports = middlewares;

const middlewares = {
  setDefaultHeaders(req, res, next) {
    res.setHeader('Second Content-Type', 'app/json');
    next();
  },
};