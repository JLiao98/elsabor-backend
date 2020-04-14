const express = require('express');
// const usersRouter = require('./users');
// const sensorRoute = require('./sensor');
const meta = require('../../package.json');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.send({ version: meta.version }));

// module.exports = {
//   indexRouter: router,
//   usersRouter,
//   sensorRoute,
// };

module.exports = router;
