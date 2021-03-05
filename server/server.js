const express = require('express');
const path = require('path');
// const token = require('../token.js')
const app = express();
const port = 3000;
const axios = require('axios');

app.use('/static', express.static(path.join(__dirname, '/../client/dist')));
app.use('/', express.static(path.join(__dirname, '..', 'public')));

// app.get('/qa', (request, response) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=14931&count=2', {
//     headers: {
//       'Authorization' : token
//     }
//   })
//     .then((res) => {
//       response.send(res.data);
//     })
//     .catch((error) => {
//       response.send('error man');
//     });
// });

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
