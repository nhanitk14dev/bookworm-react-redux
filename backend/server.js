const express = require('express');
const cors = require('cors')
const app = express();
const data = require('./data');
console.log(data.users[0]);

app.use(cors());

app.use('/token', (req, res) => {
  res.send({
    token: 'token-xxx1x1',
    status: 200
  });
});

app.use('/auth', (req, res) => {
  // todo filter by token
  res.send(data.users[0]);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/token'));
