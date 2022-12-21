import URL from './api-url.js';

const GET_SCORE = async () => fetch(URL)
  .then((response) => response.json())
  .then((data) => data.result)
  .catch((error) => error);

export default GET_SCORE;