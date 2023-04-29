const router = require('express').Router(),
  testController = require('./test');

router.use('/test', testController);

module.exports = router;

hello there I want this to not be recognised
