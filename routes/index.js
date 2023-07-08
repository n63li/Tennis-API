const express = require('express');

const router = express.Router();

const ATP = require('./ATP');
const WTA = require('./WTA');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

router.use('/atp', ATP);
router.use('/wta', WTA);
module.exports = router;
