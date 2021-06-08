import axios from 'axios';

const api = axios.create({
  baseUrl: "https://https://trackapi.nutritionix.com/",
  headers: {
    "x-app-id": "ce09e8a8",
    "x-app-key": "033868df8f426ac6"
  },
  timeout: 1000,
})

const getFood = (foodName) => {
  api.get('/v2/search/food', {
    params: {
      query: foodName
    }
  })
  .then((response) => {
    return response;
  })
  .catch((err) => {
    console.error(err);
  })
}

export { getFood }