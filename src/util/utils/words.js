const axios = require('axios');
require('dotenv').config({ path: __dirname + '/./../config/.env' });
const apikey = process.env.WORDS_API_KEY;

const getPhonetic = async (word) => {
  try {
    const res = await axios.get(
      `https://wordsapiv1.p.rapidapi.com/words/${word}/pronunciation`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
          'x-rapidapi-key': apikey,
          useQueryString: 'true',
        },
      }
    );
    return res.data.pronunciation.all;
  } catch (error) {
    // console.error(error);
    return '';
  }
};

module.exports = { getPhonetic };
