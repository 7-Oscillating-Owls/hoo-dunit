const express = require('express');
const path = require('path');
const axios = require('axios');

const token = require('../token.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, '/../client/dist')));
app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use('/products/*', express.static(path.join(__dirname, '..', 'public')));

app.get('/qa', (request, response) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=14931&count=2', {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      response.send(res.data);
    })
    .catch(() => {
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

// Get product's review information
app.get('/reviews', (request, response) => {
  const productId = "14296"; // 14931, 14932, 14034, 14296, 14807
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', {
    headers: {
      Authorization: token,
    },
    params: {
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

// Get product's review meta data
app.get('/reviews/meta', (request, response) => {
  const productId = "14296"; // 14931, 14932, 14034, 14296, 14807
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta', {
    headers: {
      Authorization: token,
    },
    params: {
      product_id: `${productId}`,
    },
  })
    .then((result) => {
      response.send(result);
    })
    .catch((error) => {
      response.send('Error fetching reviews meta data: ', error);
    });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
