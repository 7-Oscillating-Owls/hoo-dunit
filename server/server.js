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
  const { productId } = request.query;
  console.log(productId)
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', {
    headers: {
      Authorization: token,
    },
    params: {
      product_id: `${productId}`
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
      Authorization: token,
    },
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
  const { productId, page } = request.query;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', {
    headers: {
      Authorization: token,
    },
    params: {
      product_id: `${productId}`,
      count: 100,
      page: `${page}`,
    },
  })
    .then((result) => {
      response.send(result.data);
      response.status(200);
    })
    .catch((error) => {
      response.send('Error fetching reviews: ', error);
      response.status(400);
    });
});

// Get product's review meta data
app.get('/reviews/meta', (request, response) => {
  // const productId = '14296'; // 14931, 14932, 14034, 14296, 14807
  const { productId } = request.query;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta', {
    headers: {
      Authorization: token,
    },
    params: {
      product_id: `${productId}`,
    },
  })
    .then((result) => {
      response.send(result.data);
      response.status(200);
    })
    .catch((error) => {
      response.send('Error fetching server reviews meta data: ', error);
      response.status(400);
    });
});

// Reviews post request
app.post('/reviews', (request, response) => {
  // const {
  //   product_id,
  //   rating,
  //   summary,
  //   body,
  //   recommend,
  //   name,
  //   email,
  //   photos,
  //   // Characteristics portion still needs work on - may need put request for characteristics
  //   characteristics: characteristics,
  // } = request.body;
  // console.log('This is request.body: ', request.body);
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', request.body, {
    headers: {
      Authorization: token,
    },
    params: {
      product_id: request.body.product_id,
    },
  })
    .then((response) => {
      response.status(201);
      response.send('Add review server response: ', response);
    })
    .catch((error) => {
      response.status(404);
      response.send('Error with server review post request: ', error);
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

app.post('/qa/postAnswer', (req, res) => {
  const {
    body,
    name,
    email,
    questionId
  } = req.body;


  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/{questionId}/answers`, {
    headers: {
      'Authorization' : token
    }
  })
    .then((res) => {
      response.send('Successfuly posted');
    })
    .catch((error) => {
      response.send('error posting');
    });
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
