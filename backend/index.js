const express = require("express");
const rootRouter = require('./routes/index')

const port = 3000;
const app = express();

app.use('/api/v1',rootRouter)

app.listen(port)