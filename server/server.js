const express = require('express');
const path = require('path');
const token = require('../token.js');
const app = express();
const port = 3000;
const axios = require('axios');

app.use('/static', express.static(path.join(__dirname, '/../client/dist')));
app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/qa', (request, response) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=14931&count=2', {
    headers: {
      'Authorization' : token
    }
  })
    .then((res) => {
      response.send(res.data);
    })
    .catch((error) => {
      response.send('error man');
    });
});

app.get('/answers', (request, response) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/84310/answers', {
    headers: {
      'Authorization' : token
    }
  })
    .then((res) => {
      response.send(res.data);
    })
    .catch((error) => {
      response.send('error man');
    });
});

app.get('/reviews', (request, response) => {
  const productId = "14296";
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', {
    headers: {
      Authorization: token,
    },
    params: {
      // Need to pass in params via request
      product_id: `${productId}`,
    },
  })
    .then((result) => {
      response.send(result.data);
    })
    .catch((error) => {
      response.send('Error fetching reviews: ', error);
    });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
