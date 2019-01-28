const express = require('express')
const app = express();

const routes = require('./routes');

app.use("/api", routes);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});pack