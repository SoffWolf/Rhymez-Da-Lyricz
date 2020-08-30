const { getRhymeSuggestion } = require('../util/utils/rhyme')

export const updateRhyme = (formData) => async dispatch => {
    try {

    } catch (error) {
        dispatch({
            type: RHYME_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
}
