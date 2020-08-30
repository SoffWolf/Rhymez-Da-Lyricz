const axios = require('axios');
require('dotenv').config({ path: __dirname + '/./../config/.env' });
const apikey = process.env.THESAURUS_API_KEY;

const getSynonym = async (word) => {
  const res = await axios.get(
    `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apikey}`
  );
  if (!res.data[0].def) {
    return res.data;
  }

  const syn_list = res.data[0].def[0].sseq[0][0][1].syn_list;
  const rel_list = res.data[0].def[0].sseq[0][0][1].rel_list;

  const synonymList = syn_list.map((arr) => {
    return arr.map((item) => item.wd);
  });
  const relativeList = rel_list.map((arr) => {
    return arr.map((item) => item.wd);
  });

  const synonyms = [].concat.apply([], synonymList);
  synonyms.push(word);
  const relatives = [].concat.apply([], relativeList);
  return synonyms.concat(relatives);
};

// getSynonym('computer')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
module.exports = { getSynonym };
