const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, '/../client/dist')));
app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/qa', (request, response) => {
  response.send('qa');
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
