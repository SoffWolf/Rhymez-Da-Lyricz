const {
  consonant,
  vowel,
  phonetic_vowel,
  phonetic_diphthong,
  nearly_rhymes,
} = require('../config/rhyme.json');
const { getPhonetic } = require('./words');
const { getSynonym } = require('./thesaurus');
// input a phonetic form of a word, output a list of vowel rhymes in order of the original owrd
const get_the_rhyme_list = (phonetic) => {
  let char_list = phonetic.split('');

  let vowel_rhymes_list = [];
  for (let i = 0; i < char_list.length; i++) {
    if (!consonant.includes(char_list[i])) {
      if (
        phonetic_vowel.includes(char_list[i]) ||
        phonetic_diphthong.includes(char_list[i])
      ) {
        vowel_rhymes_list.push(char_list[i]);
      }
    }
  }

  return vowel_rhymes_list;
};

const in_same_rhyme_scheme = (rhyme_1, rhyme_2) => {
  let count = 0;
  for (let k = 0; k < nearly_rhymes.length; k++) {
    if (
      nearly_rhymes[k].includes(rhyme_1) &&
      nearly_rhymes[k].includes(rhyme_2)
    ) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
};

// IMPORTANT: the funtion return number of
const number_of_rhymes = async (word1, word2) => {
  try {
    const phonetic_1 = await getPhonetic(word1);
    const phonetic_2 = await getPhonetic(word2);

    let rhymes_list_1 = get_the_rhyme_list(phonetic_1).reverse();
    let rhymes_list_2 = get_the_rhyme_list(phonetic_2).reverse();
    let rhymes_count = 0;

    for (
      let i = 0;
      i < Math.min(rhymes_list_1.length, rhymes_list_2.length);
      i++
    ) {
      if (rhymes_list_1[i] === rhymes_list_2[i]) {
        rhymes_count++;
      } else if (in_same_rhyme_scheme(rhymes_list_1[i], rhymes_list_2[i])) {
        rhymes_count++;
      } else {
        break;
      }
    }
    return { word1, word2, match: rhymes_count };
  } catch {
    (err) => {
      console.error(err);
    };
  }
};

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const matchA = a.match;
  const matchB = b.match;

  let comparison = 0;
  if (matchA > matchB) {
    comparison = -1;
  } else if (matchA < matchB) {
    comparison = 1;
  }
  return comparison;
}

const getRhymeSuggestion = async (word1, word2) => {
  try {
    let replaceWords = [];
    const synWords = await getSynonym(word2);

    //-----slow ver
    // for (const syn of synWords) {
    //   let isRhyme = await number_of_rhymes(word1, syn);

    //   if (typeof isRhyme !== 'undefined' && isRhyme.match > 0) {
    //     console.log(isRhyme);
    //     replaceWords.push(isRhyme);
    //     console.log(replaceWords);
    //   }
    // }

    //-----updated ver
    await Promise.all(
      synWords.map(async (syn) => {
        const isRhyme = await number_of_rhymes(word1, syn);
        if (typeof isRhyme !== 'undefined' && isRhyme.match > 0) {
          replaceWords.push(isRhyme);
        }
      })
    );

    return replaceWords.sort(compare);
  } catch (err) {
    console.error(err);
  }
};
// getRhymeSuggestion('invisible', 'criminal').then((res) => console.log(res));
// getRhymeSuggestion('invisible', 'criminal')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// number_of_rhymes('invisible', 'criminal')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// console.log(number_of_rhymes(getPhonetic('nation'), getPhonetic('television')));

module.exports = { getRhymeSuggestion };
