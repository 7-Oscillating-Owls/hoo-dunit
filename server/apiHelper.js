/* eslint-disable arrow-body-style */
const axios = require('axios');
const token = require('../token.js');

const apiCall = (url, method = 'get') => axios({
  url,
  method,
  headers: {
    Authorization: token,
  },
});

const fetchProductWithStyles = (productId) => {
  return Promise.all([
    apiCall(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}`),
    apiCall(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productId}/styles`),
  ])
    .then(([product, styles]) => {
      return {
        ...product.data,
        styles: styles.data.results,
      };
    });
};

module.exports = {
  apiCall,
  fetchProductWithStyles,
};
