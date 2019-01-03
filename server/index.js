const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser());
app.use('/restaurants/:id/', express.static(`${__dirname}/../public/`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = 3000;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});