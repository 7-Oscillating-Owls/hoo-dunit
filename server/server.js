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

//Questions and Answers get_______________________________________
app.get('/qa', (request, response) => {
  const { productId } = request.query;
  console.log(productId);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', {
    headers: {
      Authorization: token,
    },
    params: {
      product_id: `${productId}`,
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
//Questions and Answers get End_______________________________________

// -------------------- RATINGS AND REVIEWS REQUESTS --------------------




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
      response.send('Server error fetching reviews: ', error);
      response.status(400);
    });
});

// Get product's review meta data
app.get('/reviews/meta', (request, response) => {
  const { productId } = request.query;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta', {
    headers: {
      Authorization: token,
    },
    params: {
      product_id: productId,
    },
  })
    .then((result) => {
      response.send(result.data);
      response.status(200);
    })
    .catch((error) => {
      response.send('Server error fetching reviews meta data: ', error);
      response.status(400);
    });
});

// Reviews post request
app.post('/reviews', (request, response) => {
  // console.log('This is request.body: ', request.body);
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', request.body, {
    headers: {
      Authorization: token,
    },
    params: {
      product_id: request.body.product_id,
    },
  })
    .then((result) => {
      response.status(201);
      response.send('Add review server response: ', result);
    })
    .catch((error) => {
      response.status(404);
      response.send('Server error posting review: ', error);
    });
});

// -------------------- END OF RATINGS AND REVIEWS REQUESTS --------------------

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
      const uniqRelatedIds = [...new Set(relatedIds.data)];
      // eslint-disable-next-line arrow-body-style
      const relatedProducts = uniqRelatedIds.map((relatedId) => {
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
    questionId,
  } = req.body;

  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/{questionId}/answers', {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      response.send('Successfuly posted');
    })
    .catch((error) => {
      response.send('error posting');
    });
});
// Questions and Answers--------------------------------------
const headers = {
  headers: {
    'Authorization' : token,
  },
};

app.post('/qa/postQuestion', (req, res) => {
  const { body, name, email, productId } = req.body;
  console.log(req.body)
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', {
    body, name, email, productId,
  }, headers)
    .then((response) => {
      res.send('posted question');
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
// Questions and Answers End------------------------------------

/* post request to the api to create cart data */
app.post('/cart', (request, response) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart', { sku_id: request.body.sku_id }, {
    headers: {
      Authorization: token,
    },
  })
    .then(() => {
      response.status(404);
    })
    .catch(() => {
      response.status(201);
    });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
