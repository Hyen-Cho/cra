const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', api);

const port = 3002;
app.listen(port, () => console.log(`Listening on port ${port}`));
