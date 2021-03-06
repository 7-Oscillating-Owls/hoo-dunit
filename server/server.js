const express = require('express');
const path = require('path');
const axios = require('axios');

const token = require('../token.js');
const { apiCall, fetchProductWithStyles } = require('./apiHelper.js');

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

app.get('/api/products/:productId', (request, response) => {
  const { productId } = request.params;

  if (productId) {
    fetchProductWithStyles(productId)
      .then((result) => response.send(result))
      .catch((error) => response.status(400).send(error));
  }
});

app.get('/api/products/:productId/related', (request, response) => {
  const { productId } = request.params;

  if (!productId) {
    return response.status(400);
  }

  return apiCall(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}/related`)
    .then((relatedIds) => {
      // eslint-disable-next-line arrow-body-style
      const relatedProducts = relatedIds.data.map((relatedId) => {
        return fetchProductWithStyles(relatedId);
      });

      return Promise.all(relatedProducts);
    })
    .then((relatedProducts) => response.send(relatedProducts))
    .catch((error) => response.status(400).send(error));
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
