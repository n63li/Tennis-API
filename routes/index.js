const router = require('express').Router();
const axios  = require('axios');

const Rankings = require('./Rankings');
const Stats = require('./Stats');
const Players = require('./Players');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use("/rankings", Rankings);
router.use("/stats", Stats);
router.use("/players", Players)
module.exports = router;
