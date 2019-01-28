const router = require('express').Router();
const axios  = require('axios');

const Rankings = require('./Rankings');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use("/rankings", Rankings);


module.exports = router;
