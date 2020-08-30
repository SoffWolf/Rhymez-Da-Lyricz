const consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "w"];
const vowel = ["u", "e", "o", "a", "i"];
const phonetic_vowel = ["i", "ɪ", "ɛ", "æ", "ɑ", "ʌ", "ə", "ɔ", "ʊ", "u", "ɜ", "e", "ɒ"];
const phonetic_diphthong = ["eɪ", "aɪ", "ɔɪ", "oʊ", "əʊ", "əe", "ɪə", "aʊ", "ɜr", "ir", "ʊr", "ʊə"];
const nearly_rhymes = [["e", "æ"], ["ɪə", "i"], ["ɒ", "ɔ"], ["ʊ", "u", "ʊə"], ["ɜ", "ə", "ʌ"], ["eɪ", "aɪ"], ["əʊ", "aʊ"]]


// input a phonetic form of a word, output a list of vowel rhymes in order of the original owrd
function get_the_rhyme_list(phonetic){
    let char_list = phonetic.split();
    let vowel_rhymes_list = [];
    for (i = 0; i < char_list.lenght; i++){
        if (!(char_list[i] in consonant)){
            if ((char_list[i] in phonetic_vowel) || (char_list[i] in phonetic_diphthong)){
                vowel_rhymes_list.push(char_list[i]);
            }
        }
    }
    return vowel_rhymes_list;
}


function in_same_rhyme_scheme(rhyme_1, rhyme_2){
    let count = 0;
    for (k = 0; k < nearly_rhymes.length; k++){
        if ((rhyme_1 in nearly_rhymes[k]) && (rhyme_2 in nearly_rhymes[k]) ){
            count ++;
        }
    }
    if (count > 0){return true;}
    else{return false;}
}


// IMPORTANT: the funtion return number of 
function number_of_rhymes(phonetic_1, phonetic_2){
    let rhymes_list_1 = get_the_rhyme_list(phonetic_1).reverse();
    let rhymes_list_2 = get_the_rhyme_list(phonetic_2).reverse();
    let rhymes_count = 0;
    for (i = 0; i < Math.min(rhymes_list_1.length, rhymes_list_2.length); i++){
        if (rhymes_list_1[i] == rhymes_list_2[i]){
            rhymes_count ++;
        }
        else if (in_same_rhyme_scheme(rhymes_list_1[i], rhymes_list_2[i])) {
            rhymes_count ++;
        }
        else{
            break;
        }
    }
    return rhymes_count;
}
