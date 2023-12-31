// Want to use async/await? Add the `async` keyword to your outer function/method.
const axios = require("axios");
require('dotenv').config();

module.exports = async function () {
    try {
      const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}