import getRhymeSuggestion from '../util/utils/rhyme';

import {
    RHYME_UPDATE
} from "./types";
export const updateRhyme = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        for (const element of formData) {
            console.log(await getRhymeSuggestion(element.word1, element.word2));
        };
        // dispatch({
        //     type: RHYME_UPDATE,
        //     payload: res.data
        // });
        // dispatch(setAlert('Rhyme Found', 'success'));
    } catch (error) {

    }
}
