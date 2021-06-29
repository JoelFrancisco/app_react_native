import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://trackapi.nutritionix.com',
  headers: {
    'x-app-id': 'ce09e8a8',
    'x-app-key': '033868df8f426ac6685bc01208a787b8',
  },
});

const getFoodInfo = foodName => {
  api
    .get('/v2/search/instant', {
      params: {
        query: foodName,
      },
    })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.error(err);
    });
};

export { getFoodInfo };
